"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { stat } from "fs";

//Perlin noise
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
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(51);
        p.pixelDensity(1);
      };
      let inc = 0.01;
      p.draw = () => {
        var yoff = 0;
        p.loadPixels();
        p.background(51);
        p.stroke(255);
        p.noFill();

        for (let x = 0; x < p.width; x++) {
          var xoff = 0;
          for (let y = 0; y < p.height; y++) {
            var idnex = (x + y * p.width) * 4;
            var r = p.noise(xoff, yoff) * 255;
            p.pixels[idnex + 0] = r;
            p.pixels[idnex + 1] = r;
            p.pixels[idnex + 2] = r;
            p.pixels[idnex + 3] = 255;
            xoff += inc;
          }
          yoff += inc;
        }
        p.updatePixels();
        inc = 0.005;

        //p.noLoop();
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
