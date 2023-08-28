'use client'
import {useStore} from "@/zustand/store/countStore";
import Link from "next/link";

export default  function Page() {
    // @ts-ignore
    const { count, inc } = useStore()
    return (
        <div>
            <div>{count}</div>
            <button onClick={inc}>one up</button>
            <Link href={"/zustand/02"}> page 2</Link>
        </div>
    )
}
