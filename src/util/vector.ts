class  Vector {
    x: number =0;
    y: number=0;
    constructor(x:number,y:number) {
        this.set(x,y)
    }

    set(x:number,y:number){
        this.x =x
        this.y = y;
        return this
    }

    add(v:Vector){
        return new Vector(this.x+v.x,this.y+v.y)
    }

    sub(v:Vector){
        return new Vector(this.x-v.x,this.y-v.y)
    }

    mul(s:number){
        return new Vector(this.x*s,this.y*s)
    }

    unit() {
        return this.mul(1/this.length)
    }

    // @ts-ignore
    get length(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }
    set length(s:number){
        let newLen =this.unit().mul(s)
        this.set(newLen.x,newLen.y)
    }

    eq(v:Vector):boolean {
        return  (this.x === v.x) && (this.y === v.y)
    }

    clone(){
        return new  Vector(this.x,this.y)
    }

    angle(){
        return Math.atan2(this.y,this.x)
    }


    toString():string {
        return  `(${Math.round(this.x)},${Math.round(this.y)})`
    }

    draw(ctx:CanvasRenderingContext2D,color="black"){
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.rotate(this.angle())
        ctx.lineTo(this.length,0)
        ctx.lineTo(this.length-3,-4)
        ctx.lineTo(this.length-3,4)
        ctx.lineTo(this.length,0)
        ctx.strokeStyle =  color
        ctx.lineWidth=3
        ctx.stroke()

        ctx.fillText(this.toString(),this.length/2,10)

        ctx.restore()

    }




}

export  default  Vector

// let a = new  Vector(4,0)
// let b = new Vector(0,3)
// let c = a.add(b)
// var c3  =a.sub(b)
// var b2 = b.mul(2)
//
// console.log(`${a}+${b}=${c}`)
// console.log(`${a}-${b}=${c3}`)
// console.log(`${b}*2=${b2}`)
//
// console.log(`${c}'s length=${c.length()}`)
//
// let t1 = new Vector(4,5)
//
// console.log(`${c} = ${t1}`,c.eq(t1))
