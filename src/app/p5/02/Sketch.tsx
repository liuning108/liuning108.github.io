import React, { useEffect, useRef } from "react";
import p5 from "p5";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.background(255);
      };

      p.draw = () => {
        p.background(214, 207, 149);
        p.noFill();
        p.fill(0);
        p.textSize(50);
        p.text(`${p.int(p.mouseX)},${p.int(p.mouseY)}`, 50, 50);

        p.strokeWeight(10);
        p.fill(255, 213 - p.mouseX, 45);
        p.beginShape();
        p.curveVertex(440 + p.mouseX / 5, 160 + p.mouseY / 5);
        p.curveVertex(360, 360);
        p.curveVertex(160, 410 + p.random(10, -10));
        p.curveVertex(350, 500 + p.random(10, -10));
        p.curveVertex(320, 700 + p.random(10, -10));
        p.curveVertex(450, 500 + p.random(10, -10));
        p.curveVertex(570, 700 + p.random(10, -10));
        p.curveVertex(500, 460 + p.random(10, -10));
        p.curveVertex(670, 400 + p.random(10, -10));
        p.curveVertex(480, 360 + p.random(10, -10));
        p.curveVertex(440 + p.mouseX / 5, 160 + p.mouseY / 5);

        p.endShape(p.CLOSE);

        p.fill("white");
        p.ellipse(390, 400, 40 + p.mouseX / 20, 40 + p.mouseX / 20);
        p.ellipse(450, 405, 30 + p.mouseX / 20, 30 + p.mouseX / 20);
        p.ellipse(390, 400, 5, 5);
        p.ellipse(450, 405, 5, 5);

        p.noFill();
        p.beginShape();
        p.vertex(360, 450);
        p.vertex(400, 470);

        p.vertex(460, 440);

        p.endShape();
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
