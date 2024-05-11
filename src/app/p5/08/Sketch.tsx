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
      };
      p.draw = () => {
        p.background(0);
        p.colorMode(p.HSB);

        let ratio = p.map(p.sin(p.frameCount / 10), -1, 1, 0, 1);
        p.fill(360 * ratio, 80, 80);
        p.translate(p.width / 2, p.height / 2);
        p.ellipse(p.sin(p.frameCount / 10) * 100, 0, 100);
        p.ellipse(0, 400, p.sin(p.frameCount / 20) * 100 + 200);
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
