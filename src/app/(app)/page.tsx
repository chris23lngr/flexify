import { ComponentSection } from '@/components/component-section';
import { HeroSection } from '@/components/sections/hero-section';
import { Index } from '@/registry';

export default async function LandingPage() {
  return (
    <>
      <HeroSection />

      {Object.keys(Index).map((key, index) => (
        <ComponentSection key={`comp-sect-${key}-${index}`} name={key} />
      ))}
    </>
  );
}
