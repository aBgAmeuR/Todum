import * as z from 'zod';
import prisma from '@/lib/prisma';
import { AddTodoSchema } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = AddTodoSchema.parse(json);

    const todo = await prisma.todo.create({
      data: {
        content: body.content,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(todo));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
