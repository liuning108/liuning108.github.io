"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { stat } from "fs";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    var xoff2 = 10000;
    let inc = 0.01;
    var start = 0;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(51);
      };
      p.draw = () => {
        p.background(51);
        p.stroke(255);
        p.noFill();

        p.beginShape();
        var xoff1 = start;
        for (let x = 0; x < p.width; x++) {
          p.stroke(255);
          //let y = p.random(p.height);
          let y = p.noise(xoff1) * p.height;
          xoff1 += inc;
          p.vertex(x, y);
        }
        p.endShape();
        start += inc;
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
