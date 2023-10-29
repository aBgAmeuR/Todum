'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from '@/components/ui/check';
import { cn } from '@/lib/utils';
import { deleteTodo, doneTodo } from '@/actions/todo.actions';
import { revalidatePath } from 'next/cache';

type TodoProps = {
  todo: {
    id: string;
    createdAt: Date;
    content: string;
    done: boolean;
  };
};

export const Todo = ({ todo }: TodoProps) => {
  const handleUpdateTodo = async () => {
    await doneTodo({
      id: todo.id,
      done: !todo.done,
    });
  };

  const handleDeleteTodo = async () => {
    await deleteTodo({
      id: todo.id,
    });
  };

  return (
    <div className="flex flex-row gap-3 w-full p-4 items-center bg-tertiary font-normal text-primary rounded-lg border border-secondary text-lg">
      <div onClick={handleUpdateTodo} className="p-[3px] select-none">
        <Check check={todo.done} />
      </div>
      <p className={cn('w-full', todo.done ? 'text-secondary line-through' : '')}>{todo.content}</p>
      <button onClick={handleDeleteTodo} className="px-1.5 py-[5px] select-none">
        <Image src="/trash.svg" width={12.48} height={14} alt="Check" />
      </button>
    </div>
  );
};
