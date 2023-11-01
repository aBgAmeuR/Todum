'use client';

import React from 'react';
import useSWR from 'swr';
import { Todo as TodoType } from '@/types/todo';
import { getTodos } from '@/helpers/getTodos';
import { Todo } from '@/components/todo';
import { TodosLoading } from '@/components/todos-loading';
import { InfosTodo } from '@/components/infos-todo';
import { AddTodoForm } from '@/components/forms/add-todo-form';

export const Todos = () => {
  const { data, isLoading } = useSWR('/api/todos', getTodos, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <>
        <InfosTodo todos={[]} />
        <TodosLoading />
      </>
    );
  }

  const todos = data as TodoType[];

  return (
    <>
      <AddTodoForm />
      <InfosTodo todos={todos} />
      <div className="flex flex-col gap-3 w-full mb-8">
        {todos.map((todo: TodoType) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
};
