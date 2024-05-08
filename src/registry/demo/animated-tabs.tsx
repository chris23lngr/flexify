'use client';

import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from '@/app/_components/tabs';

export default function AnimatedTabsDemo() {
  return (
    <Tabs defaultValue="dashboard">
      <TabsList>
        <TabsIndicator />
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="insights">Insights</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
