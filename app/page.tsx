import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Details } from "@/components/details";
import { Features } from "@/components/features";
import { Fabric } from "@/components/fabric";
import { Comparison } from "@/components/comparison";
import { Quote } from "@/components/quote";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Details />
        <Features />
        <Fabric />
        <Comparison />
        <Quote />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
