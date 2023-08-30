"use client"
import useStore from "@/zustand/bears-store/store";
function BearCounter() {
    const bears = useStore((state:any) => state.bears)
    return <h1>{bears} around here...</h1>
}

function Controls() {
    const add = useStore((state:any) => state.add)
    return <button onClick={add}>one up</button>
}
export default  function Page() {
    return (
        <div>
            <BearCounter/>
            <Controls/>
        </div>
    )
}
