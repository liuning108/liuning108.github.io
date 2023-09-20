class  Vector {
    private  x: number =0;
    private  y: number=0;
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

    length(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }

    eq(v:Vector):boolean {
        return  (this.x === v.x) && (this.y === v.y)
    }

    clone(){
        return new  Vector(this.x,this.y)
    }


    toString():string {
        return  `(${this.x},${this.y})`
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
