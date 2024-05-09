import {
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { Index } from '@/registry';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { GithubLogo } from '../logos/github';

async function getFirstComponentId() {
  return Object.keys(Index).length > 0 ? `#comp-${Object.keys(Index)[0]}` : '#';
}

async function HeroSection() {
  const firstComponentId = await getFirstComponentId();

  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 flex min-h-svh flex-col items-center justify-center">
        <PageHeaderHeading>Flexify.</PageHeaderHeading>
        <PageHeaderDescription className="text-center">
          A collection of flexible and reusable components for building websites
          and web applications using Tailwind CSS, RadixUI and shadcn/ui.
        </PageHeaderDescription>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Link
            href={firstComponentId}
            className={cn(
              'ring-ring-accent inline-flex items-center justify-center rounded-full border border-border bg-lime-400 px-4 py-2 text-sm font-medium text-background ring-2 transition-colors hover:border-muted-foreground focus-visible:outline-none focus-visible:ring-primary'
            )}
          >
            All components{' '}
            <ArrowRightIcon className="ms-2.5 h-4 w-4 text-muted-foreground" />
          </Link>
          <Link
            href={siteConfig.repository.url}
            target="_blank"
            className={cn(
              'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            )}
          >
            Github{' '}
            <GithubLogo className="ms-2.5 h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  );
}
HeroSection.displayName = 'HeroSection';

export { HeroSection };
