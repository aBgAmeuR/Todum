import React from 'react';
import { Todo } from '@/components/todo';
import { Todo as TodoType } from '@/types/todo';
import { prisma } from '@/lib/prisma';

export const Todos = async () => {
  const todo = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="flex flex-col gap-3 w-full mb-8">
      {todo.map((todo: TodoType) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
