import { twMerge } from 'tailwind-merge'



const Page = () => {
    const bdrsRect = (w:number,h:number,bdrs:number=h/2,unit:string="px") => {
        return {width:w+unit,height:h,borderRadius: bdrs+unit}
    }
    const hair =bdrsRect;
    return (
        <main className={"font-mono flex justify-center items-center absolute w-full h-full"}>

            <article className={"group relative bg-blue-500 min-w-full min-h-full  flex justify-center items-center"}>
                <h1 className={"  duration-500 absolute  group-hover:opacity-100 opacity-0 m-0 text-white text-[50px] font-bold left-[40px] top-[20px]"}>
                    Where is my Cake!!
                    <br/>
                    <span className={"text-yellow-400 hidden group-active:block"}>Did you see it </span>
                </h1>

                <div className="person relative group-hover:mt-[50px]  hover:translate-x-[40px]  duration-500 [&_*]:duration-500">
                    <div className={`hairs relative group-active:-translate-y-10 `}>
                        <div className={`hair1 ml-[10px] bg-white shadow-[inset_-10px_-10px_rgba(0,0,0,0.1)]`} style={hair(150,80)}></div>
                        <div className={`hair2 ml-[50px] mt-[-40px] bg-white shadow-[inset_-10px_-10px_rgba(0,0,0,0.1)]`} style={hair(150,60)}></div>
                        <div className={`hair3 ml-[5px] mt-[-45px] bg-white shadow-[inset_-10px_-10px_rgba(0,0,0,0.1)]`} style={hair(150,70)}></div>
                    </div>
                    <div className="peer group/face transition-[background-color] !duration-[1.5s] hover:bg-orange-400 group-hover:shadow-[inset_-10px_-10px_rgba(0,0,0,0.1),30px_10px_rgba(0,0,0,0.1)] bg-yellow-400 pt-[50px] mt-[-40px]  shadow-[inset_-10px_-10px_rgba(0,0,0,0.1)] hover:!shadow-[inset_-10px_-10px_rgba(0,0,0,0.1),-30px_10px_rgba(0,0,0,0.1)]  " style={bdrsRect(210,150,40)}>
                        <div className="eyes group-hover/face:translate-x-[30px]">
                            <div className="eye  inline-block mr-[5px] ml-[15px] bg-white" style={bdrsRect(50,25)}>
                                <div className="eyeball bg-blue-950 group-hover/face:translate-x-[25px]" style={bdrsRect(25,25)}></div>
                            </div>
                            <div className="eye inline-block mr-[5px] ml-[15px] bg-white" style={bdrsRect(50,25)}>
                                <div className="eyeball bg-blue-950 group-hover/face:translate-x-[25px]" style={bdrsRect(25,25)}></div>
                            </div>
                        </div>
                        <div className="mouth mt-[15px] ml-[70px] bg-orange-400 group-hover/face:translate-x-[25px]" style={bdrsRect(70,25)}>
                            <div className="food ml-[-40px] bg-orange-400" style={bdrsRect(12,12)}></div>
                        </div>
                    </div>
                    <div className="message delay-[0.6s] peer-hover:opacity-100 opacity-0 text-[20px] font-bold text-white absolute left-[-200px] top-[50px]">un...I Didn't eat it</div>

                </div>
            </article>
        </main>
    )
}

export  default  Page


