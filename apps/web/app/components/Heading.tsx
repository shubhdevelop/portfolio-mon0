import React, { ReactNode } from 'react'
import { cn } from '../utils/utils'

type Props = {
    children: ReactNode,
    className?: string,
}
export function Heading3({ children, className }: Props) {
    return (
        <h1 className={cn('text-xl font-black dark:text-white text-black', className)}>{children}</h1>
    )
}

export function Heading2({ children, className }: Props) {
    return (
        <h1 className={cn('text-2xl font-black dark:text-white text-black', className)}>{children}</h1>
    )
}

export function Heading1({ children, className }: Props) {
    return (
        <h1 className={cn('text-4xl font-black dark:text-white text-black', className)}>{children}</h1>
    )
}
