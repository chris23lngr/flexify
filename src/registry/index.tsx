import { Registry } from '@/registry/schema';
import React from 'react';

export const Index: Registry = {
  'animated-tabs': {
    name: 'animated-tabs',
    label: 'Animated Tabs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo inventore non dignissimos repudiandae vitae animi molestiae, nisi molestias totam porro. Dolores tenetur quasi tempore numquam reprehenderit illum doloremque hic!',
    dependencies: [
      {
        label: '@radix-ui/react-tabs',
        url: 'https://www.radix-ui.com/primitives/docs/components/tabs',
      },
      {
        label: 'framer-motion',
        url: 'https://www.framer.com/motion/',
      },
    ],
    demo: React.lazy(() => import('@/registry/demo/animated-tabs')),
  },
};
