
import {BsFillMoonStarsFill} from 'react-icons/bs'

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
export default function Home() {
  return (
       <div>
         <main className={"bg-white px-10"}>
             <section className={" min-h-screen"}>
                 <nav className={"py-10 mb-12 flex justify-around"}>
                     <h1 className={"text-xl font-burtons"}>Liu-Ning . Dev</h1>
                     <ul className={"flex items-center"}>
                         <li>
                             <BsFillMoonStarsFill className={"cursor-pointer"}/>
                         </li>
                         <li>
                             {/*<a  className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-burtons"} href={"#"}>经历</a>*/}
                         </li>
                     </ul>
                 </nav>
                 <div className={"text-center p-10"}>
                     <h2 className={"text-5xl py-2 text-teal-600 font-medium"}>Liuning Dev</h2>
                     <h3 className={"text-2xl py-2"}>Developer and Designer</h3>
                     <p className={"text-md py-5 leading-8 text-gray-800"}>
                         Talk is cheap. Show me the code.
                     </p>
                 </div>
                 <div className={"text-4xl flex justify-center gap-16 py-3 text-gray-600 "}>
                     <AiFillGithub className={"cursor-pointer"}/>
                     <AiFillWechat className={"cursor-pointer"}/>
                     <AiFillMail className={"cursor-pointer"}/>
                 </div>

                 <div className={"relative mx-auto bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden" }>
                     <Image src={deved} layout={"fill"} objectFit={"cover"} alt={""}/>
                 </div>

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
