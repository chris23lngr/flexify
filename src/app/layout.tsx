import { TailwindIndicator } from '@/components/tw-indicator';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-zinc-900">
      <head />
      <body
        className={cn(
          'dark min-h-screen bg-background font-sans antialiased',
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
