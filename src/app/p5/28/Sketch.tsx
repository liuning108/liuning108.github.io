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

    let movers: Array<Mover> = [];
    let dragC = 0.25;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400).parent(dom);
        for (let i = 0; i < 10; i++) {
          movers[i] = new Mover(p.random(p.width), 10, p.random(1, 9));
        }
      };

      p.draw = () => {
        p.background("#481E14");

        p.push();
        p.noStroke();
        p.fill(255, 50);
        p.rect(0, p.height / 2, p.width, p.height / 2);
        p.pop();
        movers.forEach((mover) => {
          if (p.mouseIsPressed) {
            let wind = p.createVector(0.1, 0);
            mover.appleForce(wind);
          }
          let gravity = p.createVector(0, 0.2);
          let weight = gravity.copy().mult(mover.mass);
          mover.appleForce(weight);
          if (mover.pos.y > p.height / 2) {
            mover.drag(dragC);
          }

          mover.update();
          mover.edges(p.width, p.height);
          mover.show(p);
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
