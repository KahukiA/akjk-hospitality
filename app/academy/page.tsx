import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const programs = [
  "Food & Beverage Operations",
  "Restaurant and Bar Service",
  "Supervisory & Management Skills",
  "SOP Implementation",
  "Cost Control & Stock Management",
  "Guest Experience Standards",
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">AK&JK Hospitality Academy</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-6xl">Train Better. Perform Better.</h1>
          <p className="mt-5 max-w-2xl leading-8 text-white/90">Practical training that helps hospitality teams improve service, operations and day-to-day performance.</p>
        </div>
      </section>
      <section className="bg-[#F7F3EA] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#1E1E1E]">Training Areas</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => <div key={program} className="rounded-lg border border-[#D6D3D1] bg-white p-6 font-semibold text-[#1E1E1E]">{program}</div>)}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
