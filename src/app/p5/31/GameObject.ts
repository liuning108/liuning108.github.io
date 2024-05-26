import p5 from "p5";
import { getPos } from "./map";
import { save } from "../player/canvas";
import { stat } from "fs";
import maps from "./map";
import gsap from "gsap";

interface Props {
  p: p5.Vector;
  gridP: p5.Vector;
  dist: number;
}
class GameObject {
  props: Props;
  constructor(props: Partial<Props>) {
    let def: Props = {
      p: new p5.Vector(0, 0),
      gridP: new p5.Vector(0, 0),
      dist: 5,
    };
    Object.assign(def, props);
    this.props = def;
    this.props.p = getPos(
      this.props.gridP.x,
      this.props.gridP.y,
      this.props.dist
    );
  }

  collide(other: GameObject) {
    return this.props.p.copy().sub(other.props.p).mag() < this.props.dist;
  }
}

interface PlayerProps extends Props {
  nextDirection: "up" | "down" | "left" | "right" | null;
  currentDirection: "up" | "down" | "left" | "right" | null;
  isMoving: boolean;
  speed: number;
}
class Player extends GameObject {
  props: PlayerProps;
  constructor(props: Partial<PlayerProps>) {
    super(props);
    let def: PlayerProps = {
      p: new p5.Vector(0, 0),
      gridP: new p5.Vector(0, 0),
      dist: 5,
      nextDirection: null,
      currentDirection: null,
      isMoving: false,
      speed: 1,
    };
    Object.assign(def, props);
    this.props = def;
    this.props.p = getPos(
      this.props.gridP.x,
      this.props.gridP.y,
      this.props.dist
    );
  }

  draw(p: p5) {
    save(p, () => {
      p.fill(255);
      p.noStroke();
      p.ellipse(0, 0, 5);
    });
  }
}

interface PcmanProps extends PlayerProps {
  r: number;
  deg: number;
}
class Pcman extends Player {
  props: PcmanProps;
  isDead: boolean = false;
  constructor(props: Partial<PlayerProps>) {
    super(props);
    let dist = props.dist || 5;
    let def: PcmanProps = {
      p: new p5.Vector(0, 0),
      gridP: new p5.Vector(0, 0),
      dist: dist,
      nextDirection: null,
      currentDirection: null,
      isMoving: false,
      speed: 1,
      r: dist / 2,
      deg: Math.PI / 4,
    };
    Object.assign(def, props);
    this.props = def;
    this.props.p = getPos(
      this.props.gridP.x,
      this.props.gridP.y,
      this.props.dist
    );
  }

  draw(p: p5) {
    let biteSize = p.PI / 8;
    let startAngle = this.isDead
      ? 0
      : biteSize + p.sin(p.frameCount) * biteSize;
    let endAngle = this.isDead ? p.TWO_PI : p.TWO_PI - startAngle;

    save(p, () => {
      p.translate(this.props.p);
      p.fill(this.isDead ? "gray" : "yellow");
      p.rotate(this.dirAngle.heading());
      p.rotate(p.createVector(0, 0).heading());
      p.noStroke();
      p.arc(
        0,
        0,
        this.props.r * 1.5,
        this.props.r * 1.5,
        startAngle,
        endAngle,
        p.PIE
      );
    });
  }

  get dirAngle(): p5.Vector {
    switch (this.props.currentDirection) {
      case "up":
        return new p5.Vector(0, -1);
      case "down":
        return new p5.Vector(0, 1);
      case "left":
        return new p5.Vector(-1, 0);
      case "right":
        return new p5.Vector(1, 0);
    }
    return new p5.Vector(-1, 0);
  }

  public moveStep() {
    let haveWall = maps.getWalls(this.props.gridP.x, this.props.gridP.y);
    let avail = [
      haveWall.up,
      haveWall.down,
      haveWall.left,
      haveWall.right,
    ].filter((d) => !d);

    let curretDir = this.props.currentDirection;

    if (
      !haveWall[this.props.nextDirection as "up" | "down" | "left" | "right"] &&
      this.props.nextDirection
    ) {
      curretDir = this.props.nextDirection;
    }

    let moveTime = 10 / this.props.speed;
    let curDir: any = curretDir;
    let newGridP = this.props.gridP.copy().add(maps.DIR(curDir));
    let isWall = maps.isWall(newGridP.x, newGridP.y);
    if (!isWall) {
      this.props.isMoving = true;
      if (newGridP.x <= -1 && curDir == "left") {
        newGridP.x = 18;
        moveTime = 0;
      }

      if (newGridP.x > 18 && curDir == "right") {
        newGridP.x = 0;
        moveTime = 0;
      }

      this.props.gridP = newGridP;
      this.props.currentDirection = curretDir;
      gsap.to(this.props.p, moveTime, {
        ...getPos(newGridP.x, newGridP.y, this.props.dist),
        onComplete: () => {
          this.props.isMoving = false;
          this.moveStep();
        },
      });
      //this.props.p = getPos(newGridP.x, newGridP.y, this.props.dist);
    }
  }

  public die() {
    if (!this.isDead) {
      this.isDead = true;
    }
  }
}

