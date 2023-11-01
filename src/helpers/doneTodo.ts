import { Todo } from '@/types/todo';
import { doneTodo as mutateTodoAction } from '@/actions/todo.actions';

export const doneTodo = async (id: string, done: boolean, todos: Todo[]) => {
  const res = await mutateTodoAction({
    id: id,
    done: done,
  });

  return todos.map((todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        done: done,
      };
    }
    return todo;
  });
};

export const doneTodoOptions = (id: string, done: boolean, todos: Todo[]) => {
  return {
    optimisticData: todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: done,
        };
      }
      return todo;
    }),
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  };
};
