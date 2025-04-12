import type React from "react"
import { cn } from "../utils/utils"
import { Heading3 } from "./Heading"
import { ByLine, Paragraph } from "./Paragraph"

interface TimelineItemProps {
    title: string
    description: string
    date: string
    icon?: React.ReactNode
    className?: string
}

export function TimelineItem({ title, description, date, icon, className }: TimelineItemProps) {
    return (
        <div className={cn("relative pl-8 pb-12 last:pb-0 ", className)}>
            <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 dark:border-white border-black bg-background" />
            <div className="absolute left-[7px] top-5 h-full w-[2px] dark:bg-white bg-black" />
            <div className="space-y-1.5 dark:text-white text-black">
                <ByLine className="text-sm dark:text-white text-black">{date}</ByLine>
                <Heading3 className="font-medium leading-snug">{title}</Heading3>
                <Paragraph className="text-sm dark:text-white text-black">{description}</Paragraph>
            </div>
        </div>
    )
}

interface TimelineProps {
    items: TimelineItemProps[]
    className?: string
}

export function Timeline({ items, className }: TimelineProps) {
    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item, index) => (
                <TimelineItem key={index} {...item} />
            ))}
        </div>
    )
}
