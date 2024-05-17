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
        p.translate(p.width / 2, p.height / 2);

        let v = p5.Vector.random2D().mult(p.random(50, 100));

        p.strokeWeight(4);
        p.stroke(255, 20);
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
