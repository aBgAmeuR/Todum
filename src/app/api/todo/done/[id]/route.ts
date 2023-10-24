import * as z from 'zod';
import prisma from '@/lib/prisma';
import { IdTodoSchema, DoneTodoSchema } from '@/lib/validations';

type Params = {
  id: string;
};

export async function PUT(req: Request, context: { params: Params }) {
  try {
    const params = context.params;
    const { id } = IdTodoSchema.parse(params);

    const json = await req.json();
    const body = DoneTodoSchema.parse(json);

    const todo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        done: body.done,
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
