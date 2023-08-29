
import {BsFillMoonStarsFill} from 'react-icons/bs'
export default function Home() {
  return (
       <div>
         <main>
             <section className={" min-h-screen"}>
                 <nav>
                     <h1>Liuning</h1>
                     <ul>
                         <li>
                             <BsFillMoonStarsFill/>
                         </li>
                         <li><a href={"#"}>Resume</a></li>
                     </ul>
                 </nav>
             </section>

         </main>
       </div>
     )
}
