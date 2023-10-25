import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> { }

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center bg-quaternary text-tertiary rounded-full px-2.5 text-xs font-semibold", className)} {...props} />
  )
}

export { Badge }