"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import katex from "katex";

import Mover from "../player/mover";
import { className } from "postcss-selector-parser";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  let colors = "#ff9f1c-#ffbf69-#ffffff-#cbf3f0-#2ec4b6".split("-");
  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    let mover: Mover;
    const sketch = (p: p5) => {
      p.setup = () => {
        let canvs = p.createCanvas(400, 210).parent(dom);

        p.background("#481E14");
        p.blendMode(p.BLEND);

        title();
        planet(p.width / 2, p.height / 2, 100);
      };

      function title() {
        let tex = p.createP();
      }

      function planet(x: number, y: number, r = 30, scale: number = 1) {
        p.push();
        p.translate(x, y);
        p.scale(scale);

        for (let i = 0; i < 200; i++) {
          let cc =
            colors[
              p.int(p.noise(p.frameCount / 10, i) * colors.length) %
                colors.length
            ];
          p.fill(cc);
          p.drawingContext.shadowColor = p.color(cc);
          p.drawingContext.shadowBlur = 30;
          p.noStroke();
          let xx =
            p.noise(i * 2, p.frameCount / 500 + p.mouseX / 500) *
            100 *
            p.noise(i) *
            2;
          let ang =
            p.noise(i, p.frameCount / 800 + p.mouseY / 1000, 500) * 8 * p.PI;
          let rr = p.noise(i, 500, p.frameCount / 50 + p.mouseY / 500) * 30;

          let angMouse = p.atan2(p.mouseY, p.mouseX);
          let x2 = xx * p.cos(ang) * rr * 2;
          let y2 = (xx * p.sin(1) * rr) / 2;
          p.ellipse(x2, y2, rr);
        }

        p.pop();
      }

      p.draw = () => {
        p.blendMode(p.BLEND);
        p.background(0, 0, 0, 20);

        let scale = p.map(p.sin(p.frameCount / 50), -1, 0.5, 0.5, 0.8);
        planet(p.width / 2, p.height / 3, 10, 0.15);
        // planet(p.width / 2, p.noise(p.width) * p.width, 100, 0.5);
        // planet(p.width / 3, p.height / 2, 300, 0.8);
        p.blendMode(p.SCREEN);
      };
    };
    let inst = new p5(sketch);
    return () => {
      inst.remove();
    };
  }, []);

  return (
    <div>
      {/* <div className={"text-white text-xl  mb-2"}>网络</div> */}
      <div ref={canvasRef}></div>
    </div>
  );
};

export default Sketch;
