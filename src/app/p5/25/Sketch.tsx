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
        p.createCanvas(600, 600).parent(dom);
        mover = new Mover(p.width / 3, p.height / 2, 5);

        mover.vel = p.createVector(3, 2);
      };
      p.draw = () => {
        if (p.mouseIsPressed) {
          mover = new Mover(p.mouseX, p.mouseY, 5);

          mover.vel = p.createVector(3, 2);
        }
        p.blendMode(p.BLEND);
        p.colorMode(p.HSL);
        p.fill(5, 5, 5, 0.5);
        p.rect(0, 0, p.width, p.height);
        //p.translate(p.BLURwidth / 3, 0);

        p.fill(255);
        p.noStroke();

        p.blendMode(p.BLEND);
        p.blendMode(p.SCREEN);

        // let wind = p.createVector(1, 1);
        // mover.appleForce(wind);

        let gravity = p.createVector(0, 1);
        let weight = gravity.copy().mult(mover.mass);
        mover.appleForce(weight);

        mover.firction(p, false);
        mover.update();
        mover.edges(p.width, p.height);
        mover.show(p);

        let span = 50;
        for (let x = 0; x <= p.width; x += span) {
          for (let y = 0; y <= p.height; y += span) {
            let ang = p.atan2(mover.pos.y - y, mover.pos.x - x);
            let ang2 =
              p.sin(
                x / 400 + p.frameCount / 100,
                y / 400 + p.frameCount / 100
              ) * 2;

            p.push();
            p.translate(x, y);
            p.strokeWeight(5);
            p.noFill();
            p.colorMode(p.HSB);
            p.stroke(150 + 300 * p.noise(x / 100 + p.frameCount / 100), 80, 70);
            let xx = 15 * p.cos(ang + ang2);
            let yy = 15 * p.sin(ang + ang2);

            p.line(-xx, -yy, xx, yy);

            p.pop();
          }
        }
        p.pop();
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
