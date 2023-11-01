'use client';

import React from 'react';
import useSWR from 'swr';
import { createTodo, createTodoOptions } from '@/helpers/createTodo';
import fetchTodos from '@/lib/fetchTodos';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AddTodoForm = () => {
  const { data, mutate } = useSWR('/api/todos', fetchTodos, {
    revalidateOnFocus: false,
  });

  const onSubmit = async (formData: FormData) => {
    const content = formData.get('content') as string;

    await mutate(createTodo(content, data), createTodoOptions(content, data));
  };

  return (
    <form action={onSubmit} className="flex flex-row gap-2 items-center w-full">
      <Input type="text" name="content" className="h-[54px]" placeholder="Ajouter une nouvelle tâche" maxLength={256} required />
      <Button type="submit" className="h-[54px]">
        Ajouter
      </Button>
    </form>
  );
};
