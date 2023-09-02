import'./01.css'
const Page = () => {

    const flexrow = "flex "

    return (
        <main className={"font-mono px-10 pb-10 "}>
            <h1 className={"text-3xl m-4"}>Flex 排版入门</h1>
            <hr/>

            <section className={"flexrow"}>
                <article>
                    <h2 className={"text-2xl m-4"}>使用Flex控制份数</h2>
                    <section className={"w-[400px] h-[200px] text-[30px] flex border-[3px] border-black border-solid "}>
                        <div className="bg-[#ffd428] flex-[6]">L 6</div>
                        <div className="bg-[#ffa228] flex-[130px] flex-grow-0 flex-shrink-0">M 130px</div>
                        <div className="bg-[#ff541c] flex-[4]">R 4</div>
                    </section>
                </article>

                <article>
                    <h2 className={"text-2xl m-4"}>使用Flex控制份数</h2>
                    <section className={"flex-col w-[400px] h-[200px] text-[30px] flex border-[3px] border-black border-solid "}>
                        <div className="bg-[#ffd428] flex-[6]">L 6</div>
                        <div className="bg-[#ffa228] flex-[100px] flex-grow-0 flex-shrink-0">M 100px</div>
                        <div className="bg-[#ff541c] flex-[4]">R 4</div>
                    </section>
                </article>
            </section>

            <section className={"mt-9"}>
                <article>
                    <h2 className={"text-2xl m-4"}>使用Flex控制Glow</h2>
                    <section className={"w-full h-[200px] text-[30px] flex border-[3px] border-black border-solid "}>
                        <div className="bg-[#ffd428] flex-[400px]">L 400px</div>
                        <div className="bg-[#ffa228] flex-[300px]">M 300px</div>
                        <div className="bg-[#ff541c] flex-[200px] flex-grow-0">R 200px(flex-grow-0)</div>
                    </section>
                </article>

                <article>
                    <h2 className={"text-2xl m-4"}>使用Flex控制shrink</h2>
                    <section className={" w-full  h-[200px] text-[30px] flex border-[3px] border-black border-solid "}>
                        <div className="bg-[#ffd428] flex-[6]">L 6</div>
                        <div className="bg-[#ffa228] flex-[100px] flex-shrink-0">M 100px</div>
                        <div className="bg-[#ff541c] flex-[4]">R 4</div>
                    </section>
                </article>
            </section>


            <section className={"flexrow"}>
                <article>
                    <h2 className={"text-2xl m-4"}>flex-row-reverse</h2>
                    <section className={"flex-row-reverse w-[400px] h-[200px] text-[30px] flex border-[3px] border-black border-solid "}>
                        <div className="bg-[#ffd428] flex-[6]">L 6</div>
                        <div className="bg-[#ffa228] flex-[130px] flex-grow-0 flex-shrink-0">M 130px</div>
                        <div className="bg-[#ff541c] flex-[4]">R 4</div>
                    </section>
                </article>

                <article>
                    <h2 className={"text-2xl m-4"}>flex-col-reverse</h2>
                    <section className={"flex-col-reverse flex-col w-[400px] h-[200px] text-[30px] flex border-[3px] border-black border-solid "}>
                        <div className="bg-[#ffd428] flex-[6]">L 6</div>
                        <div className="bg-[#ffa228] flex-[100px] flex-grow-0 flex-shrink-0">M 100px</div>
                        <div className="bg-[#ff541c] flex-[4]">R 4</div>
                    </section>
                </article>
            </section>

            <section>
                <article>
                    <h2 className={"text-2xl m-4"}>排列物件</h2>
                    <section className={"flex justify-evenly  items-center   w-[800px] h-[600px] relative border-solid border-4 border-black"}>

                        <div className="absolute w-full h-0 border-solid border-[1px] border-red-500 top-[50%] ">Main (justify)</div>
                        <div className="absolute  border-blue-500 border-[1px] w-0 h-full top-0 left-[50%]">Sec (align)</div>
                        <div className={"w-[80px] h-[80px] bg-gray-200 flex  justify-center items-center border-solid border-[2px] border-gray-400 text-xl"}>1</div>
                        <div className={"w-[80px] h-[80px] bg- gray-200 flex  justify-center items-center border-solid border-[2px] border-gray-400 text-xl"}>2</div>
                        <div className={"w-[80px] h-[80px] bg-gray-200  flex  justify-center items-center border-solid border-[2px] border-gray-400 text-xl"}>3</div>

                    </section>
                </article>
            </section>


        </main>

    )
}

export default Page
