"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React from "react";
function draw(ctx: RenderingContext, frameCount: number): void {
  if (typeof window === undefined) {
    return;
  }
  ctx = ctx as CanvasRenderingContext2D;

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 100);
  ctx.lineTo(250, 20);
  ctx.fill();
}

const Page = () => (
  <main>
    <MyCanvas draw={draw}></MyCanvas>
  </main>
);

export default Page;
