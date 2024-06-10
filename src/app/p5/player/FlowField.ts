import p5 from "p5";

class FlowField {
  public resolution: number = 20;
  public cols: number = 0;
  public rows: number = 0;
  public fields: Array<Array<p5.Vector>> = [];
  constructor(width: number, height: number) {
    this.cols = Math.floor(width / this.resolution);
    this.rows = Math.floor(height / this.resolution);
    this.fields = new Array(this.cols).fill(0).map(() => new Array(this.rows));
  }

  init() {
    for (let i = 0; i < this.cols; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        this.fields[i][j] = p5.Vector.random2D().mult(2);
      }
    }
  }

  init2(p: p5) {
    // Reseed noise for a new flow field each time
    p.noiseSeed(p.random(10000));
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        //{.code-wide} In this example, use Perlin noise to create the vectors.
        let angle = p.map(p.noise(xoff, yoff), 0, 1, 0, p.TWO_PI);
        this.fields[i][j] = p5.Vector.fromAngle(angle);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }

  lookup(pos: p5.Vector, p: p5): p5.Vector {
    let col = p.constrain(p.floor(pos.x / this.resolution), 0, this.cols - 1);
    let row = p.constrain(p.floor(pos.y / this.resolution), 0, this.rows - 1);
    return this.fields[col][row].copy();
  }

  show(p: p5) {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let v = this.fields[i][j].copy();
        v.setMag(this.resolution * 0.5);
        let x = i * this.resolution + this.resolution / 2;
        let y = j * this.resolution + this.resolution / 2;
        p.stroke(255, 25);
        p.strokeWeight(1);
        p.push();
        p.translate(x, y);
        p.rotate(v.heading());
        p.stroke(0, 25);
        p.strokeWeight(1);
        p.line(0, 0, v.mag(), 0);
        p.strokeWeight(1);
        p.stroke(255, p.map(0.4, 0, 1, 0, 255));
        p.push();
        p.line(0, 0, v.mag(), 0);
        p.pop();
        p.line(v.mag(), 0, v.mag() - 2, 1);
        p.line(v.mag(), 0, v.mag() - 2, -1);

        //p.line(0, 0, -1, -1);
        p.pop();
      }
    }
  }
}
export default FlowField;
