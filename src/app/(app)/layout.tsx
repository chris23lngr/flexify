import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';
import GridBg from '../../../public/assets/grid-1024.jpg';
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <GridStripes /> */}
      <main className="relative z-0">
        <Navbar />
        <Image
          loading="eager"
          src={GridBg}
          alt=""
          className="absolute left-1/2  -z-10 h-fit w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 md:w-4/5 lg:w-2/3"
        />
        {children}
        <Footer />
      </main>
    </>
  );
}
