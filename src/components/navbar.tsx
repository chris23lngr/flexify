import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { GithubLogo } from './logos/github';

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <nav
      ref={ref}
      {...rest}
      className={cn(
        'fixed left-0 top-0 z-50 w-full bg-background/20 backdrop-blur-sm',
        className
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center justify-start gap-2">
          <CubeTransparentIcon className="h-6 w-6 text-lime-400" />
          <p className="font-display text-lg font-medium text-foreground">
            Flexify.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href={'/'}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <div className=" h-5 w-px bg-border"></div>
          <Link href={siteConfig.repository.url} className="">
            <GithubLogo className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </nav>
  );
});
Navbar.displayName = 'Navbar';

export { Navbar };
