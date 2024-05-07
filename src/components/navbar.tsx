import { cn } from '@/lib/utils';
import { CloudIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { NavbarMenu } from './navbar-menu';

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <nav ref={ref} {...rest} className={cn('', className)}>
      <div className="container flex items-center justify-start gap-6 py-2">
        <Link href={'/'} className="cursor-pointer">
          <div className="flex items-center justify-start gap-2">
            <CloudIcon className="text-primary h-6 w-6" />
            <p className="text-base font-medium text-foreground">Flexify</p>
          </div>
        </Link>
        <NavbarMenu />
      </div>
    </nav>
  );
});
Navbar.displayName = 'Navbar';

export { Navbar };
