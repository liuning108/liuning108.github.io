'use client'
import "../d3..sass"
import {useEffect, useRef, useState} from "react";
import * as d3 from 'd3'
import {BiRectangle} from "react-icons/bi";
import {update} from "immutable";
import {valueOf} from "postcss";
const  Page = ()=>{
    // @ts-ignore
    const svgRef = useRef<SVGSVGElement>(null)
    const [data,setData] =  useState([25,30,40,60,20])

    useEffect(()=>{
        const svg = d3.select(svgRef.current)
        // @ts-ignore
        svg.selectAll("circle")
            .data(data)
            .join(
                (enter:any)=>
                    enter
                        .append("circle")
                        .attr('class','new')
                        .attr('stroke','red')

                ,
                (update:any)=> update.attr("class",'updated'),
                (exit:any)=> exit.remove()
            )
            .attr('r',(d,i)=>d)
            .attr('cx',(v:number)=>v*2)
            .attr('cy',(v:number)=>v*2)

    },[data])

    const update=()=>{
        setData(data.map(d=>d+5))

    }

    const filter=()=>{
        setData(data.filter(d=>d<35))

    }
    return (
        <>
            <svg ref={svgRef}>
            </svg>
            {data.join(",")}
            <br/>
            <button onClick={update} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>update</button>

            <button onClick={filter} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>Filter Data</button>
        </>
    )
}

export  default  Page
