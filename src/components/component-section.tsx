import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { Index } from '@/registry';
import { registryEntrySchema } from '@/registry/schema';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react';
import { ComponentPreview } from './component-preview';

/**-----------------------------------------------------------------
 * ComponentSection
 * -----------------------------------------------------------------*/
interface ComponentSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}
const ComponentSection = React.forwardRef<
  HTMLDivElement,
  ComponentSectionProps
>((props, ref) => {
  const { className, name, ...rest } = props;

  const entry = Index[name];

  // Check if component exists
  if (!entry) {
    return <p>Component not found.</p>;
  }

  // Parse component
  const result = registryEntrySchema.safeParse(entry);

  if (!result.success) {
    throw new Error('Error parsing component.');
  }

  const component = result.data;

  return (
    <section ref={ref} {...rest} className="relative z-10 py-72">
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-6">
        <div className="col-span-2">
          <ComponentSectionTitle
            id={`comp-${component.name}`}
            className="scroll-m-20"
          >
            {component.label}
          </ComponentSectionTitle>
          <ComponentSectionDescription>
            {component.description}
          </ComponentSectionDescription>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground">Built with</p>
              <div className="mt-4 flex flex-wrap items-center justify-start gap-3">
                {component.dependencies.map((dep, index) => (
                  <Link
                    target="_blank"
                    key={`dep-${index}`}
                    href={dep.url || '#'}
                    className="block shrink-0 rounded-full border border-border px-2 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {dep.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Ressources</p>
              <div className="mt-4 flex flex-col items-start justify-start gap-4">
                <Link
                  target="_blank"
                  href={`${siteConfig.repository.url}/blob/master/src/registry/ui/${name}.tsx`}
                  className="group inline-flex items-center justify-start text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Source Code{' '}
                  <ArrowUpRightIcon className="ms-1.5 h-4 w-4 text-foreground transition-colors group-hover:text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ComponentPreview
          className="lg:col-span-3 lg:col-start-4"
          name={name}
        />
      </div>
    </section>
  );
});
ComponentSection.displayName = 'ComponentSection';

/**-----------------------------------------------------------------
 * ComponentSectionTitle
 * -----------------------------------------------------------------*/
const ComponentSectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h3
      ref={ref}
      {...rest}
      className={cn(
        'font-display text-xl font-semibold text-foreground',
        className
      )}
    />
  );
});
ComponentSectionTitle.displayName = 'ComponentSectionTitle';

/**-----------------------------------------------------------------
 * ComponentSectionDescription
 * -----------------------------------------------------------------*/
const ComponentSectionDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h4
      ref={ref}
      {...rest}
      className={cn(
        'mt-2 max-w-prose text-sm text-muted-foreground',
        className
      )}
    />
  );
});
ComponentSectionDescription.displayName = 'ComponentSectionDescription';

/**-----------------------------------------------------------------
 * Export
 * -----------------------------------------------------------------*/
export { ComponentSection };
