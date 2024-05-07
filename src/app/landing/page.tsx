import { ComponentSection } from '@/components/component-section';
import { Index } from '@/registry';

export default async function LandingPage() {
  return (
    <>
      <main className="relative z-10 py-24">
        {Object.keys(Index).map((key, index) => (
          <ComponentSection key={`comp-sect-${key}-${index}`} name={key} />
        ))}
      </main>
    </>
  );
}
