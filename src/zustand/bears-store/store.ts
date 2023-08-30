import {create} from "zustand";

type Props ={
    bears:number,
    add:()=> void
    remove:()=>void
}

const useStore = create((set)=>({
    bears:0,
    add:()=> set((state:Props)=>({bears:state.bears+1})),
    remove:()=> set({bears:0})
}))
export  default useStore
