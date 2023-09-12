import React from "react";
import Head from "next/head";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Coffee Connoisseur ',
    description: '',
}
export default function CoffeeLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={"min-h-screen flex-col"}>
            {children}
        </div>
    )
}
