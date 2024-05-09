import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <footer ref={ref} {...rest} className={cn('', className)}>
      <div className="container flex flex-col items-center justify-between gap-8 bg-background py-12 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          Built by{' '}
          <Link
            href={'https://github.com/chris23lngr'}
            className="font-medium transition-colors hover:text-foreground"
          >
            chris23lngr
          </Link>
          . Check out the{' '}
          <Link
            href={'/about'}
            className="font-medium transition-colors hover:text-foreground"
          >
            About Page
          </Link>
          .
        </p>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';

export { Footer };
