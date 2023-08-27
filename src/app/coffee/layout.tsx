import React from "react";
import Head from "next/head";
import {Metadata} from "next";
import  styles from './coffee.module.sass'

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
        <div className={styles.container}>

            {children}
        </div>
    )
}
