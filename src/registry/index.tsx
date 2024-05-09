import { Registry } from '@/registry/schema';
import React from 'react';

export const Index: Registry = {
  'animated-tabs': {
    name: 'animated-tabs',
    label: 'Animated Tabs',
    description:
      'A tab component that animates the indicator when switching tabs.',
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
  'avatar-group': {
    name: 'avatar-group',
    label: 'Avatar Group',
    description: 'A group of avatars that expand when hovered.',
    dependencies: [
      {
        label: '@radix-ui/react-avatar',
        url: 'https://www.radix-ui.com/primitives/docs/components/avatar',
      },
      {
        label: 'framer-motion',
        url: 'https://www.framer.com/motion/',
      },
    ],
    demo: React.lazy(() => import('@/registry/demo/avatar-group')),
  },
};
