import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Restaurant Consulting",
      description:
        "Restaurant concept development, menu engineering, operational systems, profitability improvement and guest experience optimization.",
    },
    {
      title: "Bar Consulting",
      description:
        "Cocktail program development, beverage costing, inventory management, menu design and bar profitability strategies.",
    },
    {
      title: "Hospitality Training",
      description:
        "Professional Food & Beverage Service, leadership development, guest service excellence and practical staff coaching.",
    },
    {
      title: "Hotel Consulting",
      description:
        "Operational audits, service standards, departmental training and management support.",
    },
    {
      title: "Pre-Opening Projects",
      description:
        "Complete planning and execution for restaurants, hotels, cafés, bars and hospitality venues from concept to launch.",
    },
    {
      title: "SOP Development",
      description:
        "Professional Standard Operating Procedures, manuals, policies, checklists and quality assurance systems.",
    },
    {
      title: "Cost Control",
      description:
        "Food costing, beverage costing, inventory systems, purchasing procedures and profit improvement strategies.",
    },
    {
      title: "WSET Study Support",
      description:
        "Guidance for Wine, Spirits, Beer and Sake studies for hospitality professionals.",
    },
    {
      title: "Hospitality Audits",
      description:
        "Comprehensive operational audits covering service, quality, profitability, compliance and guest experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section className="relative overflow-hidden px-8 py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">
              What We Do
            </p>
            <h1 className="mt-4 text-5xl font-extrabold text-white md:text-6xl">
              Our Services
            </h1>
          </div>

          <p className="mx-auto mb-16 max-w-4xl text-center text-xl leading-9 text-white/90">
            AK&JK Hospitality delivers professional consulting, operational
            support and hospitality training across East Africa, helping
            businesses achieve operational excellence and sustainable growth.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#D6D3D1] bg-white p-8 shadow-[0_18px_45px_rgba(30,30,30,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C89211] hover:shadow-[0_22px_50px_rgba(200,146,17,0.18)]"
              >
                <div className="mb-4 h-1.5 w-14 rounded-full bg-[#B8860B]" />
                <h2 className="mb-4 text-2xl font-bold text-[#1E1E1E]">
                  {service.title}
                </h2>

                <p className="leading-8 text-[#1E1E1E]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
