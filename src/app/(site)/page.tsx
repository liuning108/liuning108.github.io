"use client"
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import {AiFillGithub, AiFillMail, AiFillWechat} from 'react-icons/ai'
import Image from "next/image";
import deved from '../../../public/pger.png'
import {useState} from "react";
import ArtCard from "@/components/artcard/artCard";
import {cardList} from './ds'

const ArtCardList = () => {

    return cardList.map(({children, className, url,name}) => {
        return (

            <div className={"flex flex-col xl:basis-[30%]"}>
                <ArtCard key={url} className={className} url={url}>
                    {children}
                </ArtCard>
                <p className={"text-white  py-2 font-bold text-lg"}>{name}</p>
            </div>
        )
    })
}

export default function Home() {
    const [darkMode,setDarkMode] = useState(true);
    let button
    if (!darkMode){
        button=<BsFillMoonStarsFill className={"cursor-pointer"} onClick={()=>setDarkMode(!darkMode)}/>
    }else {
        button=<BsFillSunFill className={"cursor-pointer"} onClick={()=>setDarkMode(!darkMode)}/>
    }
    // @ts-ignore
    return (
       <div className={darkMode?"dark":'' }>
         <main className={"font-mono bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white"}>
             <section className={" min-h-screen"}>
                 <nav className={"py-10 mb-12 flex justify-around"}>
                     <h1 className={"text-xl font-burtons"}>Liu-Ning . Dev</h1>
                     <ul className={"flex items-center"}>
                         {/*<li>*/}
                         {/*    {button}*/}
                         {/*</li>*/}
                         <li>
                             {/*<a  className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-burtons"} href={"#"}>经历</a>*/}
                         </li>
                     </ul>
                 </nav>
                 <div className={"text-center p-10 dark:text-white"}>
                     <h2 className={"text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400"}>Liuning Dev</h2>
                     <h3 className={"text-2xl py-2 md:text-3xl"}>Developer and Designer</h3>
                     <p className={"text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white"}>
                         Talk is cheap. Show me the code.
                     </p>
                 </div>
                 <div className={"text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white "}>
                     <AiFillGithub className={"cursor-pointer"}/>
                     <AiFillWechat className={"cursor-pointer"}/>
                     <AiFillMail className={"cursor-pointer"}/>
                 </div>

                 <div className={"relative flex items-center justify-center mx-auto bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96" }>
                     <Image  src={deved}  alt={""}/>
                 </div>

             </section>

             <section>
                 <div className={"dark:text-white"}>
                     <h3 className={"text-3xl py-1"}>提供的服务</h3>
                     <p className={"text-xl py-2 leading-8 text-gray-80"}>
                         作为一名开发者，我曾在多家<span className="text-teal-500">公司</span>从事工作，为<span className="text-teal-500">初创企业</span>提供咨询，并与各种人才合作，为企业和消费者开发数字产品。

                     </p>
                     <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
                         我提供广泛的服务，包括品牌设计、编程和教学。
                     </p>
                 </div>



             </section>
             <section>
                 <section className="py-10">
                     <div>
                         <h3 className="text-3xl py-1 dark:text-white ">练习簿</h3>
                     </div>
                     <div className="flex flex-col gap-10 py-10 xl:flex-row xl:flex-wrap">
                         <ArtCardList/>
                     </div>
                 </section>
             </section>

         </main>
       </div>
     )
}
