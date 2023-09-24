'use client'
import Canvas from "@/components/canvas/Canvas";
import Vector from "@/util/vector";
import {pseudo} from "postcss-selector-parser";
import {Simulate} from "react-dom/test-utils";
import wheel = Simulate.wheel;


class Snake {
    public body: Vector[];
    public head: Vector;
    public color : string ='#F4E0B9'
    private speed: Vector;
    public maxLen: number;
    constructor() {
        this.body = []
        this.head  = new Vector(0,0)
        this.speed  = new Vector(1,0)
        this.maxLen = 5;

        const KeyDownEvent = (e:KeyboardEvent)=>{
            const {key } = e
            let dir:Vector  =this.speed
            switch (key) {
                case 'w':
                    dir = new Vector(0,-1)
                    break
                case 's':
                    dir = new Vector(0,1)
                    break
                case 'a':
                    dir = new Vector(-1,0)
                    break
                case 'd':
                    dir = new Vector(1,0)
                    break
            }

            if (!dir.eq( this.speed.mul(-1))){
                this.speed = dir
            }


        }
        window.removeEventListener("keydown",KeyDownEvent)
        window.addEventListener("keydown",KeyDownEvent)
    }


    update(){
        let newHead =this.head.add(this.speed)
        this.body.push(this.head)
        this.head = newHead

        if(this.head.x>GAME_BLOCKNUM){
            this.head = new Vector(0,this.head.y)
        }

        if(this.head.x<0){
            this.head = new Vector(GAME_BLOCKNUM,this.head.y)
        }

        if(this.head.y <0){
            this.head = new Vector(this.head.x,GAME_BLOCKNUM)
        }

        if(this.head.y >GAME_BLOCKNUM){
            this.head = new Vector(this.head.x,0)
        }



        while(this.body.length>this.maxLen){
            this.body.shift()
        }
    }
}
const  GAME_BLOCKNUM = 42
const  GRID_SIZE  = 10

class  Game{

    private gridSize: number  = GRID_SIZE;
    private blockNum: number  = GAME_BLOCKNUM;
    private space: number =10
    private snake: Snake | undefined;

    private ctx: CanvasRenderingContext2D;
    private food: any;
    constructor(ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
    init() {
        let size =  this.gridSize*this.blockNum+(this.blockNum-1)*this.space
        this.ctx.canvas.width = size
        this.ctx.canvas.height =size
        this.snake = new Snake()
        this.createFood()
    }
    draw() {
        let {ctx} =this;
        this.drawScreen()

        if(this.snake){
            const {color} = this.snake
            this.snake.body.forEach((bd)=>{
                this.drawBlock(bd.x,bd.y,color)
            });
        }
        if(this.food){
            this.drawBlock(this.food.x,this.food.y,'#D83F31')


        }

        // let color="#F4E0B9"
        // this.drawBlock(4,2,color)
        // this.drawBlock(4,3,color)
        // this.drawBlock(4,4,color)
    }

    private drawScreen() {
        let {ctx} =this;
        ctx.beginPath()
        ctx.fillStyle  ='#27005D'
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
        for(let row =0 ; row<this.blockNum; row++){
           for(let col =0 ; col<this.blockNum; col++){
               this.drawBlock(row,col,"#4D2DB7")
           }
        }
    }

    private drawBlock(row: number, col: number, color: string) {
        let {ctx} =this
        let pos = this.changePos(row, col)
        ctx.save()
            ctx.beginPath()
            ctx.fillStyle = color
            ctx.translate(pos.x,pos.y)
            ctx.rect(0,0,this.gridSize,this.gridSize)
            ctx.fill()

        ctx.restore()
    }

    private changePos(row: number, col: number) {
        let x = row*this.space+row*this.gridSize
        let y  =col*this.space+col*this.gridSize
        return {x,y}
    }

    update() {
        this.snake?.update()
        this.snake?.body.forEach((db)=>{
            if(db.eq(this.food)){
                this.createFood()
                if(this.snake){
                    this.snake.maxLen++;
                }

            }
        })
    }

    private createFood() {
        let x = parseInt(""+Math.random()*GAME_BLOCKNUM)
        let y = parseInt(""+Math.random()*GAME_BLOCKNUM)
        this.food = new Vector(x,y);
        this.createFoodShowAnim()
    }

    private createFoodShowAnim() {
        let {ctx} =this
        let r = 2;
        const render= ()=>{
            r++
            let pos  =this.changePos(this.food.x,this.food.y);

            ctx.save()
            ctx.beginPath()
            ctx.strokeStyle  = '#EE9322'
            ctx.arc(pos.x+GRID_SIZE/2,pos.y+GRID_SIZE/2,r,0,Math.PI*2)
            ctx.lineWidth=3
            ctx.stroke()
            ctx.restore()

            if(r<100){
                requestAnimationFrame(render)
            }
        }
        render()

    }
}

const Page = (props: any) => {
    let game: Game

  const init = async  (ctx: CanvasRenderingContext2D,context:{time:number}) => {
       game  = new Game(ctx);
       game.init()
  }



   const draw = (ctx:CanvasRenderingContext2D) => {
       game.draw()

   }

   const update = (ctx:CanvasRenderingContext2D) =>{
        game.update()
   }


   return (
       <main className={"absolute  h-full w-full  bg-[#27005D] p-5 "}>
          <Canvas  className={"bg-white  max-w-full shadow-lg border-solid "} draw={draw} init={init} update={update} time={150} />
       </main>

   )
}
export default Page
