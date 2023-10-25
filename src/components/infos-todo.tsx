import React from 'react'
import { Badge } from '@/components/ui/badge'
import prisma from '@/lib/prisma';

export const InfosTodo = async () => {
  const todosLength = await prisma.todo.count()
  const todosDoneLength = await prisma.todo.count({
    where: {
      done: true
    }
  })

  return (
    <div className='flex flex-row justify-between w-full pt-16 mb-6'>
      <div className='flex flex-row gap-2'>
        <p className='text-blue font-bold'>Tâches créées</p>
        <Badge>{todosLength}</Badge>
      </div>
      <div className='flex flex-row gap-2'>
        <p className='text-purple font-bold'>Complété</p>
        <Badge>{todosDoneLength}</Badge>
      </div>
    </div>
  )
}
