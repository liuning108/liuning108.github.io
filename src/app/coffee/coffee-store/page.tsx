'use client'
import {useRouter} from "next/navigation";

const Page  = ()=>{
    const  router = useRouter()
    console.log("router",router)
    return (
        <div>Coffee Store Page</div>
    )
}
export default Page
