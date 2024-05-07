import { cn } from '@/lib/utils';
import { CloudIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <footer ref={ref} {...rest} className={cn('py-12', className)}>
      <div className="container grid grid-cols-6 gap-8 border-t border-border pt-6">
        <div>
          <Link href={'/'} className="cursor-pointer">
            <div className="flex items-center justify-start gap-2">
              <CloudIcon className="h-6 w-6 text-primary" />
              <p className="text-base font-medium text-foreground">Flexify</p>
            </div>
          </Link>
        </div>
        <div>
          <h5 className="font-display text-sm font-semibold text-foreground">
            Navigation
          </h5>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground ">
            <li className="">
              <Link
                href={'/'}
                className="w-fit transition-colors hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href={'/'}
                className="w-fit transition-colors hover:text-primary"
              >
                About us
              </Link>
            </li>
            <li className="">
              <Link
                href={'/'}
                className="w-fit transition-colors hover:text-primary"
              >
                Features
              </Link>
            </li>
            <li className="">
              <Link
                href={'/'}
                className="w-fit transition-colors hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                href={'/'}
                className="w-fit transition-colors hover:text-primary"
              >
                Solutions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';

export { Footer };
