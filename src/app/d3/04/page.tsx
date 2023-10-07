'use client'
import "../d3..sass"
import {useEffect, useRef, useState} from "react";
import * as d3 from 'd3'
import {scaleLinear} from "d3";

const  Page = ()=>{
    // @ts-ignore
    const svgRef = useRef<SVGSVGElement>(null)
    const [data,setData] =  useState([25,30,40,60,20,65,75])






    useEffect(()=>{
        const svg = d3.select(svgRef.current)
        // @ts-ignore

        const yScale = d3.scaleLinear()
            .domain([0,150])
            .range([150,0])

        const xScale = d3.scaleLinear().domain([0,data.length-1]).range([0,300])
        const xAxis = d3.axisBottom(xScale)

        svg.select('.x-axis')
            .call(xAxis);


        const yAxis = d3.axisRight(yScale)
        svg.select('.y-axis')
            .call(yAxis);







        const myLine= d3.line<number>()
            .x((d,i)=>i*50)
            .y((d)=>d)
            .curve(d3.curveCardinal)
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
                <g className={'x-axis'}> </g>
                <g className={'y-axis'}> </g>
            </svg>
            {data.join(",")}
            <br/>
            <button onClick={update} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>update</button>

            <button onClick={filter} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>Filter Data</button>
        </>
    )
}

export  default  Page
