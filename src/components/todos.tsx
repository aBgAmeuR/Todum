import React from 'react'
import prisma from '@/lib/prisma';
import { Todo } from './todo';

export const Todos = async () => {
  const todo = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className='flex flex-col gap-3 w-full mb-16'>
      {todo.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
