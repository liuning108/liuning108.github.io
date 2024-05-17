"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import avatar2 from "@/../public/image.png";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  let target: any;
  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    const sketch = (p: p5) => {
      p.preload = () => {
        target = p.createVideo(["../../01.mp4", "../../01.mp4"], (vid) => {
          target.position(0, 0);
          target.hide();
          target.showControls();
        });
        // p.loadImage(avatar2.src, (img) => {
        //   target = img;
        // });
      };

      p.setup = () => {
        p.createCanvas(400, 500).parent(dom);
        target.size(48, 48);
      };
      const density = "Ñ@#W$ch刘宁9876543210dabc;:+=-,._";
      p.draw = () => {
        p.background(0);
        //p.image(target, 0, 0);
        //target.play();
        if (p.mouseIsPressed) {
          target.play();
        }
        let w = p.width / target.width;
        let h = p.height / target.height;
        target.loadPixels();
        for (let i = 0; i < target.width; i++) {
          for (let j = 0; j < target.height; j++) {
            const pixelIndex = (i + j * target.width) * 4;
            //@ts-ignore
            const r = target.pixels[pixelIndex + 0];
            //@ts-ignore
            const g = target.pixels[pixelIndex + 1];
            //@ts-ignore
            const b = target.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 5;

            p.noStroke();
            p.fill(r, g, b);
            //square(i * w, j * h, w);

            const len = density.length;
            const charIndex = p.floor(p.map(avg, 0, 255, 0, len));

            p.textSize(density.charAt(charIndex) == "刘" ? w + 5 : w);
            p.textSize(density.charAt(charIndex) == "宁" ? w + 5 : w);
            p.textAlign(p.CENTER, p.CENTER);
            p.text(density.charAt(charIndex), i * w + w * 0.2, j * h + h * 0.2);
          }
        }
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
