import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  text: string
  className?: string
}

export const Button = ({ text, className }: Props) => {
  return (
    <button className={cn('p-4 rounded-lg bg-blue text-primary', className)}>
      {text}
    </button>
  )
}
