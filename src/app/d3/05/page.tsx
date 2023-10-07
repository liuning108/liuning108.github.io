'use client'
import "../d3..sass"
import {useEffect, useRef, useState} from "react";
import * as d3 from 'd3'
import {color, scaleLinear} from "d3";
import {getCustomDocumentImageError} from "next/dist/build/webpack/config/blocks/images/messages";


const useRiszeObserver  = ref =>{
    const [dim,setDim] = useState<any>(null)
    useEffect(() => {
        const  observeTarget = ref.current;
        const  resizeObserver =new ResizeObserver((entries, observer)=>{
            console.log(entries.length)
            entries.forEach(e=>{
                setDim(e.contentRect)
            })
        })
        resizeObserver.observe(observeTarget)
        return ()=>{
            resizeObserver.unobserve(observeTarget)
        }
    }, [ref]);
    return dim
}

const  Page = ()=>{
    // @ts-ignore
    const svgRef = useRef<SVGSVGElement>(null)
    const [data,setData] =  useState([25,30,40,60,20,65,75])



    const dim =useRiszeObserver(svgRef)
    console.log(dim)


    useEffect(()=>{
        if (!dim)return
        const svg = d3.select(svgRef.current)
        const index = d3.local();
        // @ts-ignore

        const yScale = d3.scaleLinear()
            .domain([0,150])
            .range([150,0])

        const xScale = d3.scaleBand().domain(data.map((d, i)=>i)).range([0,dim.width]).padding(0.5)


        const colorScale = scaleLinear()
            .domain([0,100,150])
            .range(['green',"orange","red"]).clamp(true)


        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(index=>index+1)

        svg.select('.x-axis')
            .style('transform','translateY(150px)')
            .call(xAxis);


        const yAxis = d3.axisRight(yScale)
        svg.select('.y-axis')
            .call(yAxis);


        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr('class','bar')
            .attr('fill',d=>colorScale(d))
            .style("transform",'scale(1,-1)')
            .attr("x",(value,index)=>xScale(index))
            .each(function(d, i) {
                index.set(this, i);            // Store index in local variable.
            })
            .on("mouseenter",function (evt,value){
                console.log(evt,value,index.get(this))
                let v =value
                svg.selectAll('.tooltip')
                    .data([v])
                    .join('text')
                    .attr('class','tooltip')
                    .text(v)
                    .attr("x",xScale(index.get(this)))

                    .transition()
                    .attr('opacity',1)
                    .attr("y",yScale(value)-8)
            })
            .on('mouseleave',()=>{svg.selectAll('.tooltip').remove()})
            .attr('width',xScale.bandwidth)
            .attr("y",-150)
            .transition()
            .attr('height',value=>150-yScale(value))












    },[data,dim])

    const update=()=>{
        setData(data.map(d=>d+5))

    }

    const filter=()=>{
        setData(data.filter(d=>d<35))

    }

    const add=()=>{
        let newData =data.concat(Math.ceil(Math.random()*90+10))
        setData(newData)

    }
    return (
        <>
            <svg className={"mt-9"} ref={svgRef}>
                <g className={'x-axis'}> </g>
                <g className={'y-axis'}> </g>
            </svg>
            <br/>
            {data.join(",")}
            <br/>
            <button onClick={update} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>update</button>

            <button onClick={filter} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>Filter Data</button>

            <button onClick={add} className={"bg-blue-400 text-white  p-2 shadow-lg shadow-blue-500 m-2"}>Add Data</button>

        </>
    )
}

export  default  Page
