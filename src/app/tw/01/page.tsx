
import logo from '@/../public/logo.svg'
import Image from "next/image";
import {it} from "node:test";


function PersonList(){
    let person =[
        {
            imageUrl:".",
            name:'name-1',
            email:"email-1@mail.com"
        },
        {
            imageUrl:".",
            name:'name-2',
            email:"email-2@mail.com"
        },
        {
            imageUrl:".",
            name:'name-3',
            email:"email-3@mail.com"
        },
        {
            imageUrl:".",
            name:'name-4',
            email:"email-4@mail.com"
        }
    ]
    const listItems = person.map(item=>{
        return (
            <li className={"px-6 flex py-4 first:pt-0 last:pb-0"} key={item.email}>
                <img className={"h-10 w-10 rounded-full"} src={item.imageUrl}/>
                <div className={"ml-3 overflow-hidden"}>
                    <p className={"text-sm font-medium text-slate-900"}>{item.name}</p>
                    <p className={"text-sm text-slate-500 truncate"}>{item.email}</p>

                </div>
            </li>
        )
    })
    return (
        <ul className={" p-6 divide-y divide-slate-200"}>{listItems}</ul>
    )
}
export default function  Page(){
    return (
        <>
        <section>
            <div className={"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex space-x-4 cursor-pointer"}>
                <div className={"shrink-0"}>
                    <Image className={"h-12 w-12"} src={logo} alt={"ChitChat Logo"}/>
                </div>
                <div>
                    <h4 className={"text-xl font-medium text-black"}>ChitChat</h4>
                    <p className={"text-slate-500"}>You have a new message!</p>
                </div>


            </div>
        </section>
        <section className={"p-6"}>
            <div className={"py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-x-6"}>
                <img className={"block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"} src={"https://tailwindcss.com/img/erin-lindford.jpg"} alt={"Woman"}/>
                <div className={"text-center space-y-2 sm:text-left"}>
                    <div className={"space-y-0.5"}>
                        <p className={"text-lg text-black font-semibold"}>
                            Erin Lindford
                        </p>
                        <p className={"text-slate-500 font-medium"}>
                            Product Engineer
                        </p>
                        <button className={"px-4 py-1 text-sm text-purple-600 font-semibold border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"}>Message</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <button className={"bg-sky-500 hover:bg-sky-700 text-white py-2  px-5 rounded-full"}>
                Save Change
            </button>

        </section>
        <section>
                <PersonList/>
        </section>
            <section className={"p-10"}>
                <div className={"group cursor-pointer block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500"}>
                    <div className={"flex items-center space-x-3"}>
                        <h3 className={"text-sky-900 text-sm font-semibold group-hover:text-white"}>New Project</h3>
                    </div>
                    <p className={"text-slate-500   text-sm group-hover:text-white"}>
                       create a new project from a variety of starting templates.
                    </p>

                </div>

            </section>


        </>

    )
}
