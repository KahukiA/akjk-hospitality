import { 
  Hotel, 
  Utensils, 
  GlassWater, 
  Coffee, 
  Palmtree, 
  Building2 
} from "lucide-react";

const industries = [
  {
    name: "Hotels",
    icon: Hotel,
    description: "Boutique, business, and luxury hotel operations.",
  },
  {
    name: "Restaurants",
    icon: Utensils,
    description: "Fine dining, casual dining, and fast-casual concepts.",
  },
  {
    name: "Bars & Lounges",
    icon: GlassWater,
    description: "Cocktail lounges, sports bars, and nightlife venues.",
  },
  {
    name: "Cafés",
    icon: Coffee,
    description: "Specialty coffee shops and bakery-cafés.",
  },
  {
    name: "Resorts",
    icon: Palmtree,
    description: "Eco-lodges, beach resorts, and safari camps.",
  },
  {
    name: "Hospitality Groups",
    icon: Building2,
    description: "Multi-unit operations and venue chains across East Africa.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#F8F5EE] py-20 md:py-24 border-y border-[#B8860B]/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B]">
            Who We Work With
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#111111] sm:text-4xl lg:text-5xl">
            Hospitality Sectors
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#555555]">
            We support hospitality businesses at every operational stage—from concept launch and pre-opening to active management and performance turnarounds.
          </p>
        </div>

        {/* Grid of Sectors */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group flex flex-col items-center rounded-2xl border border-[#B8860B]/20 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8860B]/50 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C89211]/10 text-[#C89211] transition-colors group-hover:bg-[#C89211] group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#B8860B] transition-colors">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}