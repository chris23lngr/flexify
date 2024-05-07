import { cn } from '@/lib/utils';
import React from 'react';

const SectionHeaderPill = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div className="h-fit w-fit rounded-full bg-gradient-to-b from-primary via-primary/20 to-background p-px">
      <span
        ref={ref}
        {...rest}
        className={cn(
          'block h-fit w-fit rounded-full bg-primary-foreground px-3 py-1 text-sm font-medium text-primary',
          className
        )}
      />
    </div>
  );
});
SectionHeaderPill.displayName = 'SectionHeaderPill';

const SectionHeaderHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h3
      ref={ref}
      {...rest}
      className={cn(
        'max-w-screen-md font-display text-3xl font-medium leading-tight text-foreground',
        className
      )}
    />
  );
});
SectionHeaderHeading.displayName = 'SectionHeaderHeading';

const SectionHeaderDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h4
      ref={ref}
      {...rest}
      className={cn(
        'mt-4 max-w-prose text-base leading-6 text-muted-foreground',
        className
      )}
    />
  );
});
SectionHeaderDescription.displayName = 'SectionHeaderDescription';

export { SectionHeaderDescription, SectionHeaderHeading, SectionHeaderPill };
