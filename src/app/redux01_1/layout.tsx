import React from "react";
import {Metadata} from "next";
import {Providers} from "@/redux/01/providers";


export const metadata: Metadata = {
    title: 'Redux Count 2',
    description: '',
}
export default function CoffeeLayout({
                                         children,
                                     }: {
    children: React.ReactNode
}) {
    return (
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
           <Providers>{children}</Providers>
        </div>
    )
}
