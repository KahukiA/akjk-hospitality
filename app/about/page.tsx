import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = [
  {
    title: "Operations",
    description:
      "Improving daily systems, service standards and operational performance across hospitality businesses.",
  },
  {
    title: "People",
    description:
      "Developing hospitality teams through practical training, coaching and professional supervision.",
  },
  {
    title: "Cost Control",
    description:
      "Helping businesses manage purchasing, stock, waste and profitability with clearer operational discipline.",
  },
  {
    title: "Guest Experience",
    description:
      "Building consistent service experiences that strengthen guest satisfaction and repeat business.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />

      <section
        className="relative flex min-h-[620px] items-start overflow-hidden px-6 pb-16 pt-16 md:min-h-[700px] md:pb-20 md:pt-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">
            About AK&JK Hospitality
          </p>
          <h1 className="mt-4 whitespace-normal text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight text-white lg:whitespace-nowrap">
            Hospitality Experience That Delivers Results
          </h1>
          <p className="mx-auto mt-5 max-w-4xl whitespace-normal text-lg leading-8 text-white/90 lg:whitespace-nowrap">
            Practical hospitality consulting, management and training solutions
            that help businesses improve performance, service and profitability.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F3EA] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B8860B]">
                Our Story
              </p>
              <p className="mt-6 text-lg leading-8 text-[#1E1E1E]">
                AK&JK Hospitality is a hospitality consulting, management and
                training company focused on helping hotels, restaurants, bars,
                lounges and cafés improve their operations and performance.
              </p>
              <p className="mt-6 text-lg leading-8 text-[#1E1E1E]">
                We provide practical solutions that help businesses improve
                service standards, develop their teams, control costs and deliver
                better guest experiences. Our approach is hands-on, measurable and
                designed for real-world hospitality environments.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8 shadow-[0_18px_45px_rgba(30,30,30,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
                Our Philosophy
              </p>
              <ul className="mt-6 space-y-4 text-[#1E1E1E]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#B8860B]" />
                  <span><strong>Strategic Solutions:</strong> Practical advice that improves profitability, controls costs, and strengthens daily operations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#B8860B]" />
                  <span><strong>Operational Excellence:</strong> Consistent, efficient service built through clear standards, capable teams, and thoughtful leadership.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#B8860B]" />
                  <span><strong>Legacy:</strong> Developing hospitality experts and raising the standard of hospitality across East Africa.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#1E1E1E]">What We Focus On</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#D6D3D1] bg-white p-7 shadow-[0_10px_30px_rgba(30,30,30,0.04)]"
                >
                  <div className="mb-4 h-1.5 w-14 rounded-full bg-[#B8860B]" />
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#1E1E1E]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-[#C89211]/50 bg-[#1E1E1E] p-8 text-white shadow-[0_18px_45px_rgba(30,30,30,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">
              Regional Focus
            </p>
            <h2 className="mt-3 text-2xl font-bold">Kenya | Tanzania | Uganda | Rwanda</h2>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
