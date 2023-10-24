'use client';

import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddTodoSchema } from "@/lib/validations";
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from 'next/navigation';

type AddTodoFormValues = z.infer<typeof AddTodoSchema>

export const AddTodoForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter()

  const form = useForm<AddTodoFormValues>({
    resolver: zodResolver(AddTodoSchema),
    defaultValues: {
      content: ""
    }
  })

  const onSubmit: SubmitHandler<AddTodoFormValues> = async (data) => {
    startTransition(async () => {
      try {
        const todo = await fetch("/api/todos", {
          method: "POST",
          body: JSON.stringify(data)
        })

        if (todo.ok) {
          form.reset()
          router.refresh()
        }
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row gap-2 items-center w-full">
      <Input type="text" className="h-[54px]" placeholder="Ajouter une nouvelle tâche" {...form.register("content")} />
      <Button type="submit" className="h-[54px]" disabled={isPending}>Ajouter</Button>
    </form>
  )
}

