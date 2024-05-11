"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React, { SyntheticEvent } from "react";

import "./page.sass";
import Vector from "@/util/vector";

let vw = 0;
let vh = 0;
let center = new Vector(0, 0);
function init(ctx: RenderingContext): void {
  ctx = ctx as CanvasRenderingContext2D;
  vw = ctx.canvas.width = window.innerWidth;
  vh = ctx.canvas.height = window.innerHeight;
  center = new Vector(vw / 2, vh / 2);
}

function draw(ctx: RenderingContext, frameCount: number): void {
  ctx = ctx as CanvasRenderingContext2D;
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fillRect(0, 0, vw, vh);
  // ctx.translate(vw / 2, vh / 2);

  // let v1 = new Vector(250, 0);
  // v1.draw(ctx, "black", v1.length);
  // ctx.translate(v1.x, v1.y);

  // let v2 = new Vector(0, 200);
  // v2.draw(ctx, "black", v2.length);
  // ctx.translate(v2.x, v2.y);

  // let v3 = v2.add(v1).mul(-1);
  // v3.draw(ctx, "black", v3.length);

  ctx.save();
  ctx.translate(center.x, center.y);
  let v4 = nowPos.sub(center);
  console.log("v4", v4);
  v4.draw(ctx, "black", 100);
  ctx.restore();
}
let nowPos = new Vector(0, 0);
const Page = () => (
  <MyCanvas
    className="MyCanvasPage05"
    draw={draw}
    init={init}
    onMouseMove={(e: SyntheticEvent) => {
      let { offsetX, offsetY } = e.nativeEvent as MouseEvent;
      nowPos.x = offsetX;
      nowPos.y = offsetY;
      console.log(nowPos);
    }}
  ></MyCanvas>
);

export default Page;
