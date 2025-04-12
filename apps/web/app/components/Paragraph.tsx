import React, { ReactNode } from 'react'
import { cn } from '../utils/utils'

type Props = {
    children: ReactNode
    className?: string
}

export function Paragraph({ children, className }: Props) {
    return (
        <p className={cn('dark:text-white text-black text-sm', className)}>{children}</p>
    )
}

export function ByLine({ children, className }: Props) {
    return (
        <p className={cn('dark:text-white text-black text-sm dark:bg-[#ededed15] bg-amber-50 tracking-wide my-1 font-mono p-1 max-w-fit', className)}>{children}</p>
    )
}
