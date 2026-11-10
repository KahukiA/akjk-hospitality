// @/components/Academy.tsx
import Link from "next/link";
import {
  GraduationCap,
  Wine,
  Users,
  Award,
  CheckCircle2,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    title: "Frontline Service & Waiter Excellence",
    description:
      "Comprehensive modules covering guest engagement, upselling techniques, order flow, table setting etiquette, and complaint resolution.",
    icon: Users,
    duration: "2–4 Weeks",
  },
  {
    title: "Mixology & Beverage Program Development",
    description:
      "Craft cocktail creation, spirits knowledge, speed bar techniques, cost controls, and bar hygiene management.",
    icon: Wine,
    duration: "2 Weeks",
  },
  {
    title: "Wine Knowledge & Sommelier Essentials",
    description:
      "Understanding varietals, wine-and-food pairing, cellar temperature management, opening rituals, and pouring etiquette.",
    icon: GraduationCap,
    duration: "1–2 Weeks",
  },
  {
    title: "Supervisory & Floor Leadership Skills",
    description:
      "Empowering floor managers and team leads with roster management, briefing techniques, inventory checks, and team motivation.",
    icon: Award,
    duration: "3 Weeks",
  },
];

const highlights = [
  "Practical, hands-on training directly on your venue floor",
  "Customized training manuals tailored to your brand SOPs",
  "Certification upon successful completion of assessments",
  "Post-training performance tracking and follow-up audits",
];

export default function Academy() {
  return (
    <section className="bg-[#111111] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89211]">
            AKJK Hospitality Academy
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#F8F5EE] sm:text-4xl lg:text-5xl">
            Empowering Teams Through{" "}
            <span className="text-[#C89211]">Practical Training</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
            Our training academy builds high-performing hospitality teams equipped
            with the confidence, knowledge, and refined skills needed to deliver
            exceptional guest experiences consistently.
          </p>
        </div>

        {/* Feature Banner Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Academy Overview Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#C89211]/40 bg-gradient-to-b from-[#1E1E1E] to-black p-8 shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C89211]/20 text-[#C89211]">
                <BookOpen className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#F8F5EE]">
                On-Site & Classroom Certification
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
                We combine structured theory with immediate practical floor execution.
                Modules are designed specifically for East Africa's evolving luxury
                and boutique hospitality landscape.
              </p>

              <div className="my-6 border-t border-[#C89211]/30" />

              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C89211]" />
                    <span className="text-sm font-medium text-[#E5E7EB]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C89211] px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#A9790E]"
                >
                  Enroll Your Team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Programs Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="group flex flex-col justify-between rounded-2xl border border-[#C89211]/30 bg-[#1A1A1A] p-6 shadow-md transition hover:border-[#C89211] hover:bg-[#222222]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C89211]/10 text-[#C89211] transition group-hover:bg-[#C89211] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-[#C89211]/40 bg-[#111111] px-3 py-1 text-xs font-semibold text-[#C89211]">
                        {program.duration}
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-bold text-[#F8F5EE] group-hover:text-[#C89211]">
                      {program.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-[#9CA3AF]">
                      {program.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#333333] pt-3">
                    <Link
                      href="/academy"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C89211] hover:underline"
                    >
                      Module Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}