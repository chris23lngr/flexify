export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative z-0">
        <div className="container absolute left-1/2 top-0 z-0 grid h-full -translate-x-1/2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
          <div className="h-full w-full border-l border-dashed border-border" />
          <div className="hidden h-full w-full border-l border-dashed border-border sm:block" />
          <div className="hidden h-full w-full border-l border-dashed border-border sm:block" />
          <div className="hidden h-full w-full border-l border-dashed border-border lg:block" />
          <div className="hidden h-full w-full border-l border-dashed border-border lg:block" />
          <div className="h-full w-full border-x border-dashed border-border" />
        </div>
        {children}
      </main>
    </>
  );
}
