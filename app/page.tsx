import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Editorial } from "@/components/editorial";
import { Essay } from "@/components/essay";
import { Quote } from "@/components/quote";
import { Founder } from "@/components/founder";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Editorial />
        <Essay />
        <Quote />
        <Founder />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
