'use client';

import React, { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo as TodoType } from '@/types/todo';
import { createTodo } from '@/actions/todo.actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AddTodoForm = () => {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ content }: { content: string; id: string }) => await createTodo({ content }),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old: TodoType[]) => [newTodo, ...old]);

      return { previousTodos };
    },
    onError: (err, context: any) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const onSubmit = (formData: FormData) => {
    const content = formData.get('content') as string;

    mutate({
      content: content,
      id: Math.random().toString(36).substr(2, 9),
    });

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }, 2000);
  };

  return (
    <form action={onSubmit} className="flex flex-row gap-2 items-center w-full">
      <Input type="text" name="content" className="h-[54px]" placeholder="Ajouter une nouvelle tâche" disabled={isPending} maxLength={256} required ref={inputRef} />
      <Button type="submit" className="h-[54px]" disabled={isPending}>
        Ajouter
      </Button>
    </form>
  );
};
