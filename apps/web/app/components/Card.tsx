import React, { ReactNode } from 'react'
import { Heading3 } from './Heading'
import Link from 'next/link'

type Props = {
    children: ReactNode[] | ReactNode, to: string,
    className?: string
}

export function Card({ children }: Omit<Props, "to">) {
    return (
        <div className='px-10 py-6 flex-col gap-3 w-full min-w-fit border-[.5px] bg-white dark:bg-[#0d0d0d] dark:border-[#161616] hover:border-[#c8c8c89f] hover:scale-[101%] ease-in-out rounded-sm transition  duration-100'>{children}</div>
    )
}
export function CardHeading({ children }: Omit<Props, "to">) {
    return (
        <Heading3>{children}</Heading3>
    )
}
export function CardContent({ children }: Omit<Props, "to">) {
    return (
        <div className='dark:text-white text-black text-sm'>{children}</div>
    )
}

export function CardLink({ children, to }: Props) {
    return (
        <Link href={to} className='w-fit' >{children}</Link>
    )
}


