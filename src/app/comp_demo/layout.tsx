import React from "react";
import {Metadata} from "next"
import {Press_Start_2P} from "next/font/google";

const  font = Press_Start_2P({subsets:["latin"],weight:['400'],style:'normal'})

export const metadata: Metadata = {
    title: 'Spotify Clone',
    description: 'Listen to music',
}
export default function CoffeeLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
