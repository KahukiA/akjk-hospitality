import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-[#F5F3EE]">
        <Hero />

        <About />

        <Services />

        <Industries />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
