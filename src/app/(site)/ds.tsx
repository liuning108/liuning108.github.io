import Canva02 from "@/app/canvas_js/02/page";
import Canva01 from "@/app/canvas_js/01/page";
import Canva04 from "@/app/canvas_js/04/page";

import {JSX} from "react";


type CardItemProps = {
    children:JSX.Element
    className:string
    url:string
}
export const  cardList: CardItemProps[] = [
    {
        children:<Canva04/>,
        className:"",
        url:'/canvas_js/04',
    },
    {
        children: <Canva02/>,
        className:"bg-blue-500",
        url:'/canvas_js/02',
    },
    {
        children:<Canva01/>,
        className:"",
        url:'/canvas_js/01',
    }

]
