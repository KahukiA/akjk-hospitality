import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section className="relative overflow-hidden py-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}><div className="mx-auto max-w-7xl px-6"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">Resources</p><h1 className="mt-4 text-4xl font-extrabold text-white md:text-6xl">Downloads</h1><p className="mt-5 max-w-2xl leading-8 text-white/90">Useful hospitality resources will be made available here.</p></div></section>
      <section className="bg-[#F7F3EA] py-20"><div className="mx-auto max-w-3xl px-6 text-center"><h2 className="text-3xl font-bold text-[#1E1E1E]">Resources Coming Soon</h2><p className="mt-4 leading-8 text-[#1E1E1E]">Check back for practical guides and hospitality tools from AK&JK Hospitality.</p></div></section>
      <Footer />
    </main>
  );
}
