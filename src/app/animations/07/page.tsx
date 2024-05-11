"use client";
import MyCanvas from "@/components/animations/MyCanvas";
import React, { SyntheticEvent } from "react";

import "./page.sass";
import Vector from "@/util/vector";
import { Player } from "./model";
import { mapRange, mapRangeRandom } from "./util";
import gsap from "gsap";

let global = {
  scale: 1,
  width: 4000,
  height: 4000,
  foodmax: 500,
  playermax: 50,
  collideFactor: 0,
};

let vw = 0;
let vh = 0;

let players: Array<Player> = [];
let myplayers: Array<Player> = [];
let mousePos = new Vector(0, 0);

function init(ctx: RenderingContext): void {
  ctx = ctx as CanvasRenderingContext2D;
  vw = ctx.canvas.width = window.innerWidth;
  vh = ctx.canvas.height = window.innerHeight;
  for (let i = 0; i < 300; i++) {
    players.push(
      new Player({
        mass: mapRangeRandom(20, 1020),
        p: new Vector(
          mapRangeRandom(-global.width / 2, global.width / 2),
          mapRangeRandom(-global.height / 2, global.height / 2)
        ),
      })
    );
  }

  players[0].mass = 2400;
  myplayers.push(players[0]);

  // scale
  setInterval(() => {
    let scale = 1 / Math.log(Math.sqrt(myplayers[0].r) / 4 + 2);
    gsap.to(global, {
      scale: scale,
      duration: 2,
    });
  }, 2000);

  //add food
  setInterval(() => {
    const length = players.filter((p) => p.type == "food");
    if (length.length < global.foodmax) {
      players.push(
        new Player({
          mass: 18,
          v: new Vector(),
          p: new Vector(
            mapRangeRandom(-global.width / 2, global.width / 2),
            mapRangeRandom(-global.width / 2, global.width / 2)
          ),
          type: "food",
        })
      );
    }
  }, 19);
}

function draw(ctx: RenderingContext, frameCount: number): void {
  ctx = ctx as CanvasRenderingContext2D;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, vw, vh);

  let cen = myplayers[0].p;
  ctx.save();

  ctx.translate(vw / 2, vh / 2);
  console.log("scale", global.scale);
  ctx.scale(global.scale, global.scale);
  ctx.translate(-cen.x, -cen.y);

  let gridWidth = 500;
  let gcount = global.width / gridWidth;

  for (let i = -gcount / 2; i <= gcount / 2; i++) {
    ctx.moveTo(i * gridWidth, -global.height / 2);
    ctx.lineTo(i * gridWidth, global.height / 2);

    ctx.moveTo(-global.width / 2, i * gridWidth);
    ctx.lineTo(global.width / 2, i * gridWidth);

    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  players
    .sort((p1, p2) => {
      return p1.r - p2.r;
    })
    .forEach((player) => {
      player.draw(ctx);
    });
  ctx.restore();
  showMiniMap(ctx);
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  let score = myplayers.map((p) => p.mass).reduce((s, v) => s + v, 0);
  ctx.fillText("Score: " + parseInt("" + score), 10, 30);
}

function showMiniMap(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.translate(0, vh - global.height / 20);
  ctx.scale(1 / 20, 1 / 20);
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.fillRect(0, 0, global.width, global.height);
  ctx.translate(global.width / 2, global.height / 2);
  players.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.p.x, p.p.y, p.r, 0, Math.PI * 2);

    ctx.fillStyle = p.type == "food" ? "red" : "white";

    if (p == myplayers[0]) {
      ctx.fillStyle = "yellow";
    }
    ctx.fill();
  });

  ctx.restore();
}

function update() {
  let myplayer = myplayers[0];

  players.forEach((player, pid) => {
    if (player.living) {
      player.update(global.width, global.height);
      players.forEach((player2, pid2) => {
        const isNotSame = pid !== pid2 && player.id !== player2.id;
        const isEatLiving = player2.living;
        if (isNotSame && isEatLiving) {
          const isBig = player.r * 0.9 > player2.r;
          const isEat =
            player.p.sub(player2.p).length - 10 < player.r - player2.r;
          if (isBig && isEat) {
            player.eat(player2);
          }
        }
      });
    }
  });

  let delta = mousePos.sub(new Vector(vw / 2, vh / 2)).mul(0.1);

  let deltanLen = delta.length;
  if (deltanLen > myplayer.maxSpeed) {
    delta = delta.unit().mul(myplayer.maxSpeed);
  }

  myplayer.v = delta;

  players = players.filter((p) => p.living);
  myplayers = myplayers.filter((p) => p.living);
}

const Page = () => (
  <MyCanvas
    className="MyCanvasPage03"
    draw={draw}
    init={init}
    update={update}
    onMouseMove={(e: SyntheticEvent) => {
      let { offsetX, offsetY } = e.nativeEvent as MouseEvent;
      mousePos.set(offsetX, offsetY);
    }}
  ></MyCanvas>
);

export default Page;
