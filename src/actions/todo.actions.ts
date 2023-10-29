'use server';

import { prisma } from '@/lib/prisma';
import { AddTodoSchema, DeleteTodoSchema, DoneTodoSchema } from '@/lib/validations';
import { revalidatePath } from 'next/cache';

export async function createTodo(formData: FormData) {
  const data = AddTodoSchema.parse({
    content: formData.get('content'),
  });

  await prisma.todo.create({
    data: {
      content: data.content,
    },
    select: {
      id: true,
    },
  });
  revalidatePath('/');
}

export async function deleteTodo(data: { id: string }) {
  const { id } = DeleteTodoSchema.parse(data);

  const todo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath('/');
  return todo;
}

export async function doneTodo(data: { id: string; done: boolean }) {
  const { id, done } = DoneTodoSchema.parse(data);

  const todo = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      done: done,
    },
  });
  revalidatePath('/');
  return todo;
}
