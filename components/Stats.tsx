const stats = [
  {
    number: "20+",
    label: "Years Experience",
    subtext: "Combined Industry Expertise",
  },
  {
    number: "1,000+",
    label: "Professionals Trained",
    subtext: "Frontline & Supervisory Teams",
  },
  {
    number: "50+",
    label: "Projects Completed",
    subtext: "Hotels, Restaurants & Lounges",
  },
  {
    number: "4",
    label: "East African Markets",
    subtext: "Kenya | Tanzania | Uganda | Rwanda",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] py-16 text-white border-y border-[#C89211]/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl border border-[#C89211]/20 bg-[#1A1A1A] p-8 text-center transition-all duration-300 hover:border-[#C89211]/60 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Highlight Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(200,146,17,0.08),_transparent_70%)] pointer-events-none" />

              <div className="text-4xl font-extrabold tracking-tight text-[#C89211] sm:text-5xl lg:text-6xl">
                {stat.number}
              </div>

              <h3 className="mt-3 text-lg font-bold text-[#F8F5EE]">
                {stat.label}
              </h3>

              <p className="mt-1 text-xs text-[#9CA3AF] leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}