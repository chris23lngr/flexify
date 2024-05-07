import { Card } from '@/components/ui/card';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { BoltIcon, FunnelIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function DashboardExamplePage() {
  return (
    <main>
      <section className="py-96">
        <div className="container">
          <Card className="w-1/2 overflow-hidden">
            <div className="p-6 pb-0 pr-0">
              <div className="h-36 w-96 bg-red-400 p-7">
                <p>Hello world</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="py-96">
        <div className="container">
          <div className="w-[48rem] scale-75 transform overflow-hidden rounded-lg border border-border">
            <div className="border-b border-border bg-muted px-6 py-4">
              <p className="text-lg font-medium text-foreground">
                Create a new Automation
              </p>
            </div>

            <div className="space-y-6 p-6">
              <div className="relative flex items-center justify-start gap-4 rounded-md border border-border p-3">
                <div className="absolute -bottom-6 left-4 h-6 w-px bg-border"></div>
                <div className="rounded-md border border-border bg-muted p-2">
                  <BoltIcon className="text-primary h-6 w-6" />
                </div>
                <div className="">
                  <p className="text-sm uppercase text-muted-foreground">
                    Trigger
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <p className="font-medium text-foreground">
                      When a new user signs up
                    </p>
                    <ArrowRightIcon className="h-4 w-4 text-foreground" />
                    <p className="block rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      Add to Mailchimp
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-start gap-4 rounded-md border border-border p-3">
                <div className="absolute -bottom-6 left-4 h-6 w-px bg-border"></div>
                <div className="rounded-md border border-border bg-muted p-2">
                  <FunnelIcon className="text-primary h-6 w-6" />
                </div>
                <div className="">
                  <p className="text-sm uppercase text-muted-foreground">
                    Filter
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <p className="font-medium text-foreground">
                      Only for users in the US
                    </p>
                    <ArrowRightIcon className="h-4 w-4 text-foreground" />
                    <p className="block rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      Create a new task in Asana
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary ml-px h-fit w-fit rounded-full p-2">
                <PlusIcon className="h-4 w-4 text-background" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
