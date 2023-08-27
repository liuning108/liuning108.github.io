'use client'

import React from "react";
// @ts-ignore
import {Provider} from "react-redux"
import {store} from "./store";
type  Props ={
    children:React.ReactNode
}
export function Providers({children}:Props){
    // @ts-ignore
    return <Provider store={store}>{children}</Provider>
}
