// 'use client'

// import React from 'react';

// interface Props {
//   width: React.CSSProperties['width'];
//   height: React.CSSProperties['height'];
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-tertiary", className)}
      {...props}
    />
  )
}

export { Skeleton }
