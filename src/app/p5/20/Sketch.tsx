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
    let vel: p5.Vector;
    let acc: p5.Vector;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(10);
        pos = p.createVector(p.width / 2, p.height / 2);
        vel = p5.Vector.random2D();
      };
      p.draw = () => {
        p.background(0);
        let mouse = p.createVector(p.mouseX, p.mouseY);
        acc = p5.Vector.sub(mouse, pos);
        acc.setMag(2);

        
        let gravity = p.createVector(0, 0.5);
        ///applyForce(gravity);

        p.push();
        p.fill(255);
        p.text(vel.y, 100, 100);
        p.ellipse(pos.x, pos.y, 25, 25);
        p.pop();

        edges();
        pos.add(vel);
        vel.add(acc);

        vel.limit(9);
      };

      function edges() {
        if (pos.y >= p.height) {
          pos.y = p.height;
          vel.y *= -1;
        }
      }
      function applyForce(force: p5.Vector) {
        acc = force;
      }
    };
    let inst = new p5(sketch);
    return () => {
      inst.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
