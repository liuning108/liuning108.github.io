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
    const styles=twMerge(`lg:basis-[48%]  flex-1  text-black bg-white max-h-[490px] overflow-hidden  rounded-xl shadow-lg`,className)
    return (
        <div className={styles} >

            <Link href={url} target={"_blank"}>
                <div className={"scale-[0.5]  origin-top-left  cursor-pointer "}>
                    {children}
                </div>
            </Link>
        </div>

    );

}
export  default  ArtCard
