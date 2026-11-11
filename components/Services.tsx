// @/components/Services.tsx
import Link from "next/link";
import CrestWatermarkSlot from "./CrestWatermarkSlot";
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  FileText,
  Users,
  Wine,
  BarChart3,
  Sparkles,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Hospitality Operational Consulting",
    description:
      "Comprehensive audits, workflow optimization, and operational restructuring for hotels, resorts, and restaurants.",
    icon: Briefcase,
  },
  {
    title: "Staff Training & Development",
    description:
      "Practical on-site and classroom training programs designed to enhance frontline service and team performance.",
    icon: GraduationCap,
  },
  {
    title: "Pre-Opening & Launch Support",
    description:
      "End-to-end guidance for new venues—from concept design and staffing to operational readiness and launch execution.",
    icon: Sparkles,
  },
  {
    title: "Standard Operating Procedures (SOPs)",
    description:
      "Custom SOP creation, manuals, and service checklists tailored to ensure consistent luxury service delivery.",
    icon: FileText,
  },
  {
    title: "F&B Concept & Menu Engineering",
    description:
      "Menu design, recipe costing, yield management, and beverage program development for maximum profitability.",
    icon: Wine,
  },
  {
    title: "Leadership & Supervisory Coaching",
    description:
      "Empowering department heads, floor managers, and supervisors with essential leadership and operational skills.",
    icon: Users,
  },
  {
    title: "Cost Control & Stock Management",
    description:
      "Implementing inventory controls, wastage tracking, and financial monitoring to protect operating margins.",
    icon: BarChart3,
  },
  {
    title: "Quality Audits & Mystery Shopping",
    description:
      "Objective evaluations of service standards, guest experiences, and operational compliance with actionable insights.",
    icon: ClipboardCheck,
  },
  {
    title: "Performance & Revenue Turnarounds",
    description:
      "Strategic interventions for underperforming hospitality businesses to boost revenue and operational efficiency.",
    icon: TrendingUp,
  },
  {
    title: "Hospitality Talent Search & Recruitment",
    description:
      "Finding and assessing hospitality professionals for key roles, with tailored hiring support from candidate search through selection.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8F5EE] py-20 text-[#111111] md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89211]">
            Our Core Offerings
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#111111] sm:text-4xl lg:text-5xl">
            Tailored Hospitality <span className="text-[#C89211]">Solutions</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#555555] sm:text-lg">
            We provide specialized consulting, practical training, and management support designed to elevate operational efficiency and guest satisfaction.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-[#C89211]/20 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C89211] hover:shadow-xl"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C89211]/10 text-[#C89211] transition-colors group-hover:bg-[#C89211] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#111111] transition-colors group-hover:text-[#C89211]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#F8F5EE] pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C89211] transition-all group-hover:gap-3"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
          <CrestWatermarkSlot className="hidden min-h-[360px] lg:col-span-2 lg:flex" crestClassName="h-52 w-60" />
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl border border-[#C89211]/30 bg-[#111111] p-8 text-center text-white shadow-xl md:p-12">
          <h3 className="text-2xl font-extrabold sm:text-3xl">
            Need a Customized Hospitality Advisory Plan?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#D1D5DB] sm:text-base">
            Whether you are launching a new hotel or looking to revitalize existing F&B operations across East Africa, our experts are ready to assist.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-[#C89211] px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[#A9790E]"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
