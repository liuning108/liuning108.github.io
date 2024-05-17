"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { stat } from "fs";
import { index } from "d3";
import { Console } from "console";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    const sketch = (p: p5) => {
      let x = p.windowWidth / 2;
      let y = p.windowHeight / 2;
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(0);
        x = p.windowWidth / 2;
        y = p.windowHeight / 2;
      };

      let angle = 0;
      p.draw = () => {
        p.blendMode(p.SCREEN);

        p.stroke(
          p.noise(p.frameCount / 100) * 250,
          p.noise(p.frameCount / 100, 250) * 250,
          p.noise(p.frameCount / 100, 100) * 250
        );
        let rr = 10;
        p.strokeWeight(rr);

        // x = p.map(p.noise(p.frameCount / 100), 0, 1, 0, p.width);
        // y = p.map(p.noise(p.frameCount / 100, 1000), 0, 1, 0, p.height);

        p.point(x, y);

        var r = p.random(0, 4);
        var inc = rr;

        if (r < 1) {
          x = x + inc;
        } else if (r < 2) {
          x = x - inc;
        } else if (r < 3) {
          y = y + inc;
        } else {
          y = y - inc;
        }

        rr += 1;
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
