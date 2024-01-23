'use client';

import React from 'react';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { doneTodo, deleteTodo } from '@/actions/todo.actions';
import { Todo as TodoType } from '@/types/todo';
import { cn } from '@/lib/utils';
import { Check } from '@/components/ui/check';

type Props = {
  id: string;
  content: string;
  done: boolean;
};

export const Todo = ({ id, content, done }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodoMutation } = useMutation({
    mutationFn: async () => await doneTodo({ id, done: !done }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old: TodoType[]) => {
        return old.map((todo: TodoType) => {
          return todo.id === id ? { ...todo, done: !done } : todo;
        });
      });

      return { previousTodos };
    },
    onError: (err, context: any) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: async () => await deleteTodo({ id }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old: TodoType[]) => {
        return old.filter((todo: TodoType) => todo.id !== id);
      });

      return { previousTodos };
    },
    onError: (err, context: any) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <div className="flex flex-row gap-3 w-full p-4 items-center bg-tertiary font-normal text-primary rounded-lg border border-secondary text-lg">
      <div onClick={() => updateTodoMutation(!done)} className="p-[3px] select-none">
        <Check check={done} />
      </div>
      <div className='w-full overflow-hidden'>
        <p className={cn('w-full break-words', done ? 'text-secondary line-through' : null)}>{content}</p>
      </div>
      <button onClick={() => deleteTodoMutation(id)} className="px-1.5 py-[5px] select-none">
        <Image src="/trash.svg" width={12.48} height={14} alt="Check" />
      </button>
    </div>
  );
};
