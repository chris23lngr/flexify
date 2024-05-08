import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { TailwindIndicator } from '@/components/tw-indicator';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Font files can be colocated inside of `app`
const fontDisplay = localFont({
  src: '../../public/fonts/satoshi-variable.ttf',
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Flexify',
  description:
    'Reusable components for building websites and web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
