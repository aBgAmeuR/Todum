import React from 'react';
import { Todo } from '@/types/todo';
import { Badge } from '@/components/ui/badge';

type Props = {
  todos: Todo[];
};

export const InfosTodo = ({ todos }: Props) => {
  const todosLength = todos.length;
  const todosDoneLength = todos.filter((todo) => todo.done).length;

  return (
    <div className="flex flex-row justify-between w-full pt-16 mb-6">
      <div className="flex flex-row gap-2">
        <p className="text-blue font-bold">Tâches créées</p>
        <Badge>{todosLength}</Badge>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-purple font-bold">Complété</p>
        <Badge>{todosDoneLength}</Badge>
      </div>
    </div>
  );
};
