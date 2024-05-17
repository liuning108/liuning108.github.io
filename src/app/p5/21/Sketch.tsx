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
    let pos: p5.Vector;
    let vel: p5.Vector;
    let acc: p5.Vector;
    let mass = 10;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(10);
        pos = p.createVector(p.width / 2, p.height / 2);
        vel = new p5.Vector(0, 0);
        acc = new p5.Vector(0, 0);
        let gravity = p.createVector(0, 0.1);
        let weight = gravity.copy().mult(mass);
        applyForce(weight);
      };
      p.draw = () => {
        p.background(0);
        // let mouse = p.createVector(p.mouseX, p.mouseY);
        // acc = p5.Vector.sub(mouse, pos);
        // acc.setMag(0.5);

        if (p.mouseIsPressed) {
          let wind = p.createVector(1, 0);

          applyForce(wind);
        }

        p.push();
        p.fill(255);
        //p.text(vel.y, 100, 100);
        let r = p.sqrt(mass) * 10;
        p.ellipse(pos.x, pos.y, r, r);
        p.pop();

        edges(r);
        vel.add(acc);
        pos.add(vel);
        vel.mult(0.99);
      };

      function edges(r: number) {
        if (pos.y > p.height - r) {
          vel.y = -Math.abs(vel.y);
        }

        if (pos.x >= p.width - r) {
          pos.x = p.width - r;
          vel.x *= -1;
        }
        if (pos.x <= 0) {
          pos.x = 0;
          vel.x *= -1;
        }
      }
      function applyForce(force: p5.Vector) {
        let f = force.copy().div(mass);
        acc.add(f);
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
