"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";

import Vehicle from "../player/Vehicle";
import FlowField from "../player/FlowField";
import { Exo_2 } from "next/font/google";
import { className } from "postcss-selector-parser";

const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    let vehicles: Array<Vehicle> = [];
    let flowField: FlowField;
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(800, 400).parent(dom);

        for (let i = 0; i < 100; i++) {
          vehicles.push(
            new Vehicle({
              pos: p.createVector(p.random(p.width), p.random(p.height)),
              maxspeed: p.random(2, 5),
              maxforce: p.random(0.1, 0.5),
            })
          );
        }

        flowField = new FlowField(p.width, p.height);
        flowField.init2(p);
      };
      p.draw = () => {
        let target = p.createVector(p.mouseX, p.mouseY);
        p.background("#03AED2");

        flowField.show(p);
        vehicles.forEach((vehicle) => {
          vehicle.show(p);
          vehicle.flow(flowField, p);
          // vehicle.seek(target, true, p);
          vehicle.edges(p.width, p.height);
          vehicle.update();
        });
      };
      p.mousePressed = () => {
        flowField.init2(p);
      };
    };
    let inst = new p5(sketch);
    return () => {
      inst.remove();
    };
  }, []);

  return (
    <div>
      <h1 className={"text-2xl text-[#fff] mb-2"}>纸飞机</h1>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default Sketch;
