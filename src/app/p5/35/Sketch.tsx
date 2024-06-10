"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";

import Vehicle from "../player/Vehicle";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    let vehicle: Vehicle;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400).parent(dom);
        vehicle = new Vehicle({
          pos: p.createVector(p.width / 2, p.height / 2),
        });
      };
      p.draw = () => {
        let target = p.createVector(p.mouseX, p.mouseY);
        p.background("#481E14");
        vehicle.show(p);
        vehicle.seek(target, true, p);
        vehicle.edges(p.width, p.height);
        vehicle.update();
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
