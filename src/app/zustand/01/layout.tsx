import React from "react";
import {Metadata} from "next";
import {Providers} from "@/redux/01/providers";


export const metadata: Metadata = {
    title: 'Zustand 01 ',
    description: '',
}
export default function CoffeeLayout(props:any) {
    console.log("team",props);
    return (
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
          {props.children}
            <h1>0-------------0</h1>
            {props.teams}
            <h1>0-------------0</h1>
        </div>
    )
}

