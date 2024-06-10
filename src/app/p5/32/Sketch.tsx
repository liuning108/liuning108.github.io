"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import katex from "katex";
import gsap from "gsap";
import Mover from "../player/mover";
import { save } from "../player/canvas";
import { blob } from "d3";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    class Block {
      public size = 150;

      public color = "#FFF";

      public br = 0;
      public scale = 1;

      public opacity = 1;

      public rotation = 0;

      constructor(public x = 0, public y = 0) {}

      draw(p: p5) {
        save(p, () => {
          let c = p.color(this.color);
          c.setAlpha(p.map(this.opacity, 0, 1, 0, 255));
          p.fill(c);

          p.strokeWeight(5);
          c = p.color(0);
          c.setAlpha(p.map(this.opacity, 0, 1, 0, 255));
          p.stroke(c);
          p.translate(this.x, this.y);
          p.scale(this.scale);
          p.rotate(p.radians(this.rotation));
          p.rect(
            0,
            0,
            this.size,
            this.size,
            this.size * this.br,
            this.size * this.br
          );
        });
      }
    }

    let block: Block;

    let body = {
      color: "#FFF",
    };

    let timeline = gsap.timeline({
      onUpdate() {
        console.log("tl", timeline.time());
      },
      onComplete() {
        console.log("tl", "Finished");
      },
    });
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(dom);
        p.rectMode(p.CENTER);
        block = new Block(p.width / 2, p.height / 2);
        timeline
          .set(block, { x: "-=200" })
          .to(block, { x: "+=100", duration: 1 })
          .to(block, { x: "+=100", duration: 2 })
          .from(block, { color: "red", duration: 3 })
          .to(body, { color: "#333", duration: 1 }, 1)
          .to(block, { br: "0.5", duration: 3 })
          .to(block, { scale: 2, ease: "elastic.out(1,0.3)", duration: 3 });

        let clipFadeIn = gsap.from(block, { opacity: 0, duration: 4 });
        timeline.add("fadeInComplete", 4);
        timeline.add(() => {
          console.log("tl", "fadeInCompletefadeInCompletefadeInComplete");
        }, "fadeInComplete");
        timeline.add(clipFadeIn, 0);
        let clipRote = gsap.to(block, { rotation: 360, duration: 4 });
        timeline.add(clipRote, 2);
        //@ts-ignore
        window.tl = timeline;
      };
      p.draw = () => {
        p.background(body.color);
        block.draw(p);
      };
    };

    const scrollHandle = () => {
      var body = document.body,
        html = document.documentElement;

      let curY = window.scrollY;
      var pageHeight =
        Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        ) - window.innerHeight;
      console.log("mw curY:", curY);
      console.log("mw pageH:", pageHeight);
      let progress = curY / pageHeight;
      console.log("mw progress", progress);

      timeline.progress(progress);
      timeline.pause();
    };

    window.addEventListener("scroll", scrollHandle);

    let inst = new p5(sketch);
    return () => {
      inst.remove();
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return <div className={"fixed top-[0vh] left-[0vw]"} ref={canvasRef}></div>;
};

export default Sketch;
