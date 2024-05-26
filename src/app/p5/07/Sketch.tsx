import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { color } from "d3";

const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    const sketch = (p: p5) => {
      class Star {
        private x: number = 0;
        private y: number = 0;
        private z: number = 0;
        private pz: number = 0;
        private color: number = 0;

        constructor() {
          this.init();
        }
        draw() {
          let speed = p.map(p.mouseX, 0, p.width, 0, 50);

          p.noStroke();
          p.fill(this.color);

          p.push();
          p.colorMode(p.HSB);
          p.drawingContext.shadowColor = p.color(360 * p.random(), 80, 80);
          p.drawingContext.shadowBlur = 2000;
          p.pop();

          let u = p.map(this.x / this.z, 0, 1, 0, p.width);
          let v = p.map(this.y / this.z, 0, 1, 0, p.height);
          let r = p.map(this.z, 0, p.width, 20, 0);
          p.ellipse(u, v, r, r);

          let pu = p.map(this.x / (this.z + speed), 0, 1, 0, p.width);
          let pv = p.map(this.y / (this.z + speed), 0, 1, 0, p.height);

          this.pz = this.z;
          p.stroke(this.color);

          p.line(pu, pv, u, v);
        }
        update() {
          let speed = p.map(p.mouseX, 0, p.width, 0, 20);

          console.log(speed);
          this.z = this.z - speed;
          if (this.z <= 1) {
            this.init();
          }
        }
        init() {
          this.x = p.random(-p.width, p.width);
          this.y = p.random(-p.height, p.height);
          this.z = p.random(p.width);
          this.color = 254;

          this.pz = this.z;
        }
      }

      let stars: Array<Star> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(0);
        for (let index = 0; index < 300; index++) {
          stars.push(new Star());
        }
      };

      p.draw = () => {
        p.background(0);

        p.translate(p.width / 2, p.height / 2);

        stars.forEach((star) => {
          star.update();
          star.draw();
        });
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
