'use client';

import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from '@/registry/ui/animated-tabs';

export default function AnimatedTabsDemo() {
  return (
    <Tabs defaultValue="dashboard" orientation="horizontal">
      <TabsList>
        <TabsIndicator />
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="insights">Insights</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
