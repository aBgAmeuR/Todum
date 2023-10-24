import React from 'react'
import prisma from '@/lib/prisma';
import { Todo } from './todo';

export const Todos = async () => {
  const todo = await prisma.todo.findMany()

  return (
    <div className='flex flex-col gap-3 w-full'>
      {todo.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
