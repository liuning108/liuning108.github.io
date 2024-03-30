"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React, { SyntheticEvent } from "react";

import "./page.sass";
import { className } from "postcss-selector-parser";
function init(ctx: RenderingContext): void {
  ctx = ctx as CanvasRenderingContext2D;
  ctx.canvas.width = 400;
  ctx.canvas.height = 400;
}

function draw(ctx: RenderingContext, frameCount: number): void {
  ctx = ctx as CanvasRenderingContext2D;

  ctx.clearRect(0, 0, 400, 400);
  // ctx.fillStyle = "rgba(255,255,255,0.05)";
  // ctx.fillRect(0, 0, 400, 400);
  ctx.beginPath();
  for (var i = 0; i < 10; i++) {
    let pos = i * 50;
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, 400);
    ctx.fillText(pos.toString(), pos, 10);

    ctx.moveTo(0, pos);
    ctx.lineTo(400, pos);
    ctx.fillText(pos.toString(), 0, pos);
  }
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(0,0,0,0.1)";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(25, 350);
  ctx.lineTo(375, 350);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.fillStyle = "#ed5a2a";
  ctx.fillRect(300, 300, 50, 50);
  ctx.strokeRect(300, 300, 50, 50);

  ctx.beginPath();
  ctx.rect(250, 250, 50, 100);
  ctx.rect(50, 300, 50, 50);
  ctx.fillStyle = "#ffc12c";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(100, 250, 50, 100);
  ctx.rect(200, 250, 50, 100);
  ctx.fillStyle = "#ff9f51";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(250, 200);
  ctx.lineTo(250, 250);
  ctx.lineTo(200, 250);
  ctx.arc(175, 250, 25, Math.PI * 2, Math.PI, true);
  ctx.lineTo(100, 250);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(175, 150);
  ctx.lineTo(250, 200);
  ctx.closePath();
  ctx.fillStyle = "#ed5a2a";
  ctx.fill();
  ctx.stroke();

  //car
  ctx.beginPath();
  ctx.moveTo(175, 150);
  ctx.lineTo(175, 100 - mouse.y / 5);

  ctx.lineTo(200, 110 - (frameCount % 5) - mouse.y / 5);
  ctx.lineTo(175, 120 - mouse.y / 5);

  ctx.fillStyle = `hsl(${mouse.x % 360}, 50%, 50%)`;
  ctx.closePath();
  // ctx.fillStyle = "#ed5a2a";
  ctx.fill();
  ctx.stroke();

  let carx: number = (frameCount % 400) - 40;

  //car
  ctx.fillStyle = "white";
  ctx.fillRect(carx, 325, 40, 25);
  ctx.strokeRect(carx, 325, 40, 25);

  ctx.beginPath();
  ctx.arc(carx + 10, 350, 5, 0, Math.PI * 2);
  ctx.arc(carx + 30, 350, 5, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
}
let mouse = { x: 0, y: 0 };
const Page = () => (
  <MyCanvas
    className="MyCanvasPage02"
    draw={draw}
    init={init}
    onMouseMove={(e: SyntheticEvent) => {
      let { offsetX, offsetY } = e.nativeEvent as MouseEvent;
      mouse.x = offsetX;
      mouse.y = offsetY;
    }}
  ></MyCanvas>
);

export default Page;
