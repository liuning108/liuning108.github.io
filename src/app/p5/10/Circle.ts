import { Console } from "console";
import { tree } from "d3-hierarchy";
import p5 from "p5";

type EachFun<T> = (c: Circle, i: number) => T;
interface Props {
  p: p5.Vector;
  r: number;
  color: string;
  lineTo: EachFun<boolean>;
  getWidth: EachFun<number>;
  anglePan: EachFun<number>;
  vertical: boolean;
  getVerticalWidth: EachFun<number>;
  ramp: number;
}
class Circle {
  private props: Props;

  r() {
    return this.props.r;
  }
  constructor(props: Partial<Props>) {
    let def: Props = {
      p: new p5.Vector(0, 0),
      r: 100,
      color: "white",
      lineTo: (c, i) => true,
      getWidth: (c, i) => 1,
      anglePan: (c, i) => 0,
      vertical: false,
      getVerticalWidth: (c, i) => 5,
      ramp: 0,
    };
    Object.assign(def, props);
    this.props = def;
  }

  draw(p: p5) {
    p.push();

    for (let i = 1; i <= 360; i++) {
      let angle1 = i + this.props.anglePan(this, i);
      let angle2 = i - 1 + this.props.anglePan(this, i);

      let use_r = this.props.r + this.props.ramp * p.sin(i / 10);

      let use_r2 = this.props.r + this.props.ramp * p.sin((i - 1) / 19);

      let x1 = use_r * p.cos(p.radians(angle1));
      let y1 = use_r * p.sin(p.radians(angle1));
      let x2 = use_r2 * p.cos(p.radians(angle2));
      let y2 = use_r2 * p.sin(p.radians(angle2));

      if (this.props.lineTo(this, i)) {
        p.strokeWeight(this.props.getWidth(this, i));
        p.stroke(this.props.color);
        p.beginShape();
        p.vertex(x1, y1);
        p.vertex(x2, y2);
        p.endShape(p.CLOSE);
      }
      if (this.props.vertical) {
        let l = this.props.getVerticalWidth(this, i);
        let x3 = (use_r + l) * p.cos(p.radians(angle1));
        let y3 = (use_r + l) * p.sin(p.radians(angle1));
        p.strokeWeight(this.props.getWidth(this, i));
        p.stroke(this.props.color);
        p.beginShape();
        p.vertex(x1, y1);
        p.vertex(x3, y3);
        p.endShape(p.CLOSE);
      }
    }

    p.pop();
  }
}
export default Circle;
