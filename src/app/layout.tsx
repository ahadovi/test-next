import { TailwindIndicator } from '@/components/tailwind-indicator';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs && Docker starter file',
  description: 'Nextjs && Docker starter file',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
