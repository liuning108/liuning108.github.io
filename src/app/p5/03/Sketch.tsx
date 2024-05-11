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
        p.background(0);
      };

      let x = 0;
      let y = 10;
      p.draw = () => {
        p.fill(100 + p.random(155), 0, 0);
        let rectW = p.random(10, 80);
        if (p.frameCount % 7 < 3) {
          rectW = 10;
          p.fill("white");
        }
        p.rect(x, y, rectW, 20);
        x += rectW + 10;

        if (x > p.width) {
          x = 0;
          y += 20 + 10;
        }
      };
    };
    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
