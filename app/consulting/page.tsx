import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section className="relative flex min-h-[620px] items-start overflow-hidden px-6 pb-16 pt-16 md:min-h-[700px] md:pb-20 md:pt-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}><div className="mx-auto w-full max-w-7xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">Hospitality Consulting</p><h1 className="mt-4 whitespace-normal text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight text-white lg:whitespace-nowrap">Practical Support for Better Operations</h1><p className="mx-auto mt-5 max-w-4xl whitespace-normal text-lg leading-8 text-white/90 lg:whitespace-nowrap">From concept development to performance improvement, AK&JK Hospitality helps businesses build stronger operations and guest experiences.</p></div></section>
      <section className="bg-[#F7F3EA] py-20"><div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">{["Operational audits", "Service standards", "Profitability support"].map((item) => <div key={item} className="rounded-lg border border-[#D6D3D1] bg-white p-7"><h2 className="text-xl font-bold text-[#1E1E1E]">{item}</h2><p className="mt-3 leading-7 text-[#1E1E1E]">Focused, practical guidance tailored to your hospitality operation and team.</p></div>)}</div></section>
      <CTA /><Footer />
    </main>
  );
}
