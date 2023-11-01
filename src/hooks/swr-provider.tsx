'use client';

import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export const SWRProvider = ({ children }: PropsWithChildren) => {
  return <SWRConfig>{children}</SWRConfig>;
};
