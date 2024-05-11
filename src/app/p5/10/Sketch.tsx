import React, { useEffect, useRef } from "react";
import p5 from "p5";
import Circle from "./Circle";
import { tree } from "d3-hierarchy";
import noise from "@/app/../../public/noise.jpg";
import { Image } from "next/image";

const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    let cirs = new Array<Circle>();
    const sketch = (p: p5) => {
      let noiseImage: any;
      p.preload = () => {
        p.loadImage(noise.src, (img) => {
          noiseImage = img;
          console.log(noiseImage);
        });
      };
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);

        cirs.push(
          new Circle({
            r: 150,
            color: "rgba(255,255,255,0.4)",
          })
        );
        cirs.push(
          new Circle({
            r: 220,
            lineTo: (c, i) => {
              return i % 2 == 0;
            },
            color: "rgba(255,255,255,0.4)",
          })
        );

        cirs.push(
          new Circle({
            r: 80,
            lineTo: (c, i) => {
              return !(i % 180 < 30);
            },
          })
        );

        cirs.push(
          new Circle({
            r: 320,
            ramp: 15,
            color: "rgba(255,255,255,0.8)",
            anglePan() {
              return -p.frameCount / 10;
            },
          })
        );

        cirs.push(
          new Circle({
            r: 190,
            anglePan() {
              return -p.frameCount / 10;
            },
            getWidth(c, i) {
              return i % 150 < 50 ? 5 : 1;
            },
            color: "rgba(255,255,255,0.8)",
          })
        );

        cirs.push(
          new Circle({
            r: 260,
            lineTo() {
              return false;
            },
            getVerticalWidth(c, i) {
              if (i % 10 == 0) {
                return 10;
              }
              if (i % 5 == 0) {
                return 6;
              }
              return 3;
            },
            anglePan() {
              return p.frameCount / 10;
            },
            vertical: true,
            color: "rgba(255,255,255,0.8)",
          })
        );

        cirs.push(
          new Circle({
            r: 200,
            lineTo(c, i) {
              return i % 50 == 0;
            },
            getWidth(c, i) {
              return 10;
            },

            color: "rgba(255,255,255,0.8)",
          })
        );
      };

      const drawLine = (
        len: number,
        angle: number,
        w: number,
        c: string = "red"
      ) => {
        p.push();
        p.noStroke();
        p.stroke(c);
        p.strokeWeight(w);
        p.beginShape();
        p.vertex(0, 0);
        p.vertex(len * p.cos(p.radians(angle)), len * p.sin(p.radians(angle)));
        p.endShape();
        p.pop();
      };

      p.draw = () => {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        cirs.forEach((cir) => {
          p.push();
          let mouseVec = p.createVector(p.mouseX, p.mouseY);
          let pan = p5.Vector.sub(
            mouseVec,
            p.createVector(p.width / 2, p.height / 2)
          ).mult(5 / cir.r());
          p.translate(pan.x, pan.y);
          cir.draw(p);
          p.pop();
        });
        p.noStroke();

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        console.log(h, m, s);
        let angH = (360 / 12) * h - 90;
        drawLine(100, angH, 5);
        let angM = (360 / 60) * m - 90;
        drawLine(140, angM, 5, "yellow");

        let angS = (360 / 60) * s - 90;
        drawLine(220, angS, 2, "white");
        for (let i = 0; i < 12; i++) {
          let ang = (360 / 12) * i - 90;

          var x = 300 * p.cos(p.radians(ang));
          var y = 300 * p.sin(p.radians(ang));

          p.fill("rgba(255,255,255,0.5)");

          let ht = i == 0 ? 12 : i;
          if (ht == h) {
            p.fill("rgba(255,0,0,0.5)");

            p.ellipse(x, y, 35 + 10 * p.sin(p.frameCount / 20));
          } else {
            p.ellipse(x, y, 30, 30);
          }

          p.fill("rgba(255,255,255,1)");

          let text = "" + (i == 0 ? 12 : i);
          let tW = p.textWidth(text);
          p.text(text, x - tW / 2, y + tW / 2);
        }

        for (let i = 0; i <= 59; i++) {
          let ang = (360 / 60) * i - 90;

          var x = 250 * p.cos(p.radians(ang));
          var y = 250 * p.sin(p.radians(ang));

          p.fill("rgba(239, 252, 55,0.5)");

          if (i == m) {
            p.ellipse(x, y, 20 + 10 * p.sin(p.frameCount / 20));
            p.fill("rgba(255,255,255,1)");

            let text = "" + (i == 0 ? 12 : i);
            let tW = p.textWidth(text);
            p.text(text, x - tW / 2, y + tW / 2);
          } else {
            //p.ellipse(x, y, 10, 30);
          }
        }

        for (let i = 0; i <= 59; i++) {
          let ang = (360 / 60) * i - 90;

          var x = 250 * p.cos(p.radians(ang));
          var y = 250 * p.sin(p.radians(ang));

          p.fill("rgba(255,255,255,0.5)");

          if (i == s) {
            p.fill("rgba(255,255,255,1)");

            let text = "" + (i == 0 ? 12 : i);
            let tW = p.textWidth(text);
            p.text(text, x - tW / 2, y + tW / 2);
          } else {
            //p.ellipse(x, y, 10, 30);
          }
        }
        p.push();
        // p.blendMode(p.MULTIPLY);
        // p.image(noiseImage, -p.width / 2, -p.height / 2, p.width, p.height);
        p.pop();
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
