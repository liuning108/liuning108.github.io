import p5 from "p5";
import { save } from "../player/canvas";
import { katex } from "katex";
import { BsCartX } from "react-icons/bs";
let mapData = [
  "ooooooooooooooooooo",
  "o        o        o",
  "o oo ooo o ooo oo o",
  "o+               +o",
  "o oo o ooooo o oo o",
  "o    o   o   o    o",
  "oooo ooo o ooo oooo",
  "xxxo o       o oxxx",
  "oooo o oo oo o oooo",
  "       oxxxo       ",
  "oooo o ooooo o oooo",
  "xxxo o   x   o oxxx",
  "oooo ooo o ooo oooo",
  "o    o   o   o    o",
  "o oo o ooooo o oo o",
  "o+               +o",
  "o oo ooo o ooo oo o",
  "o        o        o",
  "ooooooooooooooooooo",
];

const getWallContent = (x: number, y: number) => {
  return mapData[y] && mapData[y][x];
};

const isWall = (x: number, y: number) => {
  return getWallContent(x, y) === "o";
};

const getPos = (x: number, y: number, wspan: number) => {
  return new p5.Vector(x, y).mult(wspan).add(wspan / 2, wspan / 2);
};

const getTypeCode = (x: number, y: number): string => {
  let wallType = getWalls(x, y);
  if (wallType["none"]) return "";
  return [wallType["up"], wallType["down"], wallType["left"], wallType["right"]]
    .map((key) => (key ? 1 : 0))
    .join("");
};

const draw = (p: p5, wspan: number) => {
  for (var x = 0; x < 19; x++) {
    for (var y = 0; y < 19; y++) {
      save(p, () => {
        let ctx = p.drawingContext as CanvasRenderingContext2D;
        ctx.shadowColor = "rgb(30,30,255)";
        ctx.shadowBlur = 100;
        let pos = getPos(x, y, wspan);
        p.translate(pos);
        p.noFill();
        p.stroke(255, p.map(0.1, 0, 1, 0, 255));
        p.rect(-wspan / 2, -wspan / 2, wspan, wspan);
        let walls = getWalls(x, y);
        p.noFill();
        if (!walls.none) {
          save(p, () => {
            p.noFill();
            p.strokeWeight(5);
            p.noStroke();
            p.fill(30, 30, 255);
            p.rect(-wspan / 2, -wspan / 2, wspan, wspan);
          });
        }
      });
    }
  }
};

const getWalls = (x: number, y: number) => {
  return {
    up: isWall(x, y - 1),
    down: isWall(x, y + 1),
    left: isWall(x - 1, y),
    right: isWall(x + 1, y),
    none: !isWall(x, y),
  };
};

export default {
  draw,
};
