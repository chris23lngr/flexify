import { cn } from '@/lib/utils';
import React from 'react';

const PageHeaderHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h1
      ref={ref}
      {...rest}
      className={cn(
        'max-w-screen-md font-display text-5xl font-medium leading-tight text-foreground',
        className
      )}
    />
  );
});
PageHeaderHeading.displayName = 'PageHeaderHeading';

const PageHeaderDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h2
      ref={ref}
      {...rest}
      className={cn(
        'mt-6 max-w-prose text-base leading-6 text-muted-foreground',
        className
      )}
    />
  );
});
PageHeaderDescription.displayName = 'PageHeaderDescription';

export { PageHeaderDescription, PageHeaderHeading };
