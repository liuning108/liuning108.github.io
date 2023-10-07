const SampleSplitter = ({
    ...props
                        })=>{
    return (

        <div className={"w-[5px] bg-[#d1d5db] cursor-col-resize hover:bg-red-400 relative"} {...props}>
            <div className={"w-[10px] h-[20px] bg-red-400 absolute right-[10px] top-[50%] cursor-pointer"}>

            </div>

        </div>

    )
}
export  default  SampleSplitter
