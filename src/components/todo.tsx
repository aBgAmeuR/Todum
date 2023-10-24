'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

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
    console.log(res);
    

    if (!res.ok) {
      alert('Something went wrong')
    }

    router.refresh()
  }

  return (
    <div className='flex flex-row gap-3 w-full p-4 items-center bg-tertiary font-normal text-primary rounded-lg border border-secondary text-lg'>
      <div>

      </div>
      <div className='w-full'>
        {todo.content}
      </div>
      <button onClick={deleteTodo} className='px-1.5 py-[5px]' >
        <Image src='/trash.svg' width={12.48} height={14} alt='Check' />
      </button>
    </div>
  )
}
