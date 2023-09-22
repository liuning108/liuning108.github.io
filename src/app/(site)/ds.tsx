import Canva02 from "@/app/canvas_js/02/page";
import Canva01 from "@/app/canvas_js/01/page";
import Canva04 from "@/app/canvas_js/04/page";
import Canva05 from "@/app/canvas_js/05/page";
import Canva06 from "@/app/canvas_js/07/page";
import {JSX} from "react";

type CardItemProps = {
    children:JSX.Element
    className:string
    url:string
    name:string
}
export const  cardList: CardItemProps[] = [
    {
        children:<Canva06 hide={true}/>,
        className:"bg-[#eee]",
        url:'/canvas_js/06',
        name:"Ball"
    },
    {
        children:<Canva05/>,
        className:"bg-[#eee]",
        url:'/canvas_js/05',
        name:"九宫图"
    },
    {
        children:<Canva04/>,
        className:"",
        url:'/canvas_js/04',
        name:"童年"
    },
    {
        children: <Canva02/>,
        className:"bg-blue-500",
        url:'/canvas_js/02',
        name:"My Cake"
    },
    {
        children:<Canva01/>,
        className:"",
        url:'/canvas_js/01',
        name:"Flex排版"
    }

]
