import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createTodo } from '@/actions/todo.actions';

export const AddTodoForm = () => {
  return (
    <form action={createTodo} className="flex flex-row gap-2 items-center w-full">
      <Input type="text" name="content" className="h-[54px]" placeholder="Ajouter une nouvelle tâche" />
      <Button type="submit" className="h-[54px]">
        Ajouter
      </Button>
    </form>
  );
};
