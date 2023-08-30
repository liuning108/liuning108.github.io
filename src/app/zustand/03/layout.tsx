import React from "react";
import {Metadata} from "next";
import {Providers} from "@/redux/01/providers";


export const metadata: Metadata = {
    title: 'Zustand 03 ',
    description: '',
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

