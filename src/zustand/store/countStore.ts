import {create} from "zustand";
import {persist} from "zustand/middleware";

export  const useStore = create((set)=>({
    count:0,
    inc:()=>set((state:any)=>({count:state.count+1}))
}))
