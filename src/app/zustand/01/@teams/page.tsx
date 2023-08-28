'use client'
import {useStore} from "@/zustand/store/countStore";

export default  function Page() {
    // @ts-ignore
    const { count, inc } = useStore()
    return (
        <div>
            1111
            <div>{count}</div>
            <button onClick={inc}>one up</button>
        </div>
    )
}
