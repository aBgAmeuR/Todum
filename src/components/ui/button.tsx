import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export const Button = ({ children, className }: Props) => {
  return (
    <button className={cn('p-4 rounded-lg bg-blue text-primary', className)}>
      {children}
    </button>
  )
}
