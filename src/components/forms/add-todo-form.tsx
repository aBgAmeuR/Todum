import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { createTodo } from '@/actions/todo.actions';

export const AddTodoForm = () => {
  async function onSubmit(formData: FormData) {
    'use server';

    await createTodo({
      content: formData.get('content') as string,
    });
  }

  return (
    <form action={onSubmit} className="flex flex-row gap-2 items-center w-full">
      <Input type="text" name="content" className="h-[54px]" placeholder="Ajouter une nouvelle tâche" />
      <Button type="submit" className="h-[54px]">
        Ajouter
      </Button>
    </form>
  );
};
