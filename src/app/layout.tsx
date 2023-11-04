import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { QueryClientProvider } from '@/hooks/query-client-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todum',
  description: 'A todo app for the modern age.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={cn('bg-primary flex justify-center', inter.className)} suppressHydrationWarning={true}>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
