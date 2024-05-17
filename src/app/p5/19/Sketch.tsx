"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    var xoff1 = 0;
    var xoff2 = 10000;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(10);
      };
      p.draw = () => {
        let pos = p.createVector(p.width / 2, p.height / 2);
        let mouse = p.createVector(p.mouseX, p.mouseY);
        let v = p5.Vector.sub(mouse, pos).limit(255);
        p.background(p.map(v.mag(), 0, 255, 0, 100, true));
        p.translate(pos.x, pos.y);
        p.strokeWeight(4);
        p.stroke(255);
        p.line(0, 0, v.x, v.y);
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