class Ghost extends Pcman {
  props: PcmanProps;
  isEatable = false;
  isEatTimeDone = false;
  color = "red";
  isDead = false;
  constructor(props: Partial<PlayerProps>, color = "red") {
    super(props);
    let dist = props.dist || 5;
    let def: PcmanProps = {
      p: new p5.Vector(0, 0),
      gridP: new p5.Vector(0, 0),
      dist: dist,
      nextDirection: null,
      currentDirection: null,
      isMoving: false,
      speed: 1,
      r: dist / 2,
      deg: Math.PI / 4,
    };
    Object.assign(def, props);
    this.props = def;
    this.color = color;
    this.props.p = getPos(
      this.props.gridP.x,
      this.props.gridP.y,
      this.props.dist
    );
  }

  update(p: p5) {
    let value = parseInt("" + Math.random() * 4);

    switch (value) {
      case 0:
        this.props.nextDirection = "up";
        break;
      case 1:
        this.props.nextDirection = "down";
        break;
      case 2:
        this.props.nextDirection = "left";
        break;
      case 3:
        this.props.nextDirection = "right";
        break;
    }
    if (!this.props.isMoving) {
      this.moveStep();
    }
  }

  draw(p: p5) {
    save(p, () => {
      p.translate(this.props.p);
      p.fill(this.isEatable ? "blue" : this.color);
      if (this.isEatTimeDone && !this.isDead) {
        p.fill(p.frameCount % 10 < 5 ? "blue" : "#FFF");
      }
      // p.rotate(this.dirAngle.heading());
      //p.rotate(p.createVector(0, 0).heading());
      p.noStroke();
      let ctx = p.drawingContext as CanvasRenderingContext2D;

      if (!this.isDead) {
        ctx.beginPath();
        ctx.arc(0, 0, this.props.r / 1.5, Math.PI, 0);
        ctx.lineTo(this.props.r / 1.5, this.props.r / 1.5);
        let ttSpan = ((this.props.r / 1.5) * 2) / 7;
        let ttHeight = ((this.props.r / 1.5) * 1) / 3;

        for (let i = 0; i < 7; i++) {
          ctx.lineTo(
            (this.props.r / 1.5) * 0.9 - ttSpan * i,
            (((i + p.floor(p.frameCount / 1.2)) % 2) - 1) * ttHeight +
              this.props.r / 1.5
          );
        }

        ctx.lineTo(-this.props.r / 1.5, this.props.r / 1.5);
        ctx.closePath();
        ctx.fill();
      }
      let eyeR = this.props.r / 1.5 / 3;
      let innerEyeR = eyeR / 2;

      p.fill(255);
      p.ellipse(-this.props.r / 1.5 / 2.5, -eyeR, eyeR * 2, eyeR * 2);
      p.ellipse(this.props.r / 1.5 / 2.5, -eyeR, eyeR * 2, eyeR * 2);

      save(p, () => {
        p.translate(this.dirAngle.setMag(innerEyeR));
        p.fill(0);
        p.ellipse(
          -this.props.r / 1.5 / 2.5,
          -eyeR,
          innerEyeR * 2,
          innerEyeR * 2
        );
        p.ellipse(
          this.props.r / 1.5 / 2.5,
          -eyeR,
          innerEyeR * 2,
          innerEyeR * 2
        );
      });
    });
  }

  public relive() {
    this.props.gridP = new p5.Vector(8, 9);
    this.props.p = getPos(
      this.props.gridP.x,
      this.props.gridP.y,
      this.props.dist
    );
    this.isDead = false;
    this.isEatable = false;
  }

  get dirAngle(): p5.Vector {
    switch (this.props.currentDirection) {
      case "up":
        return new p5.Vector(0, -1);
      case "down":
        return new p5.Vector(0, 1);
      case "left":
        return new p5.Vector(-1, 0);
      case "right":
        return new p5.Vector(1, 0);
    }
    return new p5.Vector(-1, 0);
  }

  setEatable(t: number) {
    if (!this.isEatable) {
      this.isEatable = true;
      window.setTimeout(() => {
        this.isEatable = false;
        this.isEatTimeDone = false;
      }, t * 1000);

      window.setTimeout(() => {
        this.isEatTimeDone = true;
      }, (t - 3) * 1000);
    }
  }
}

class Food extends GameObject {
  eaten = false;
  super = false;
  constructor(props: Partial<Props>, supe = false) {
    super(props);
    this.super = supe;
  }

  update(pcman: Pcman, superFoodFunc: () => void) {
    if (this.eaten) {
      return;
    }
    let isGirdLength = this.props.gridP.dist(pcman.props.gridP) <= 1;

    let isPosLength = this.props.p.dist(pcman.props.p) <= this.props.dist / 2;
    console.log("isPosLength2 ", pcman.props.p);
    if (isGirdLength && isPosLength) {
      this.eaten = true;
      if (this.super) {
        superFoodFunc();
      }
    }
  }

  draw(p: p5) {
    save(p, () => {
      if (this.eaten) {
        return;
      }
      p.translate(this.props.p);
      p.fill("#FDDE55");
      p.noStroke();
      let r = this.props.dist / 10;
      if (this.super) {
        p.fill("White");
        p.ellipse(0, 0, r * 4, r * 4);
        return;
      }
      p.ellipse(0, 0, r * 2, r * 2);
    });
  }
}
export { Pcman, Ghost, Food };
