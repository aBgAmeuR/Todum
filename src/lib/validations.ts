import z from 'zod';

export const AddTodoSchema = z.object({
  content: z.string().min(1).max(256),
});

export const IdTodoSchema = z.object({
  id: z.string(),
});

export const DoneTodoSchema = z.object({
  done: z.boolean(),
});
