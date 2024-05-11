"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React, { SyntheticEvent } from "react";

import "./page.sass";
function init(ctx: RenderingContext): void {
  ctx = ctx as CanvasRenderingContext2D;
  ctx.canvas.width = 400;
  ctx.canvas.height = 400;
}

function draw(ctx: RenderingContext, frameCount: number): void {
  ctx = ctx as CanvasRenderingContext2D;
}
const Page = () => (
  <MyCanvas className="MyCanvasPage03" draw={draw} init={init}></MyCanvas>
);

export default Page;
