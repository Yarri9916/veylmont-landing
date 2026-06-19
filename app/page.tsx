import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Editorial } from "@/components/editorial";
import { Quote } from "@/components/quote";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Editorial />
        <Quote />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
