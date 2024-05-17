"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import katex from "katex";

import Mover from "../player/mover";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    let mover: Mover;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(700, 300).parent(dom);
        mover = new Mover(p.width / 2, p.height / 2, 8);
      };
      p.draw = () => {
        let startX = 100;
        let endX = p.width - 100;

        p.background("#FEFDED");
        p.stroke("#A91D3A");
        p.strokeWeight(8);
        p.strokeCap(p.SQUARE);

        p.beginShape();
        for (let x = startX; x < endX; x++) {
          let wave = p.sin((3 * x) / 200 + p.frameCount / 15) * 30;

          let noise = 1;

          let wMap =
            (((p.sin(x / 10 + p.frameCount / 30) * p.height) / 50) *
              (p.map(x, startX, endX, 0, 1) + p.map(x, startX, endX, 0, -1))) /
            2;

          p.curveVertex(x, p.height / 2 + wave + noise + wMap);
        }
        p.endShape();

        p.noFill();
        p.stroke("#68D2E8");
        p.beginShape();

        for (let x = startX; x < endX; x++) {
          let wave = p.cos((3 * x) / 200 + p.frameCount / 15) * 30;

          let noise = 1;

          let wMap =
            (((p.cos(x / 10 + p.frameCount / 30) * p.height) / 50) *
              (p.map(x, startX, endX, 0, 1) + p.map(x, startX, endX, 0, -1))) /
            2;

          p.curveVertex(x, p.height / 1.8 + wave + wMap);
        }
        p.endShape();

        p.stroke("#151515");

        const makeLine = (posX: number, text: string) => {
          p.stroke("#151515");
          p.line(posX, p.height / 2 - 50, posX, p.height / 2 + 50);
          if (text) {
            console.log(text, posX);
            p.push();

            p.noStroke();
            p.textSize(30);
            p.textStyle(p.BOLD);
            p.textAlign(p.CENTER);
            p.fill("#151515");
            p.text(text, posX, p.height / 2 + 50 + 50);
            p.pop();
          }
        };
        makeLine(startX, "L");
        makeLine(endX, "G");
        let span = 150;
        let lastX = startX + 30;
        for (let i = 0; i < "IUNIN".length; i++) {
          lastX += p.noise(i, p.frameCount / 200, p.mouseX / 600) * span;

          makeLine(lastX, "IUNIN"[i]);
        }
      };
    };
    let inst = new p5(sketch);
    return () => {
      inst.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
