'use client'
import {hierarchy, pack, tree} from "d3-hierarchy"

const data = {
    name: "Animals",
    children: [
        {
            name: "Fish",
            children: [ 
                {name: "Marine", children: [{name: "Hailbut"}]},
                {name: "Fresh Water", children: [{name: 'Rainbow trout'}]
            }]
        },
        {name: "Mammals", children: [{name: "Dog"}, {"name": "Cat"}]}
    ]
}

const animalsHierarchy =()=> hierarchy(data).sum(()=>1)
const createPack = pack().size([500,500]).padding(20)
// @ts-ignore
const animalPack = createPack(animalsHierarchy())

//Tree
 const createTree = tree().size([500,500])
// @ts-ignore
const animalsTree =createTree(animalsHierarchy())
console.log("animalsTree:\n")
console.log(animalsTree.descendants())
const Page = () => {



    let count =0;
    // @ts-ignore
    let circles= animalPack.descendants().map(({x,y,r})=>{
        console.log(x,y,r)
        count=count+1
        return (
            <circle key={count} cx={x} cy={y}  fill={"transparent"} stroke={"black"} ></circle>
        )
    })

    let circlesTree= animalsTree.descendants().map(({x,y})=>{
        console.log(x,y)
        count=count+1
        return (
            <circle key={count} cx={x} cy={y}  r={10}  stroke={"black"} ></circle>
        )
    })
    console.log(circlesTree)
    return (
        <main className={"min-h-screen flex flex-col  items-center "}>
            <h1 className={"text-3xl text-center m-10"}>Morphing Viz with D3.js & React</h1>
            <svg width={500} height={500}>
                <g transform={"translate(0,10)"}>
                {circlesTree}
                </g>
            </svg>

        </main>
    )
}

export default Page
