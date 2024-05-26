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
      let mouseVec: p5.Vector;
      let cen: p5.Vector;

      p.setup = () => {
        p.createCanvas(400, 400).parent(dom);
        mouseVec = p.createVector(p.mouseX, p.mouseY);
        cen = p.createVector(p.width / 2, p.height / 2);
      };
      p.draw = () => {
        p.background("#481E14");
 
        p.translate(p.width / 2, p.height / 2);
        mouseVec = p.createVector(p.mouseX - cen.x, p.mouseY - cen.y);
        mouseVec.normalize().mult(100);

        p.push();
        p.noFill();
        p.stroke(255);
        p.line(0, 0, mouseVec.x, mouseVec.y);
        p.pop();
        p.pop();
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
