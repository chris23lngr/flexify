import {
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Index } from '@/registry';
import { ArrowDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

async function getFirstComponentId() {
  return Object.keys(Index).length > 0 ? `#comp-${Object.keys(Index)[0]}` : '#';
}

async function HeroSection() {
  const firstComponentId = await getFirstComponentId();

  return (
    <section className="relative z-10">
      <div className="absolute bottom-0 left-0 z-[5] h-full w-full border-b border-dashed border-border bg-gradient-to-b from-background/0 to-background"></div>
      <div className="container relative z-10 flex min-h-svh flex-col items-center justify-center">
        <PageHeaderHeading>Flexify.</PageHeaderHeading>
        <PageHeaderDescription className="text-center">
          A collection of flexible and reusable components for building websites
          and web applications using Tailwind CSS, RadixUI and shadcn/ui.
        </PageHeaderDescription>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Link
            href={firstComponentId}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            All components <ArrowDownIcon className="ms-2 h-4 w-4" />
          </Link>
          <Button variant={'outline'}>Github</Button>
        </div>
      </div>
    </section>
  );
}
HeroSection.displayName = 'HeroSection';

export { HeroSection };
