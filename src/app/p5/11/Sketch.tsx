"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(100);
      };
      p.draw = () => {
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
