'use client'
import Canvas from "@/components/canvas/Canvas";
import Vector from "@/util/vector";
import vector from "@/util/vector";

class  Particle {
    public  p  = new Vector(100,100)
    public  v   = new Vector(0,20)
    r :number  = 20
    public  color =`rgba(255,${Math.random()*150+50},${Math.random()*200})`

    constructor(arg:Object) {
        Object.assign(this,arg)
    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
            ctx.beginPath()
            ctx.translate(this.p.x,this.p.y)
            this.v.draw(ctx,this.color, this.r*10)
            ctx.fillStyle = this.color
            ctx.fill()
        ctx.restore()
    }

    update() {
        this.p =this.p.add(this.v)
        this.v = this.v.add(new Vector(0,0.5))
        this.v=this.v.mul(0.99-this.r/200)
        this.r = this.r*0.97

        if (this.p.y+this.r>wh){
            this.v.y = - Math.abs(this.v.y)
        }
        if (this.p.y-this.r<0){
            this.v.y = Math.abs(this.v.y)
        }
        if (this.p.x+this.r>ww){
            this.v.x = - Math.abs(this.v.x)
        }
        if (this.p.x-this.r<0){
            this.v.x = Math.abs(this.v.x)
        }
    }
}

class  ForceField {
    public  p = new Vector()
    public  value =(Math.random()>=0.5?1:-1)*200
   constructor(arg:Object) {
       Object.assign(this,arg)
   }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.beginPath()
        ctx.translate(this.p.x,this.p.y)
        ctx.arc(0,0,Math.sqrt(Math.abs(this.value)),0,Math.PI*2)
        if(this.value<0){
            ctx.fillStyle = 'black'
        }else{
            ctx.fillStyle = 'white'
        }

        ctx.fill()
        ctx.restore()


    }

    effect(particle: Particle) {
        let delta = particle.p.sub(this.p)
        let len = this.value/(1+delta.length)
        let force = delta.unit().mul(len)
        // console.log(delta)

        particle.v= particle.v.add(force)
    }
}

let ww = 0;
let wh = 0;

const Page = (props: any) => {


    let particles:Particle[] = [];
    let forcefields:ForceField[] =[];
    let mousePos = new Vector()
    const init = async (ctx: CanvasRenderingContext2D, context: { time: number }) => {
        if (ctx.canvas.parentElement) {
            ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
            wh = ctx.canvas.height = ctx.canvas.parentElement.clientHeight
        }
        ctx.canvas.addEventListener("mousemove",(e)=>{
              mousePos = new Vector(e.offsetX,e.offsetY)
        })


        ctx.canvas.addEventListener("dblclick",(e)=>{
            forcefields.push(new ForceField(
                {
                    p:new Vector(e.offsetX,e.offsetY)
                }
            ))
        })

    }

    function generateParticles() {
        particles=particles.concat([1,2,3,4,5].map(i=>new Particle({
            p: mousePos.clone(),
            v: new Vector(Math.random()*10-5,Math.random()*10-5),
            r: Math.random()*20+1
        })))
        particles=particles.filter(i=>!(i.r<1))
        console.log("generateParticles",particles.length)
    }

    const update = (ctx:CanvasRenderingContext2D,frmaeCount:number) => {
      generateParticles()
      particles.forEach(i=>{
          forcefields.forEach(f=>{
              f.effect(i)
          })
          i.update()
      })




    }
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0,0,ww,wh)
        particles.forEach(i=>i.draw(ctx))
        forcefields.forEach(f=>f.draw(ctx))
    }
    return (
        <main className={"absolute w-full h-full bg-gray-100"}>
            <Canvas className={"bg-[#03001C]"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page
