import p5 from "p5";

class Mover {
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  public mass: number;
  r: number;

  constructor(x: number, y: number, m: number) {
    this.pos = new p5.Vector(x, y);
    this.vel = new p5.Vector(0, 0);
    this.acc = new p5.Vector(0, 0);
    this.mass = m;
    this.r = Math.sqrt(this.mass) * 10;
  }

  firction(p: p5, isshow: boolean = true) {
    let firction = new p5.Vector(0, 0);
    let diff = p.height - (this.pos.y + this.r);
    if (diff < 1) {
      firction = this.vel.copy();

      firction.normalize();
      firction.mult(-1);
      let mu = 0.1;
      let normal = this.mass;

      firction.setMag(mu * normal);
      this.appleForce(firction);
    }
    if (isshow) {
      p.push();

      p.textFont("Courier New", 10);
      p.noStroke();
      p.textSize(19);
      p.textStyle(p.NORMAL);
      p.text(
        `force vector=(${Math.ceil(this.vel.x)},${Math.ceil(this.vel.y)})`,
        20,
        30
      );
      p.pop();
    }
  }

  appleForce(force: p5.Vector) {
    let f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  edges(width: number, height: number) {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  update2() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show(p: p5) {
    p.stroke(255);
    p.strokeWeight(2);
    p.fill(255, 100);
    p.ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

export default Mover;
