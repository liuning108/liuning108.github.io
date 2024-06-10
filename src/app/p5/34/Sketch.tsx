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

    class Wave {
      constructor(
        public amp: number,
        public period: number,
        public phase: number
      ) {}

      calculate(x: number) {
        return (
          Math.sin(this.phase + (Math.PI * 2 * x) / this.period) * this.amp
        );
      }
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    let waves: Array<Wave> = [];
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(600, 400).parent(dom);
        for (let x = 0; x < 5; x++) {
          waves.push(
            new Wave(p.random(20, 80), p.random(100, 600), p.random(p.TWO_PI))
          );
        }
      };
      p.draw = () => {
        p.background(0);
        for (let x = 0; x < p.width; x += 10) {
          let y = 0;
          waves.forEach((wave) => {
            y += wave.calculate(x);
          });
          p.noStroke();
          p.ellipse(x, y + p.height / 2, 10);
        }
        waves.forEach((wave) => {
          wave.phase += 0.02;
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
