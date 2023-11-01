import { Todo } from '@/types/todo';
import { deleteTodo as deleteTodoAction } from '@/actions/todo.actions';

export const deleteTodo = async (id: string, todos: Todo[]) => {
  const res = await deleteTodoAction({
    id: id,
  });
  if (!res?.error) {
    return todos.filter((todo: Todo) => todo.id !== id);
  }
  return todos;
};

export const deleteTodoOptions = (id: string, todos: Todo[]) => {
  return {
    optimisticData: todos.filter((todo: Todo) => todo.id !== id),
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  };
};
