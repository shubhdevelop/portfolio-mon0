import React, { ReactNode } from 'react'
import { cn } from '../utils/utils'
import { WaveAnimation } from './WaveAnimation'
import { useTheme } from '../context/ThemeContext'

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
    const { theme } = useTheme()
    return (
        <h1 className={cn('text-4xl font-black dark:text-white text-black flex flex-row gap-4 items-end', className)}>{children}  <WaveAnimation className='bg-white' bgColor={theme ? "#fff" : "#0d0d0d"} bgOpacity={1} /></h1>
    )
}
