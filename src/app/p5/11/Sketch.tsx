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
        p.scale(1.2);
        p.background(255);
        p.noFill();
        p.stroke(0);
        drawGrid();

        drawFucntion((x) => x * x, "red", -20 * 10, 20 * 10);
        drawFucntion((x) => -2 * x + 3, "blue", -20 * 10, 20 * 10);
        drawFucntion(
          (x) => (-x * x * x) / 40,
          "green",
          -20 * 10,
          20 * 10,
          0.01,
          -15 * 10
        );
      };
      function drawFucntion(
        f: (x: number) => number,
        color = "red",
        xstart = -100,
        xend = 100,
        step = 0.01,
        xpos = 0
      ) {
        p.push();
        p.strokeWeight(2);
        p.stroke(color);
        p.push();
        p.textAlign(p.RIGHT);
        p.rotate(p.radians(-180));
        let lablePos = xstart;
        if (xpos > 0) {
          lablePos = xpos;
        }

        p.translate(-lablePos + 40, -f((1 / 10) * lablePos) - 10);

        p.strokeWeight(1);

        p.textSize(9);
        p.text(f, 0, 0);
        p.pop();
        p.beginShape();
        for (let x = xstart; x <= xend; x += step) {
          p.vertex(x, f((1 / 10) * x));
        }
        p.endShape();
        p.pop();

        function createAnim() {
          let x = xstart;
          let vx = 1;
          return function () {
            p.push();
            p.noStroke();
            p.fill(color);
            p.ellipse(x, f((1 / 10) * x), 10, 10);
            x += vx;
            if (x <= xstart || x >= xend) {
              vx = -vx;
            }

            p.pop();
          };
        }
        if (!globle[color]) {
          globle[color] = createAnim();
        }
        globle[color]();
      }
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
