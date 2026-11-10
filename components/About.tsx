// @/components/About.tsx
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, Users } from "lucide-react";

const founders = [
  {
    name: "Austin Kahuki",
    role: "Managing Director & F&B Specialist",
    bio: "Seasoned hospitality leader with extensive expertise in food & beverage operations, mixology, wine education, and venue turnarounds across East Africa.",
  },
  {
    name: "Joseph Kiarie",
    role: "Managing Director & Operations Strategist",
    bio: "Operational strategist specializing in hospitality financial controls, SOP development, service standardization, and organizational leadership.",
  },
];

const coreValues = [
  "Operational Excellence & SOP Rigor",
  "Tailored On-Site & Classroom Training",
  "Financial Controls & Yield Management",
  "Regional Footprint across East Africa",
];

export default function About() {
  return (
    <section className="bg-[#111111] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
        
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89211]">
            Hospitality Consultancy & Academy
          </p>
          
          <h2 className="mt-3 text-3xl font-extrabold text-[#F8F5EE] sm:text-4xl lg:text-5xl">
            Developing People. Elevating Hospitality. <br className="hidden sm:inline" />
            <span className="text-[#C89211]">Delivering Excellence.</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-[#D4A72C] uppercase">
            <span>Knowledge</span>
            <span>•</span>
            <span>Service</span>
            <span>•</span>
            <span>Excellence</span>
          </div>
        </div>

        {/* Content & Crest Layout */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          
          {/* Left Side: Brand Story & Values */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-[#F8F5EE] sm:text-3xl">
              East Africa's Premier Hospitality Advisory
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              AK&JK Hospitality Consultancy & Academy provides strategic advisory, operational management, and practical training to hotels, luxury resorts, restaurants, bars, and hospitality groups across Kenya, Tanzania, Uganda, and Rwanda.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#9CA3AF]">
              We bridge the gap between concept design and daily operational execution—optimizing service workflows, training frontline staff, and establishing cost control mechanisms that drive measurable profitability.
            </p>

            {/* Core Pillars List */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl border border-[#C89211]/20 bg-black/40 p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C89211]" />
                  <span className="text-sm font-semibold text-[#F8F5EE]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Crest & Slogan Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#C89211]/40 bg-gradient-to-b from-[#1E1E1E] to-black p-8 text-center shadow-2xl">
              
              {/* Crest Symbol Representation */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#C89211] bg-[#111111] text-[#C89211] shadow-inner">
                <Award className="h-12 w-12" />
              </div>

              <h4 className="mt-6 text-2xl font-black tracking-tight text-[#F8F5EE]">
                AK&JK
              </h4>
              
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C89211]">
                Hospitality Consultancy & Academy
              </p>

              <div className="my-6 border-t border-[#C89211]/30" />

              <p className="italic text-base text-[#E5E7EB]">
                "Building Better Teams. Stronger Operations. Memorable Guest Experiences."
              </p>

              <div className="mt-6 flex justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C89211]">
                <span>Consulting</span> | <span>Training</span> | <span>Resources</span> | <span>Excellence</span>
              </div>
            </div>
          </div>

        </div>

        {/* Founders / Leadership Section */}
        <div className="mt-20 border-t border-[#C89211]/20 pt-16">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C89211]">
              Leadership & Expertise
            </p>
            <h3 className="mt-2 text-3xl font-extrabold text-[#F8F5EE]">
              Meet Our Managing Directors
            </h3>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl border border-[#C89211]/30 bg-[#1A1A1A] p-8 shadow-lg transition hover:border-[#C89211]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C89211]/20 text-[#C89211]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#F8F5EE]">{founder.name}</h4>
                    <p className="text-xs font-semibold text-[#C89211]">{founder.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#D1D5DB]">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}