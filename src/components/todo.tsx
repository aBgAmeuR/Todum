'use client';

import React, { useOptimistic } from 'react';
import Image from 'next/image';
import { Check } from '@/components/ui/check';
import { cn } from '@/lib/utils';
import { deleteTodo, doneTodo, createTodo } from '@/actions/todo.actions';

type TodoProps = {
  id: string;
  createdAt: Date;
  content: string;
  done: boolean;
  isDeleted?: boolean;
};

export const Todo = ({ id, createdAt, content, done, isDeleted = false }: TodoProps) => {
  const [optimisticDone, addOptimisticDone] = useOptimistic(done, (done: boolean) => !done);
  const [optimisticDelete, addOptimisticDelete] = useOptimistic(isDeleted, (isDeleted: boolean) => !isDeleted);

  const handleUpdateTodo = async () => {
    addOptimisticDone(!done);
    await doneTodo({
      id: id,
      done: !done,
    });
  };

  const handleDeleteTodo = async () => {
    addOptimisticDelete(!isDeleted);
    await deleteTodo({
      id: id,
    });
  };

  return (
    <div className={cn('flex flex-row gap-3 w-full p-4 items-center bg-tertiary font-normal text-primary rounded-lg border border-secondary text-lg', optimisticDelete ? 'hidden' : null)}>
      <div onClick={handleUpdateTodo} className="p-[3px] select-none">
        <Check check={optimisticDone} />
      </div>
      <p className={cn('w-full', optimisticDone ? 'text-secondary line-through' : '')}>{content}</p>
      <button onClick={handleDeleteTodo} className="px-1.5 py-[5px] select-none">
        <Image src="/trash.svg" width={12.48} height={14} alt="Check" />
      </button>
    </div>
  );
};
