'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Todo as TodoType } from '@/types/todo';
import { getTodos } from '@/actions/todo.actions';
import { Todo } from '@/components/todo';
import { TodosLoading } from '@/components/todos-loading';
import { InfosTodo } from '@/components/infos-todo';
import { AddTodoForm } from '@/components/forms/add-todo-form';

function useTodos() {
  return useQuery<TodoType[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const todos = await getTodos();
      if (Array.isArray(todos)) return todos;
      throw new Error('error occured');
    },
  });
}

export const Todos = () => {
  const { data: todos, isLoading, isError } = useTodos();

  if (isError) {
    return <h1>There was an error, try again.</h1>;
  }

  if (isLoading) {
    return (
      <>
        <AddTodoForm />
        <InfosTodo todos={[]} />
        <TodosLoading />
      </>
    );
  }

  return (
    <>
      <AddTodoForm />
      <InfosTodo todos={todos || []} />
      <div className="flex flex-col gap-3 w-full mb-8">
        {todos?.map((todo: TodoType) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
};
