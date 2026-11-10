import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Stats from "../components/Stats";
import Training from "../components/Training";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] text-[#111111]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Stats />
      <Training />
      <CTA />
      <Footer />
    </main>
  );
}