"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import maps from "./map";
import Mover from "../player/mover";
import { save } from "../player/canvas";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;
    let ww: number;
    let wh: number;
    let wspan: number;

    let mover: Mover;
    const sketch = (p: p5) => {
      p.setup = () => {
        ww = p.windowWidth;
        wh = p.windowHeight;
        wspan = Math.min(ww, wh) / 26;
        p.createCanvas(ww, wh).parent(dom);
      };
      p.draw = () => {
        p.background(0);
        p.translate(ww / 2 - wspan * 9, wh / 2 - wspan * 9);
        maps.draw(p, wspan);
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
