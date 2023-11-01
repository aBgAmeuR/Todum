import { Todo } from '@/types/todo';
import { createTodo as createTodoAction } from '@/actions/todo.actions';

export const createTodo = async (content: string, todos: Todo[]) => {
  const res = await createTodoAction({
    content: content,
  });

  if (!res?.error) {
    return [
      {
        id: Math.random().toString(36).substr(2, 9),
        content: content,
        done: false,
        createdAt: new Date().toISOString(),
      },
      ...todos,
    ];
  }
  throw new Error('error occured');
};

export const createTodoOptions = (content: string, todos: Todo[]) => {
  return {
    optimisticData: [
      {
        id: Math.random().toString(36).substr(2, 9),
        content: content,
        done: false,
        createdAt: new Date().toISOString(),
      },
      ...todos,
    ],
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  };
};
