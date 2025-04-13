"use client"
import React, { ReactNode } from 'react'
import Navbar from './components/Navbar'
import { useTheme } from './context/ThemeContext'

type Props = { children: ReactNode }

function Root({ children }: Props) {
    const { theme } = useTheme()
    return (
        <html lang="en" className={theme ? "" : "dark"} >
            <body className="flex flex-col justify-center items-center mx-auto dark:bg-[#0d0d0d] text-black " >
                <main className="w-full max-w-4xl mx-auto p-6 noise ">
                    {children}
                </main>
                <Navbar />
            </body>
        </html >
    )
}

export default Root