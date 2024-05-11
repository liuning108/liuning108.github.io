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
        p.background(255);

        let maxV = p.max(p.height, p.width);

        let block = maxV / 150;

        for (let i = 0; i < block; i++) {
          for (let j = 0; j < block; j++) {
            p.push();
            p.textSize(14);
            p.translate(i * 150, j * 150);
            p.rotate((Math.PI / 180) * 45);
            p.fill(0, 0, 0, 150);
            p.text("122273014@qq.com", 10, 10);
            p.pop();
          }
        }
      };
    };
    new p5(sketch);
  }, []);

  return <div className="opacity-20" ref={canvasRef}></div>;
};

export default Sketch;
