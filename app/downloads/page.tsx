import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section className="relative flex min-h-[620px] items-start overflow-hidden px-6 pb-16 pt-16 md:min-h-[700px] md:pb-20 md:pt-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}><div className="mx-auto w-full max-w-7xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">Resources</p><h1 className="mt-4 whitespace-normal text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight text-white lg:whitespace-nowrap">Downloads</h1><p className="mx-auto mt-5 max-w-4xl whitespace-normal text-lg leading-8 text-white/90 lg:whitespace-nowrap">Useful hospitality resources will be made available here.</p></div></section>
      <section className="bg-[#F7F3EA] py-20"><div className="mx-auto max-w-3xl px-6 text-center"><h2 className="text-3xl font-bold text-[#1E1E1E]">Resources Coming Soon</h2><p className="mt-4 leading-8 text-[#1E1E1E]">Check back for practical guides and hospitality tools from AK&JK Hospitality.</p></div></section>
      <Footer />
    </main>
  );
}
