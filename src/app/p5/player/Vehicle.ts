import p5 from "p5";
import { FALSE } from "sass";
import FlowField from "./FlowField";
class Vehilce {
  public pos: p5.Vector = new p5.Vector(0, 0);
  public vel: p5.Vector = new p5.Vector(0, 0);
  public acc: p5.Vector = new p5.Vector(0, 0);
  public maxspeed: number = 2;
  public mass: number = 2;
  public maxforce: number = 0.2;
  public r: number = 3;
  public dist: number = 100;
  constructor(props: Partial<Vehilce>) {
    Object.assign(this, props);
  }

  seek(
    target: p5.Vector,
    arrive: boolean = false,
    p: p5,
    showVec: boolean = false
  ) {
    let dersired = p5.Vector.sub(target, this.pos);
    if (arrive) {
      let m = p.map(dersired.mag(), 0, this.dist, 0, this.maxspeed);
      dersired.setMag(m);
    } else {
      dersired.setMag(this.maxspeed);
    }
    if (showVec) this.drawVec(dersired.copy().mult(10), "green", p);

    let steer = p5.Vector.sub(dersired, this.vel);
    if (showVec) this.drawVec(steer.copy().mult(10), "red", p);

    steer.limit(this.maxforce);
    this.appleForce(steer);
  }

  edges2(width: number, height: number) {
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

  edges(width: number, height: number) {
    if (this.pos.x < -this.r) this.pos.x = width + this.r;
    if (this.pos.y < -this.r) this.pos.y = height + this.r;
    if (this.pos.x > width + this.r) this.pos.x = -this.r;
    if (this.pos.y > height + this.r) this.pos.y = -this.r;
  }

  flow(flow: FlowField, p: p5) {
    let desired = flow.lookup(this.pos, p);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    this.appleForce(steer);
  }

  drawVec(vec: p5.Vector, color = "red", p?: p5) {
    if (!p) return;
    p.push();
    p.stroke(color);
    p.fill(color);
    p.translate(this.pos);
    p.rotate(vec.heading());
    p.line(0, 0, vec.mag(), 0);
    p.pop();
  }
  show(p: p5) {
    p.push();
    p.noStroke();
    p.fill(255);
    p.translate(this.pos);
    p.rotate(this.vel.heading());
    p.triangle(this.r * 2, 0, -this.r * 2, -this.r, -this.r * 2, this.r);
    p.pop();
  }

  appleForce(force: p5.Vector) {
    let f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
}
export default Vehilce;
