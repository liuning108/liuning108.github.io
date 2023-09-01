import React from "react";
import Head from "next/head";
import {Metadata} from "next";
import  styles from './spotify.module.sass'
import {Press_Start_2P} from "next/font/google";
import Sidebar from "@/components/spotify/sidebar/Sidebar";

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
        <div className={`${font.className} ${styles.container}`}>
            <div className={"flex h-full"}>
                <Sidebar>
                    <div className={" mx-10"}>
                          111
                    </div>
                </Sidebar>
                <div className={"py-8 px-8 max-w-full  bg-gray-700 rounded-xl shadow-lg w-full m-5"}>
                {children}
                </div>
                <Sidebar>
                    <div className={"hidden md:mx-10 lg:block bg-gray-700 h-full w-full"}>
                        111
                    </div>
                </Sidebar>

            </div>
        </div>
    )
}
