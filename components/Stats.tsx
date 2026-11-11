const stats = [
  {
    number: "20+",
    label: "Years Experience",
  },
  {
    number: "1000+",
    label: "Training Programs",
  },
  {
    number: "50+",
    label: "Business Projects",
  },
  {
    number: "4",
    label: "East African Countries",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#070707] py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl font-black text-[#D4A72C]">
              {stat.number}
            </div>

            <p className="mt-2 text-xl text-[#F5F1EA]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
