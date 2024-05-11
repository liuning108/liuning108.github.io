import { DefaultDeserializer } from "v8";

interface Pos {
  x: number;
  y: number;
}
class Ball {
  p: Pos = { x: 0, y: 0 };
  v: Pos = { x: 5, y: 5 };
  a: Pos = { x: 0, y: 1 };
  r: number = 50;
  dragging: boolean = false;
  ww = 0;
  wh = 0;

  constructor(ww: number, wh: number) {
    this.p = { x: ww / 2, y: wh / 2 };
    this.ww = ww;
    this.wh = wh;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.p.x, this.p.y);
    ctx.beginPath();
    ctx.arc(0, 0, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.restore();
    this.drawV(ctx);
  }

  update() {
    if (this.dragging) return;
    this.p.x += this.v.x;
    this.p.y += this.v.y;

    this.v.x += this.a.x;
    this.v.y += this.a.y;

    this.v.x *= 0.99;
    this.v.y *= 0.99;

    this.checkBoundary();
  }

  checkBoundary() {
    if (this.p.x + this.r > this.ww) {
      this.v.x = -Math.abs(this.v.x);
    }

    if (this.p.y + this.r > this.wh) {
      this.v.y = -Math.abs(this.v.y);
    }

    if (this.p.x - this.r < 0) {
      this.v.x = Math.abs(this.v.x);
    }

    if (this.p.y - this.r < 0) {
      this.v.y = Math.abs(this.v.y);
    }
  }
  drawV(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.p.x, this.p.y);
    ctx.scale(3, 3);

    ctx.moveTo(0, 0);
    ctx.lineWidth = 2;
    ctx.lineTo(this.v.x, this.v.y);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 2;
    ctx.lineTo(this.v.x, 0);
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 2;
    ctx.lineTo(0, this.v.y);
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.restore();
  }
}
export default Ball;
