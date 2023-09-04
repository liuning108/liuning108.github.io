import Canva02 from "@/app/canvas_js/02/page";
import Canva01 from "@/app/canvas_js/01/page";
import {JSX, ReactNode} from "react";


type CardItemProps = {
    id:string
    children:JSX.Element
    className:string
}
export const  cardList:[CardItemProps] = [
    {
        iu:"2",
        children: Canva02,
        className:"bg-blue-500"
    },
    {
        id:"1",
        children: Canva01,
        className:""
    }
]
