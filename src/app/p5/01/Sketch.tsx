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
      p.setup = () => {
        p.createCanvas(400, 400).parent(dom);
        mover = new Mover(p.width / 2, p.height / 2, 8);
        let tex = p.createP();

        tex.style("font-size", "22px");

        tex.style("color", "white");

        tex.position(p.width / 2 + 200, p.height / 2 + 80);
        katex.render("F_f = \\mu N", tex.elt, { output: "mathml" });
      };
      p.draw = () => {
        p.background("#481E14");

        if (p.mouseIsPressed) {
          let wind = p.createVector(1, 0);
          mover.appleForce(wind);
        }

        let gravity = p.createVector(0, 1);
        let weight = gravity.copy().mult(mover.mass);
        mover.appleForce(weight);

        mover.update();
        mover.edges(p.width, p.height);
        mover.show(p);
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
