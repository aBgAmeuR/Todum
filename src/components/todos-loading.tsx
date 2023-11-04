import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const TodosLoading = () => {
  return (
    <div className="flex flex-col gap-3 w-full mb-16">
      <Skeleton className="h-[58px]" />
      <Skeleton className="h-[82px]" />
      <Skeleton className="h-[58px]" />
    </div>
  );
};
