"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React, { SyntheticEvent, useEffect } from "react";

import "./page.sass";
import Ball from "./Ball";
let ww = 0;
let wh = 0;
let gctx: CanvasRenderingContext2D;
var ball: Ball;
function init(ctx: RenderingContext): void {
  if (window === undefined) {
    return;
  }
  ctx = ctx as CanvasRenderingContext2D;
  gctx = ctx;
  ww = ctx.canvas.width = window.innerWidth;
  wh = ctx.canvas.height = window.innerHeight;
  ball = new Ball(ww, wh);
}

function draw(ctx: RenderingContext, frameCount: number): void {
  ctx = ctx as CanvasRenderingContext2D;
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(0, 0, ww, wh);
  ball.draw(ctx);
}

function update() {
  console.log("ball ");
  ball.update();
}

function getDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
) {
  let dist = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  return Math.sqrt(dist);
}
console.log("3,4=>", getDistance({ x: 0, y: 4 }, { x: 3, y: 0 }));

let mousePos = { x: 0, y: 0 };
const Page = () => {
  useEffect(() => {
    let resizeHandler = () => {
      if (window === undefined) {
        return;
      }
      ww = gctx.canvas.width = window.innerWidth;
      wh = gctx.canvas.height = window.innerHeight;
      ball = new Ball(ww, wh);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <MyCanvas
      className="MyCanvasPage04"
      draw={draw}
      init={init}
      update={update}
      onMouseUp={(e) => {
        ball.dragging = false;
      }}
      onMouseMove={(e) => {
        let { offsetX, offsetY } = e.nativeEvent;
        mousePos.x = offsetX;
        mousePos.y = offsetY;

        if (ball.dragging) {
          let dx = mousePos.x - ball.p.x;
          let dy = mousePos.y - ball.p.y;
          ball.p.x += dx;
          ball.p.y += dy;
          ball.v.x = dx;
          ball.v.y = dy;
        }
      }}
      onMouseDown={(e) => {
        let { offsetX, offsetY } = e.nativeEvent;
        mousePos.x = offsetX;
        mousePos.y = offsetY;
        console.log(mousePos);
        let dist = getDistance(mousePos, ball.p);
        if (dist < ball.r) {
          ball.dragging = true;
        }
      }}
    ></MyCanvas>
  );
};

export default Page;
