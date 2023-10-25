'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Check } from '@/components/ui/check';
import { cn } from '@/lib/utils';

type TodoProps = {
  todo: {
    id: string;
    createdAt: Date;
    content: string;
    done: boolean;
  }
}

export const Todo = ({ todo }: TodoProps) => {
  const router = useRouter()

  const deleteTodo = async () => {
    const res = await fetch(`/api/todo/${todo.id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      alert('Something went wrong')
    }

    router.refresh()
  }

  const updateTodo = async () => {
    const res = await fetch(`/api/todo/done`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: todo.id,
        done: !todo.done
      }),
    })

    if (!res.ok) {
      alert('Something went wrong')
    }

    router.refresh()
  }

  return (
    <div className='flex flex-row gap-3 w-full p-4 items-center bg-tertiary font-normal text-primary rounded-lg border border-secondary text-lg'>
      <div onClick={updateTodo} className='p-[3px] select-none'>
        <Check check={todo.done} />
      </div>
      <p className={cn('w-full', todo.done ? 'text-secondary line-through' : '')}>
        {todo.content}
      </p>
      <button onClick={deleteTodo} className='px-1.5 py-[5px] select-none' >
        <Image src='/trash.svg' width={12.48} height={14} alt='Check' />
      </button>
    </div>
  )
}
