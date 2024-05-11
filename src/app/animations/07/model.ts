import Vector from "@/util/vector";
import { mapRangeRandom } from "./util";
import gsap from "gsap";
import { Fascinate } from "next/font/google";

export class Player {
  public id: number = 0;
  public p: Vector = new Vector();
  public v: Vector = new Vector();
  public a: Vector = new Vector();
  public mass: number = 0;
  public living = true;
  public color = "white";
  public type = "player";

  constructor(ars?: Partial<Player>) {
    const def: Partial<Player> = {
      id: parseInt("" + Math.random() * 10000),
      v: new Vector(mapRangeRandom(-5, 5), mapRangeRandom(-5, 5)),
      mass: 100,
      color: `hsl(${Math.random() * 360},60%,50%)`,
    };
    Object.assign(def, ars);
    Object.assign(this, def);
  }
  get r() {
    return Math.sqrt(this.mass);
  }
  get maxSpeed() {
    return 40 / Math.log(this.r) + 1;
  }

  eat(target: Player) {
    gsap.to(this, {
      mass: this.mass + target.mass,
      duration: 0.5,
    });
    target.living = false;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.p.x, this.p.y);
    ctx.arc(0, 0, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    if (this.type != "food") {
      ctx.font = "10px Aria";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(this.id.toString(), 0, 0);
    }
    ctx.restore();
  }

  update(w: number, h: number) {
    this.p = this.p.add(this.v);
    this.v = this.v.add(this.a);
    this.a = this.a.mul(0.98);
    if (this.mass < 0) {
      this.living = false;
    }
    this.checkBoundary(w, h);
  }

  checkBoundary(w: number, h: number) {
    if (this.p.x - this.r < -w / 2) {
      this.p.x = -w / 2 + this.r;
    }

    if (this.p.x + this.r > w / 2) {
      this.p.x = w / 2 - this.r;
    }

    if (this.p.y - this.r < -h / 2) {
      this.p.y = -h / 2 + this.r;
    }

    if (this.p.y + this.r > h / 2) {
      this.p.y = h / 2 - this.r;
    }
  }
}
