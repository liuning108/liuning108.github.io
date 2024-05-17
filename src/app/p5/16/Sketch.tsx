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
      let globle: any = {};
      function drawGrid() {
        for (let x = -1000; x <= 1000; x += 10) {
          p.stroke(x % 100 == 0 ? 30 : 200);

          p.line(x, -p.height, x, p.height);
          p.pop();
        }

        for (let y = -1000; y <= 10000; y += 10) {
          p.stroke(y % 100 == 0 ? 30 : 200);
          p.line(-p.width, y, p.width, y);
        }
        for (let x = -1000; x <= 1000; x += 10) {
          p.push();
          if (x % 50 == 0) {
            p.rotate(p.radians(180));
            p.noStroke();
            p.fill(100);
            p.textSize(12);
            p.text((1 / 10) * x, x, 10);
          }
          p.pop();
        }

        for (let y = -1000; y <= 10000; y += 10) {
          p.push();
          p.rotate(p.radians(180));
          if (y % 50 == 0 && y != 0) {
            p.noStroke();
            p.fill(100);
            p.textSize(12);
            p.text((1 / 10) * -y, 10, y);
          }
          p.pop();
        }
      }
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
      };
      p.draw = () => {
        p.textFont("monospace");
        p.translate(p.width / 2, p.height / 2);
        p.rotate(p.radians(-180));

        p.scale(1);
        p.background(255); //255
        p.noFill();
        p.stroke(0);
        drawGrid();

        drawFucntion();
      };

      let heart = new Array<p5.Vector>();
      let a = 0;
      function drawFucntion(color = "red") {
        p.push();
        p.strokeWeight(5);
        p.stroke(
          p.noise(p.frameCount / 100, 100) * 50 +
            p.noise(p.frameCount / 100) * 50 +
            100,
          0,
          100
        );
        p.fill(150, 0, 10, 50);
        p.rotate(p.radians(-180));

        p.beginShape();
        heart.forEach((v) => p.vertex(v.x, v.y));
        p.endShape();
        p.pop();

        var r = 10;
        var x = r * 16 * p.pow(p.sin(p.radians(a)), 3) + p.random() * 10;
        var y =
          -r *
          (13 * p.cos(p.radians(a)) -
            5 * p.cos(p.radians(a) * 2) -
            2 * p.cos(p.radians(a) * 3) -
            p.cos(p.radians(a) * 4));

        heart.push(p.createVector(x, y)) + p.random() * 10;

        a += 0.5;
      }
    };
    let ins = new p5(sketch);
    return () => {
      ins.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
