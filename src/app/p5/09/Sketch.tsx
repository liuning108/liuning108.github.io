import React, { useEffect, useRef } from "react";
import p5 from "p5";
import Vector from "../../../util/vector";
import { tree } from "d3-hierarchy";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    const sketch = (p: p5) => {
      const drawVector = (vec: p5.Vector, trans: boolean = false) => {
        p.push();

        p.rotate(vec.heading());
        p.text(`(${vec.x},${vec.y})`, vec.mag() / 2.5, 15);
        p.noFill();
        p.strokeWeight(3);

        p.beginShape();
        p.vertex(0, 0);
        p.vertex(vec.mag(), 0);
        p.vertex(vec.mag() - 5, -4);
        p.vertex(vec.mag() - 5, 4);
        p.vertex(vec.mag(), 0);

        p.endShape();
        p.noFill();
        p.pop();

        if (trans) {
          p.translate(vec.x, vec.y);
        }
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
      };

      p.draw = () => {
        p.background(255);
        let v1 = p.createVector(250, 0);
        let v2 = p.createVector(0, 200);
        let v3 = p5.Vector.add(v1, v2).mult(-1);
        console.log(v1);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        drawVector(v1, true);
        drawVector(v2, true);
        drawVector(v3);
        p.pop();

        p.push();
        let cen = p.createVector(p.width / 2, p.height / 2);
        let mouseVec = p.createVector(p.mouseX, p.mouseY);
        p.translate(cen.x, cen.y);
        drawVector(p5.Vector.sub(mouseVec, cen).normalize().mult(100));
        p.pop();
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
