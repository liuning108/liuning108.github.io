
"use client"
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

import {
    AiFillAccountBook,
    AiFillAlipayCircle,
    AiFillApi, AiFillBug, AiFillBulb, AiFillEnvironment, AiFillGithub,
    AiFillHome,
    AiFillLinkedin, AiFillMail, AiFillPayCircle, AiFillQqCircle,
    AiFillWechat,
    AiFillYoutube
} from 'react-icons/ai'
import Image from "next/image";
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import {useState} from "react";

export default function Home() {
    const [darkMode,setDarkMode] = useState(false);
    let button
    if (!darkMode){
        button=<BsFillMoonStarsFill className={"cursor-pointer"} onClick={()=>setDarkMode(!darkMode)}/>
    }else {
        button=<BsFillSunFill className={"cursor-pointer"} onClick={()=>setDarkMode(!darkMode)}/>
    }
    return (
       <div className={darkMode?"dark":'' }>
         <main className={"bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white"}>
             <section className={" min-h-screen"}>
                 <nav className={"py-10 mb-12 flex justify-around"}>
                     <h1 className={"text-xl font-burtons"}>Liu-Ning . Dev</h1>
                     <ul className={"flex items-center"}>
                         <li>
                             {button}
                         </li>
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

                 <div className={"relative mx-auto bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96" }>
                     <Image src={deved} layout={"fill"} objectFit={"cover"} alt={""}/>
                 </div>

             </section>

             <section>
                 <div className={"dark:text-white"}>
                     <h3 className={"text-3xl py-1"}>Services I offer</h3>
                     <p className={"text-md py-2 leading-8 text-gray-80"}>
                         Since the beginning  of my journey as freel developer , I've done remote work for
                         <span className="text-teal-500"> agencies </span>
                         consulted for <span className="text-teal-500">startups </span>
                         and collaborated with talanted people to create digital products
                         for both business and consumer use.

                     </p>
                     <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                         I offer from a wide range of services, including brand design,
                         programming and teaching.
                     </p>
                 </div>

                 <div className="lg:flex gap-10">
                     <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                         <Image src={design} width={100} height={100} />
                         <h3 className="text-lg font-medium pt-8 pb-2  ">
                             Beautiful Designs
                         </h3>
                         <p className="py-2">
                             Creating elegant designs suited for your needs following core
                             design theory.
                         </p>
                         <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                         <p className="text-gray-800 py-1">Photoshop</p>
                         <p className="text-gray-800 py-1">Illustrator</p>
                         <p className="text-gray-800 py-1">Figma</p>
                         <p className="text-gray-800 py-1">Indesign</p>
                     </div>
                     <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                         <Image src={code} width={100} height={100} />
                         <h3 className="text-lg font-medium pt-8 pb-2 ">
                             Code your dream project
                         </h3>
                         <p className="py-2">
                             Do you have an idea for your next great website? Let's make it a
                             reality.
                         </p>
                         <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                         <p className="text-gray-800 py-1">Photoshop</p>
                         <p className="text-gray-800 py-1">Illustrator</p>
                         <p className="text-gray-800 py-1">Figma</p>
                         <p className="text-gray-800 py-1">Indesign</p>
                     </div>
                     <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                         <Image src={consulting} width={100} height={100} />
                         <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                         <p className="py-2">
                             Are you interested in feedback for your current project? I can
                             give you tips and tricks to level it up.
                         </p>
                         <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                         <p className="text-gray-800 py-1">Photoshop</p>
                         <p className="text-gray-800 py-1">Illustrator</p>
                         <p className="text-gray-800 py-1">Figma</p>
                         <p className="text-gray-800 py-1">Indesign</p>
                     </div>
                 </div>

             </section>
             <section>
                 <section className="py-10">
                     <div>
                         <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
                         <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                             Since the beginning of my journey as a freelance designer and
                             developer, I've done remote work for
                             <span className="text-teal-500"> agencies </span>
                             consulted for <span className="text-teal-500">startups </span>
                             and collaborated with talanted people to create digital products
                             for both business and consumer use.
                         </p>
                         <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                             I offer from a wide range of services, including brand design,
                             programming and teaching.
                         </p>
                     </div>
                     <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                         <div className="basis-1/3 flex-1  ">
                             <Image
                                 className="rounded-lg object-cover"
                                 width={"100%"}
                                 height={"100%"}
                                 layout="responsive"
                                 src={web1}
                             />
                         </div>
                         <div className="basis-1/3 flex-1">
                             <Image
                                 className="rounded-lg object-cover"
                                 width={"100%"}
                                 height={"100%"}
                                 layout="responsive"
                                 src={web2}
                             />
                         </div>
                         <div className="basis-1/3 flex-1">
                             <Image
                                 className="rounded-lg object-cover"
                                 width={"100%"}
                                 height={"100%"}
                                 layout="responsive"
                                 src={web3}
                             />
                         </div>
                         <div className="basis-1/3 flex-1">
                             <Image
                                 className="rounded-lg object-cover"
                                 width={"100%"}
                                 height={"100%"}
                                 layout="responsive"
                                 src={web4}
                             />
                         </div>
                         <div className="basis-1/3 flex-1">
                             <Image
                                 className="rounded-lg object-cover"
                                 width={"100%"}
                                 height={"100%"}
                                 layout="responsive"
                                 src={web5}
                             />
                         </div>
                         <div className="basis-1/3 flex-1">
                             <Image
                                 className="rounded-lg object-cover"
                                 width={"100%"}
                                 height={"100%"}
                                 layout="responsive"
                                 src={web6}
                             />
                         </div>
                     </div>
                 </section>
             </section>

             {/*<section>*/}
             {/*    <div>*/}
             {/*        <h3>Services I offer</h3>*/}
             {/*    </div>*/}
             {/*</section>*/}

         </main>
       </div>
     )
}
