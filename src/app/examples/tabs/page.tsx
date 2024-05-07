'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import React from 'react';

export default function Page() {
  const activeRef = React.createRef<HTMLButtonElement>();
  const none = React.createRef<HTMLButtonElement>();
  const [selected, setSelected] = React.useState('1');
  const [offset, setOffset] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const activeElement = activeRef.current;
    if (!activeElement) return;
    setOffset(activeElement.offsetLeft);
    setWidth(activeElement.clientWidth);
  }, [selected, activeRef]);

  return (
    <main>
      <section className="py-96">
        <div className="container">
          <TabsPrimitive.Root value={selected} onValueChange={setSelected}>
            <TabsPrimitive.List className="relative flex w-fit items-center justify-start gap-0 rounded-md bg-zinc-100 p-0.5">
              <div
                className="absolute h-[calc(100%-4px)] transform rounded bg-white transition-transform ease-in-out will-change-transform"
                style={{
                  width: `${width}px`,
                  transform: `translateX(${offset - 2}px)`,
                }}
              ></div>

              <TabsPrimitive.Trigger
                value="Code"
                ref={selected === 'Code' ? activeRef : none}
                className="relative z-10 rounded px-3 py-1.5 text-sm font-medium"
              >
                Code
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="Design"
                ref={selected === 'Design' ? activeRef : none}
                className="relative z-10 rounded px-3 py-1.5 text-sm font-medium"
              >
                Design
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="Help"
                ref={selected === 'Help' ? activeRef : none}
                className="relative z-10 rounded px-3 py-1.5 text-sm font-medium"
              >
                This Help Page
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="Mode"
                ref={selected === 'Mode' ? activeRef : none}
                className="relative z-10 rounded px-3 py-1.5 text-sm font-medium"
              >
                Mode Variant
              </TabsPrimitive.Trigger>
            </TabsPrimitive.List>
          </TabsPrimitive.Root>
        </div>
      </section>
    </main>
  );
}
