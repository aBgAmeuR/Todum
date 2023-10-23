'use client';

import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddTodoSchema } from "@/lib/validations";
import { Form, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

type AddTodoFormValues = z.infer<typeof AddTodoSchema>

export const AddTodoForm = () => {

  const form = useForm<AddTodoFormValues>({
    resolver: zodResolver(AddTodoSchema),
    defaultValues: {
      content: ""
    }
  })

  const onSubmit: SubmitHandler<AddTodoFormValues> = (data) => {
    console.log(data.content);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row gap-2 items-center w-full">
      <Input type="text" className="h-[54px]" placeholder="Ajouter une nouvelle tâche" {...form.register("content")} />
      <Button type="submit" className="h-[54px]">Ajouter</Button>
    </form>
  )
}

