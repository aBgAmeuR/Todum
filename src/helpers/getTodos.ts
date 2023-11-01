import { getTodos as getTodosAction } from '@/actions/todo.actions';

export const getTodos = async () => {
  const todos = await getTodosAction();
  if (Array.isArray(todos)) {
    return todos;
  }
  throw new Error('error occured');
};
