'use client'
import Canvas from "@/components/canvas/Canvas";
import {gsap} from 'gsap'
import {tree} from "d3-hierarchy";
import Vector from "@/util/vector";
class TreeStage {
    public  angle: number=0
    public height: number = 50
    public width  = 100
    public color  = "white"
    constructor(args:Partial<TreeStage>) {
        Object.assign(this, args)
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle =this.color
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(0-this.width/2,0)
        ctx.lineTo(0,0-this.height)
        ctx.lineTo(this.width / 2,0)
        ctx.closePath()
        ctx.fill()
    }
}

let trees:Array<TreeStage> = []


class Gift {
    public  p = new Vector(0,0)
    public falllen =0
    public width = 50
    public color = 'red'
    public  opacity = 1
    constructor(props:Partial<Gift>) {
        Object.assign(this, props)
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.globalAlpha  = this.opacity
        ctx.fillStyle = this.color
        ctx.fillRect(this.p.x,this.p.y+this.falllen,this.width,this.width)
        ctx.globalAlpha = 1
    }
}
let gifts:Array<Gift> = new Array<Gift>()
const Page = (props: any) => {

    let ww = 0;
    let wh = 0;

    const init = async (ctx: CanvasRenderingContext2D, context: { time: number }) => {
        if (ctx.canvas.parentElement) {
            ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
            wh = ctx.canvas.height = ctx.canvas.parentElement.clientHeight
        }
        trees=[]
        let treecount = 6;
        for (let i = 0 ;i<treecount;i++){
            trees.push(new TreeStage({
                width:(treecount-i)*70+5,
                height:(treecount-i)*30+10,
                angle:Math.PI/20,
                color:`hsl(${i*10+60},80%,50%)`
            }))
        }

        gsap.from(trees,{angle:0,duration:1,stagger:0.1,ease:"elastic.out(1, 0.3)"},)


        for (let i = 0 ;i<Math.ceil(Math.random()*100)+20;i++){
            let width = Math.random()*80+20
            gifts.push(new Gift({
                p:new Vector(ww*Math.random(),wh-width),
                width,
                falllen: -(Math.random()*200+50),
                color:`hsl(${i*10},80%,50%)`,
                opacity:0

            }))
        }
        let start = true;
        let tween =gsap.to(gifts,{falllen:0,opacity:1,stagger:(index)=>{
            return index*0.1
            },ease:"bounce.out",
           onComplete:()=>{
               start =false
           }
        },)

        let m = ()=>{
            if (start){
                move()
                setTimeout(m,500)
            }else{
              if(Math.random()>0.5) move()
            }



        }
        m()


    }

    const update = () => {


    }
    let tt= 0;
    const move = ()=>{
        tt++

        let angle = (tt%2)-0.5
        console.log(angle)
        gsap.to(trees,{angle,duration:1,stagger:0.1,ease:"elastic.out(1, 0.3)"},)

    }
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0,0,ww, wh)
        gifts.forEach(gift=>gift.draw(ctx))
        //draw trees
        ctx.save()
        ctx.translate(ww/2,wh-50)
        trees.forEach(tree=>{
            ctx.rotate(tree.angle)
            tree.draw(ctx)
            ctx.translate(0,-tree.height/1.5)
        })

        ctx.restore()



    }
    return (
        <main className={"absolute w-full h-full bg-gray-100" }>
            {/*<button onClick={move} className={"absolute bg-white w-[100px] h-[20px] top-[20px]"}>move</button>*/}
            <Canvas className={"bg-black max-w-full"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page
