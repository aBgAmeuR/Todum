'use server';

import { prisma } from '@/lib/prisma';
import { AddTodoSchema, DeleteTodoSchema, DoneTodoSchema } from '@/lib/validations';
import { revalidatePath } from 'next/cache';

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return todos;
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  }
}

export async function createTodo(data: { content: string }) {
  try {
    const { content } = AddTodoSchema.parse(data);

    await prisma.todo.create({
      data: {
        content: content,
      },
      select: {
        id: true,
      },
    });
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  } finally {
    revalidatePath('/');
  }
}

export async function deleteTodo(data: { id: string }) {
  try {
    const { id } = DeleteTodoSchema.parse(data);

    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  }
}

export async function doneTodo(data: { id: string; done: boolean }) {
  try {
    const { id, done } = DoneTodoSchema.parse(data);

    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        done: done,
      },
    });
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  } finally {
    revalidatePath('/');
  }
}
