'use client'
import  {useResizable} from "react-resizable-layout";
import SampleSplitter from "@/components/splitter/SampleSplitter";

const Page = ()=>{

    const { position, separatorProps,setPosition } = useResizable({
        axis: 'x',
        initial:50,
        min:0,
        reverse:true
    })

    console.log(separatorProps)

    const ok =()=>{
        if(position<20){
            setPosition(150)
        }else{
            setPosition(0)
        }

    }
    return (
        <div className={"flex  h-screen bg-[#2D3032] font-mono text-white overflow-hidden"}>
            <div className={"flex grow"}>
                <button className={"bg-red-400 h-[30px] w-[40px] cursor-pointer"} onClick={ok}>P0</button>
            </div>
            {position}
            <SampleSplitter {...separatorProps}></SampleSplitter>
            {
                position<20?null:

            <div className={"shrink-0 h-full flex justify-center items-center  bg-[#202020] overflow-hidden"} style={{width:position}} >
                Terminal
            </div>
            }
        </div>
    )
}
export default  Page
