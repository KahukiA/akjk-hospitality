import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrestWatermarkSlot from "@/components/CrestWatermarkSlot";

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
    {
      title: "Hospitality Talent Search & Recruitment",
      description:
        "Finding and assessing hospitality professionals for key roles, with tailored hiring support from candidate search through selection.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="relative flex min-h-[620px] items-start overflow-hidden px-6 pb-16 pt-16 md:min-h-[700px] md:pb-20 md:pt-20">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.82), rgba(0,0,0,0.68), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">
              What We Do
            </p>
            <h1 className="mt-4 whitespace-normal text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight text-white lg:whitespace-nowrap">
              Our Services
            </h1>
            <p className="mx-auto mt-5 max-w-4xl whitespace-normal text-base leading-8 text-white/90 lg:whitespace-nowrap lg:text-lg">
              AK&JK Hospitality delivers professional consulting, operational support and hospitality training across East Africa, helping businesses achieve operational excellence and sustainable growth.
            </p>
          </div>
        </div>

        <div className="bg-[#F7F3EA] px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
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
            <CrestWatermarkSlot className="hidden min-h-[300px] lg:col-span-2 lg:flex" crestClassName="h-48 w-56" />
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
