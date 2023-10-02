'use client'
import Canvas from "@/components/canvas/Canvas";
import Vector from "@/util/vector";
import {it} from "node:test";

class  Tree {

    public  p = new Vector(0,0)
    public  v = new Vector(0,0)
    public angle=-Math.PI/2;
    public  speed = 4
    public  w  = 10
    public  time = 0
    public body:Array<{p:Vector,w:number,c:string}> = [];
    public  count = 0;
    constructor(args: any) {
        Object.assign(this,args);
        this.body.push({
            "p":this.p.clone(),
            "w":this.w,
            "c":'white'
        })
    }
    update(){
        this.time++
        this.v = Vector.Polar(this.speed,(this.angle)*Vector.PiToDeg)

        this.w *=Math.random()*0.02+0.98
        this.p  = this.p.add(this.v)
        if(this.w>0.1){
            this.body.push({
                "p":this.p.clone(),
                "w":this.w,
                "c":'white'
            })
        }
       //設定分裂條件
        if(Math.random()<0.5+this.w/50 && this.time>15 &&  this.time%15==0 && this.w>0.5){
            this.angle+=(Math.random()-0.5)/8
            if(Math.random()<0.5){
                trees.push(new Tree({
                    p: this.p.clone(),
                    w:this.w*(0.45+Math.random()/2),
                    angle: this.angle+(Math.random()-0.5),
                    speed: this.speed/(1.2+Math.random()),
                }))

            }else {
                trees.push(new Tree({
                    p: this.p.clone(),
                    angle: this.angle+(Math.random()/2),
                    speed: this.speed/(1+Math.random()),
                    w: this.w*(0.6+Math.random()/1.5)

                }) )
                trees.push(new Tree({
                    p: this.p.clone(),
                    angle:  this.angle-(Math.random()/2),
                    speed: this.speed/(1+Math.random()),
                    w: this.w*(0.6+Math.random()/1.5)

                }) )
                this.w=0
            }

        }

        //在寬度小時繪製葉子
        if (this.w>0.1 && this.w<2 && Math.random()<0.1){

            this.body.push({
                p:this.p.clone(),
                w:Math.random()*4,
                c:"hsl("+Math.random()*40+",80%,50%)"
            })
            this.count ++
            if(this.count>8){
                this.w =0
            }

        }







    }
    draw(ctx:CanvasRenderingContext2D){
        this.body.forEach(item=>{
            ctx.beginPath()
            ctx.arc(item.p.x,item.p.y,item.w,0,Math.PI*2)
            ctx.fillStyle = item.c
            ctx.fill()
        })


    }
}
let trees:Array<Tree> = []
const Page = (props: any) => {

    let ww = 0;
    let wh = 0;



    const init = async (ctx: CanvasRenderingContext2D, context: { time: number }) => {
        if (ctx.canvas.parentElement) {
            ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
            wh = ctx.canvas.height = ctx.canvas.parentElement.clientHeight
        }

        let tree = new Tree({
            p: new Vector(0,0),
            angle: -Math.PI/2
                })
        trees.push(tree)
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))

        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
        trees.push(new Tree({
            p: new Vector(ww*Math.random(),0),
            angle: -Math.PI/2
        }))
    }

    const update = () => {



    }
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0,0,ww,wh)
        ctx.save()
        ctx.translate(0,wh)
        trees.forEach(tree=>tree.update())
        trees.forEach(tree=>tree.draw(ctx))
        ctx.restore()


    }
    return (
        <main className={"absolute w-full h-full bg-gray-100"}>
            <Canvas className={"bg-black max-w-full"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page
