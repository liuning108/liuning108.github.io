import {JSX, ReactNode} from "react";
import Link from "next/link";
import Canva01 from "@/app/canvas_js/01/page";
import {twMerge} from "tailwind-merge";

type ArtCardProps  = {
    children: JSX.Element
    className?: string
    url:string
}
const ArtCard:React.FC<ArtCardProps> = ({children,className="",url}):ReactNode => {
    const styles=twMerge(`relative  xl:max-w-[400px] h-[490px]  text-black bg-white  overflow-hidden  rounded-xl shadow-lg`,className)
    return (
        <div className={styles} >
            <Link href={url} target={"_blank"}>
                <div className={"cursor-pointer"}>
                    {children}
                </div>
            </Link>

        </div>




);

}
export  default  ArtCard
