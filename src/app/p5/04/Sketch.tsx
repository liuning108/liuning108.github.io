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
        p.background(100);
        x = p.width / 2;
        y = p.height / 2;
      };

      let x = 0;
      let y = 0;
      p.draw = () => {
        x += p.random(-10, 10);
        y += p.random(-10, 10);
        x = p.lerp(x, p.mouseX, 0.05);
        y = p.lerp(y, p.mouseY, 0.05);

        let c = p.map(x, 0, p.width, 0, 255);
        p.fill(c, 0, 0);
        p.ellipse(x, y, 100, 100);
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
