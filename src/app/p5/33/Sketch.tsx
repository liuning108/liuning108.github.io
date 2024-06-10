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

    let angles: Array<number> = [];
    let anglesV: Array<number> = [];
    let angleV = 0.05;
    let r = 10;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(500, 400).parent(dom);

        let total = Math.floor(p.width / (r * 2));

        for (let i = 0; i < total; i++) {
          angles[i] = p.map(i, 0, total, 0, p.TWO_PI);
          anglesV[i] = 0.02;
        }
      };
      p.draw = () => {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        p.fill("#FFF");
        p.stroke("#FFF");
        angles.forEach((a, i) => {
          let y = p.map(p.sin(a), -1, 1, -200, 200);
          p.strokeWeight(4);

          let x = p.map(i, 0, angles.length, -200, 200);
          p.line(x, 0, x, y);
          p.circle(x, y, r * 2);
          angles[i] += anglesV[i];
        });
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
