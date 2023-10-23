import z from 'zod';

export const AddTodoSchema = z.object({
  content: z.string().min(1).max(256),
});
