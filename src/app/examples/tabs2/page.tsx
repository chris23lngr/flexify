'use client';

import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from '@/app/_components/tabs';

export default function Page() {
  return (
    <main>
      <section className="py-96">
        <div className="container">
          <Tabs defaultValue="Code" orientation="vertical">
            <TabsList className="flex flex-col items-center justify-start">
              <TabsIndicator />
              <TabsTrigger value="Code" className="w-full justify-start">
                Code
              </TabsTrigger>
              <TabsTrigger value="Application" className="w-full justify-start">
                Application
              </TabsTrigger>
              <TabsTrigger value="Long" className="w-full justify-start">
                This is a long tab name
              </TabsTrigger>
              <TabsTrigger value="Long2" className="w-full justify-start">
                This is a long tab name
              </TabsTrigger>
              <TabsTrigger value="Long3" className="w-full justify-start">
                This is a long tab name
              </TabsTrigger>
              <TabsTrigger value="Preview" className="w-full justify-start">
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="container mt-12">
          <Tabs defaultValue="Code" orientation="horizontal">
            <TabsList>
              <TabsIndicator />
              <TabsTrigger value="Code">Code</TabsTrigger>
              <TabsTrigger value="Application">Application</TabsTrigger>
              <TabsTrigger value="Long">This is a long tab name</TabsTrigger>
              <TabsTrigger value="Long2">This is a long tab name</TabsTrigger>
              <TabsTrigger value="Long3">This is a long tab name</TabsTrigger>
              <TabsTrigger value="Preview">Preview</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
