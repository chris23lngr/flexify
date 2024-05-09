'use client';

import { cn } from '@/lib/utils';
import { Index } from '@/registry';
import React from 'react';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

const ComponentPreview = React.forwardRef<
  HTMLDivElement,
  ComponentPreviewProps
>((props, ref) => {
  const { className, name, ...rest } = props;

  const component = React.useMemo(() => {
    if (!name || Index[name] == undefined) {
      return <p>Component not found</p>;
    }

    const Result = Index[name].demo;

    return <Result />;
  }, [name]);

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        'ring-ring-accent relative flex items-center justify-center rounded-lg border border-border bg-card p-8 ring-4',
        className
      )}
    >
      {component}
    </div>
  );
});
ComponentPreview.displayName = 'ComponentPreview';

export { ComponentPreview };
