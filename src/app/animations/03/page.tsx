"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React, { SyntheticEvent } from "react";

import "./page.sass";
import { BiWalk } from "react-icons/bi";

const blockWidth = 200;
const { PI } = Math;
const PI2 = PI * 2;

const color = {
  red: "#F74456",
  white: "#FFF",
  yellow: "#F1DA56",
  blue: "#036FAF",
};

function init(ctx: RenderingContext): void {
  ctx = ctx as CanvasRenderingContext2D;
  ctx.canvas.width = blockWidth * 3;
  ctx.canvas.height = blockWidth * 3;
}

function draw(ctx: RenderingContext, frameCount: number): void {
  ctx = ctx as CanvasRenderingContext2D;
  const drawBlock = (
    { x, y }: { x: number; y: number },
    bgColor: string,
    draw: () => void
  ) => {
    ctx.save();
    ctx.translate(x * blockWidth, y * blockWidth);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, blockWidth, blockWidth);
    ctx.translate(blockWidth / 2, blockWidth / 2);
    draw();

    ctx.restore();
  };

  ctx.fillCircle = function (x: number, y: number, r: number) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.fill();
  };

  let stime = parseInt("" + frameCount / 20);

  drawBlock({ x: 0, y: 0 }, color.blue, () => {
    ctx.beginPath();
    ctx.arc(0, 0, 30 / ((stime % 5) + 1), 0, PI2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 15;
    ctx.stroke();

    let N = 15;
    for (var i = 0; i < N; i++) {
      ctx.fillStyle = "white";
      if ((i + stime) % 4 != 0) {
        ctx.fillRect(60, -4, 20, 8);
      }
      ctx.rotate(PI2 / N);
    }
  });
  drawBlock({ x: 1, y: 0 }, color.red, () => {
    ctx.scale(0.8, 0.8);
    ctx.translate(-60, -60);
    for (var i = 0; i < 3; i++) {
      ctx.save();
      for (let o = 0; o < 3; o++) {
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, PI2);
        ctx.fillStyle = color.white;
        if ((i + o + stime) % 5 == 0) {
          ctx.fillStyle = color.yellow;
        }
        ctx.fill();
        ctx.translate(60, 0);
      }
      ctx.restore();
      ctx.translate(0, 60);
    }
  });

  drawBlock({ x: 2, y: 0 }, color.yellow, () => {
    for (var i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(80, 20);
      ctx.lineTo(80, 80);
      ctx.closePath();
      ctx.fillStyle = color.white;
      ctx.fill();

      if (stime % 4 == i) {
        //dot
        ctx.beginPath();
        ctx.arc(60, 40, 6, 0, PI2);
        ctx.fillStyle = color.red;
        ctx.fill();
      }

      ctx.rotate(PI2 / 4);
    }
  });
  drawBlock({ x: 0, y: 1 }, color.yellow, () => {
    ctx.translate(-60, -60);
    ctx.fillStyle = color.white;
    ctx.fillRect(0, 0, 60, 60);

    ctx.translate(30, 30);
    ctx.rotate(-PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(40, 0);
    ctx.arc(40, 40, 40, -PI / 2, PI / 2);
    ctx.lineTo(0, 80);
    ctx.closePath();
    ctx.fillStyle = color.red;
    ctx.fill();
    ctx.translate(-100 + Math.sin(frameCount / 10) * 10, 60);
    ctx.fillStyle = color.blue;
    ctx.fillRect(0, 0, 100, 40);

    ctx.translate(100 + Math.cos(frameCount / 10) * 10, 40);
    ctx.fillStyle = color.white;
    ctx.fillRect(0, 0, 50, 20);
  });
  drawBlock({ x: 1, y: 1 }, color.white, () => {
    ctx.beginPath();
    let angle1 = ((frameCount % 100) / 100) * PI2;
    let angle2 = ((frameCount % 50) / 50) * PI2;
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 80, angle1, angle2);
    ctx.fillStyle = color.red;
    ctx.fill();

    ctx.fillStyle = color.yellow;
    ctx.fillCircle(60, 60, 30);
  });
  drawBlock({ x: 2, y: 1 }, color.blue, () => {
    ctx.fillStyle = color.white;
    ctx.fillCircle(0, 0, 80);
    ctx.rotate(frameCount / 100);
    ctx.fillStyle = color.red;
    ctx.fillCircle(-30, 0, 20);
    ctx.rotate(frameCount / 20);
    ctx.fillStyle = color.yellow;
    ctx.fillCircle(40, 0, 50);
  });
  drawBlock({ x: 0, y: 2 }, color.red, () => {
    ctx.rotate(frameCount / 100);
    for (let i = 0; i < 8; i++) {
      ctx.rotate(PI2 / 8);
      ctx.fillStyle = color.white;
      let r = 16;
      if ((stime + i) % 4 < 2) {
        r = 10;
      }
      ctx.fillCircle(60, 0, r);

      ctx.fillCircle(30, 5, 5);
    }
  });
  drawBlock({ x: 1, y: 2 }, color.blue, () => {
    ctx.translate(-80, -100);
    ctx.fillStyle = color.yellow;
    ctx.fillRect(0, frameCount % 200, 40, 200);
    ctx.translate(40, 40);
    ctx.fillStyle = color.red;
    ctx.fillRect(0, 0, 120, 80);
    ctx.fillStyle = color.white;
    ctx.fillCircle(8, 40, stime % 20);
    ctx.fillCircle(70, 40, stime % 10);

    ctx.fillStyle = color.white;
    ctx.translate(70, 80);
    ctx.fillRect(0, 0, 50, 80);
  });
  drawBlock({ x: 2, y: 2 }, color.yellow, () => {
    ctx.beginPath();
    ctx.moveTo(-100, -100);
    ctx.lineTo(0, -100);
    ctx.lineTo(-100, 100);
    ctx.closePath();
    ctx.fillStyle = color.white;
    ctx.fill();

    ctx.rotate(PI);
    ctx.save();
    ctx.translate(frameCount % 100, 0);
    ctx.beginPath();
    ctx.moveTo(-100, -100);
    ctx.lineTo(0, -100);
    ctx.lineTo(-100, 100);
    ctx.closePath();
    ctx.fillStyle = color.red;
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(-100, -100);
    ctx.lineTo(0, -100);
    ctx.lineTo(-100, 100);
    ctx.closePath();
    ctx.fillStyle = color.white;
    ctx.fill();
  });
}

const Page = () => (
  <MyCanvas className="MyCanvasPage03" draw={draw} init={init}></MyCanvas>
);

export default Page;
