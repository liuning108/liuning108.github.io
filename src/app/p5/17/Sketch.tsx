"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import Vector from "../../../util/vector";
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
    let pos: p5.Vector;
    const sketch = (p: p5) => {
      class Walker {
        public pos;
        public vel;
        constructor(x: number, y: number) {
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(1, -1);
        }

        update() {
          this.pos.add(this.vel);
        }

        show() {
          p.stroke(255, 100);
          p.strokeWeight(10);
          p.ellipse(this.pos.x, this.pos.y, 32);
        }
      }

      let welker: Walker;
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(30);
        welker = new Walker(p.width / 2, p.height / 2);
      };
      p.draw = () => {
        welker.show();
        welker.update();
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
