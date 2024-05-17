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
      p.setup = () => {
        p.createCanvas(800, 300).parent(dom);
        p.background(51);
        p.pixelDensity(1);
      };

      let inc = 0.01;
      let zoff = 0.01;
      let zinc = 0.05;
      p.draw = () => {
        p.loadPixels();
        p.background(51);
        p.stroke(255);
        p.noFill();

        let xoff = 0.0;

        for (let x = 0; x < p.width; x++) {
          xoff += inc;
          var yoff = 0;
          for (let y = 0; y < p.height; y++) {
            yoff += inc;
            var idnex = (x + y * p.width) * 4;
            var n = p.noise(xoff, yoff, zoff);
            var bright = p.map(n, -1, 1, 0, 100);

            let color = p.color(bright - 50, bright - 50, bright - 50);
            //console.log(color);
            p.pixels[idnex] = p.red(color);
            p.pixels[idnex + 1] = p.green(color);
            p.pixels[idnex + 2] = p.blue(color);
            p.pixels[idnex + 3] = 255;
          }
        }
        zoff += zinc;
        p.updatePixels();
        p.blendMode(p.DARKEST);
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
