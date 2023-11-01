'use client';

import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { doneTodo, doneTodoOptions } from '@/helpers/doneTodo';
import { deleteTodo, deleteTodoOptions } from '@/helpers/deleteTodo';
import { cn } from '@/lib/utils';
import fetchTodos from '@/lib/fetchTodos';
import { Check } from '@/components/ui/check';

type TodoProps = {
  id: string;
  createdAt: Date;
  content: string;
  done: boolean;
};

export const Todo = ({ id, content, done }: TodoProps) => {
  const { data, mutate } = useSWR('/api/todos', fetchTodos, {
    revalidateOnFocus: false,
  });

  const handleUpdateTodo = async () => {
    await mutate(doneTodo(id, !done, data), doneTodoOptions(id, !done, data));
  };

  const handleDeleteTodo = async () => {
    await mutate(deleteTodo(id, data), deleteTodoOptions(id, data));
  };

  return (
    <div className="flex flex-row gap-3 w-full p-4 items-center bg-tertiary font-normal text-primary rounded-lg border border-secondary text-lg">
      <div onClick={handleUpdateTodo} className="p-[3px] select-none">
        <Check check={done} />
      </div>
      <p className={cn('w-full', done ? 'text-secondary line-through' : null)}>{content}</p>
      <button onClick={handleDeleteTodo} className="px-1.5 py-[5px] select-none">
        <Image src="/trash.svg" width={12.48} height={14} alt="Check" />
      </button>
    </div>
  );
};
