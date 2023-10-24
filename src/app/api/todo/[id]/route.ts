import * as z from 'zod';
import prisma from '@/lib/prisma';

type Params = {
  id: string;
};

export async function DELETE(req: Request, context: { params: Params }) {
  try {
    const { id } = context.params;

    const todo = await prisma.todo.delete({
      where: {
        id: id as string,
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
