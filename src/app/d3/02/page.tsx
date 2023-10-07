'use client'
import "../d3..sass"
import {useEffect, useRef, useState} from "react";
import * as d3 from 'd3'

const  Page = ()=>{
    // @ts-ignore
    const svgRef = useRef<SVGSVGElement>(null)
    const [data,setData] =  useState([25,30,40,60,20,65,75])

    const myLine= d3.line<number>()
        .x((d,i)=>i*50)
        .y((d)=>150-d)
        .curve(d3.curveCardinal)



    useEffect(()=>{
        const svg = d3.select(svgRef.current)
        // @ts-ignore
        svg.selectAll("path")
            .data([data])
            .join("path")
            .attr('d',(d,i)=>myLine(d))
            .attr('fill','none')
            .attr('stroke','blue')



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
