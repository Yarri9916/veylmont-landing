import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Heritage } from "@/components/heritage";
import { Features } from "@/components/features";
import { Details } from "@/components/details";
import { Fabric } from "@/components/fabric";
import { Timeline } from "@/components/timeline";
import { Gallery } from "@/components/gallery";
import { Philosophy } from "@/components/philosophy";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Features />
        <Details />
        <Fabric />
        <Timeline />
        <Gallery />
        <Philosophy />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
