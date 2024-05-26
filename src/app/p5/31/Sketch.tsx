"use client";
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import maps from "./map";
import Mover from "../player/mover";
import { save } from "../player/canvas";
import { Pcman, Ghost, Food } from "./GameObject";
import { map } from "d3";
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      console.log("I am nont undefined2 ");
    }

    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;
    let ww: number;
    let wh: number;
    let wspan: number;

    let mover: Mover;
    let pcman: Pcman;
    let ghosts: Array<Ghost> = [];
    let foods: Array<Food> = [];
    const sketch = (p: p5) => {
      p.setup = () => {
        p.frameRate(30);
        ww = p.windowWidth;
        wh = p.windowHeight;
        wspan = Math.min(ww, wh) / 30;
        p.createCanvas(ww, wh).parent(dom);
        pcman = new Pcman({
          gridP: new p5.Vector(9, 11),
          dist: wspan,
          currentDirection: "right",
          speed: 80,
        });
        ghosts.push(
          new Ghost(
            {
              gridP: new p5.Vector(8, 9),
              dist: wspan,
              currentDirection: "down",
              speed: 40,
            },
            "#A91D3A"
          )
        );

        ghosts.push(
          new Ghost(
            {
              gridP: new p5.Vector(9, 9),
              dist: wspan,
              currentDirection: "down",
              speed: 40,
            },
            "#9DDE8B"
          )
        );

        ghosts.push(
          new Ghost(
            {
              gridP: new p5.Vector(10, 9),
              dist: wspan,
              currentDirection: "down",
              speed: 40,
            },
            "#7469B6"
          )
        );

        ghosts.push(
          new Ghost(
            {
              gridP: new p5.Vector(10, 9),
              dist: wspan,
              currentDirection: "down",
              speed: 30,
            },
            "#FF9A00"
          )
        );

        initFood();
      };

      function initFood() {
        for (let i = 0; i < 19; i++) {
          for (let j = 0; j < 19; j++) {
            if (maps.getWallContent(i, j) === " ") {
              foods.push(new Food({ gridP: new p5.Vector(i, j), dist: wspan }));
            }
            if (maps.getWallContent(i, j) === "+") {
              foods.push(
                new Food({ gridP: new p5.Vector(i, j), dist: wspan }, true)
              );
            }
          }
        }
      }
      p.draw = () => {
        p.background(0);
        p.translate(ww / 2 - wspan * 9, wh / 2 - wspan * 9);
        foods.forEach((f) => {
          f.update(pcman, () => {
            ghosts.forEach((g) => {
              g.setEatable(10);
            });
          });
          f.draw(p);
        });

        pcman.draw(p);
        ghosts.forEach((g) => {
          g.draw(p);
          g.update(p);

          if (!g.isDead && !pcman.isDead && g.collide(pcman)) {
            if (!g.isEatable) {
              pcman.die();
            } else {
              g.die();
              setTimeout(() => {
                g.relive();
              }, 10000);
            }
          }
        });
        maps.draw(p, wspan);
        if (pcman.isDead) {
          pcman.props.currentDirection = null;
          pcman.props.nextDirection = null;
          // ghosts.forEach((g) => {
          //   g.props.currentDirection = null;
          //   g.props.nextDirection = null;
          // });
        }
      };
      p.keyPressed = () => {
        if (pcman.isDead) return;
        if (p.keyCode === p.LEFT_ARROW) {
          pcman.props.nextDirection = "left";
        } else if (p.keyCode === p.RIGHT_ARROW) {
          pcman.props.nextDirection = "right";
        } else if (p.keyCode === p.UP_ARROW) {
          pcman.props.nextDirection = "up";
        } else if (p.keyCode === p.DOWN_ARROW) {
          pcman.props.nextDirection = "down";
        }
        if (!pcman.props.isMoving) {
          pcman.moveStep();
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
