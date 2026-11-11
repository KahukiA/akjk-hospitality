// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import BrandCrest from "@/components/BrandCrest";
import EastAfricaMap from "@/components/EastAfricaMap";
import RegionalImageCarousel from "@/components/RegionalImageCarousel";
import CrestWatermarkSlot from "@/components/CrestWatermarkSlot";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  FileText,
  Wine,
  Users,
  BarChart3,
  ClipboardCheck,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  Send,
  Star,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

// ==========================================
// 1. CUSTOM AK&JK GOLD CREST LOGO (SVG Component)
// ==========================================
function AKJKLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandCrest className="h-12 w-14 shrink-0 drop-shadow-[0_0_10px_rgba(212,167,44,0.18)]" />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-wide text-[#F8F5EE]">
          AK<span className="text-[#D4A72C]">&</span>JK
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A72C]">
          Hospitality Consultancy
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 2. IMAGE SLIDER DATA & CAROUSEL COMPONENT
// ==========================================
type HeroSlide = {
  url: string;
  title: string;
  subtitle: string;
  tag: string;
};

const homeHeroSlides: HeroSlide[] = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    title: "Hospitality Consulting, Management & Training",
    subtitle: "Practical solutions that elevate guest experiences, optimize costs, and build world-class teams across East Africa.",
    tag: "FINE DINING & LOUNGE EXCELLENCE",
  },
  {
    url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2070&auto=format&fit=crop",
    title: "Craft Mixology & Fire Cocktails",
    subtitle: "Creating unforgettable bar lounge atmospheres, signature cocktail menus, and theatrical flaming pour techniques.",
    tag: "BAR, LOUNGE & ENTERTAINMENT",
  },
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop",
    title: "Live Culinary Arts & Kitchen Flambé",
    subtitle: "Elevating culinary standards with precision kitchen management, live show cooking, and recipe engineering.",
    tag: "GASTRONOMY & LIVE COOKING",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
    title: "Romantic Oceanfront Dining Setups",
    subtitle: "Designing bespoke luxury resort dining, beach dinner settings, and private romantic guest experiences.",
    tag: "LUXURY RESORTS & BEACH DINING",
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
    title: "Multicultural & Empowered Teams",
    subtitle: "Developing frontline staff and supervisors through rigorous hands-on service training programs.",
    tag: "PEOPLE DEVELOPMENT & ACADEMY",
  },
];

function RollingCarousel({
  slides,
  textPlacement = "center",
}: {
  slides: HeroSlide[];
  textPlacement?: "center" | "top" | "bottom";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentIndex];

  return (
    <div className="relative h-[680px] w-full overflow-hidden bg-[#0A0A0A] lg:h-[780px]">
      <div key={activeSlide.url} className="absolute inset-0">
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${activeSlide.url})` }}
          />

          {/* Luxury Dark Gradient Overlays for Supreme Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/60" />

          {/* Content Overlay */}
          <div className={`absolute inset-0 z-10 flex ${textPlacement === "bottom" ? "items-end" : textPlacement === "top" ? "items-start" : "items-center"}`}>
            <div className="mx-auto w-full max-w-[1600px] px-6 text-center lg:px-14">
              <div className={`mx-auto w-full max-w-[1500px] ${textPlacement === "bottom" ? "pb-40 sm:pb-32 lg:pb-32" : textPlacement === "top" ? "pt-28 sm:pt-32 lg:pt-36" : ""}`}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A72C]/40 bg-black/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#D4A72C] backdrop-blur-md">
                  <Flame className="h-3.5 w-3.5 text-[#D4A72C]" />
                  {activeSlide.tag}
                </span>

                <h1 className="mx-auto mt-6 max-w-[1450px] whitespace-normal text-[clamp(2rem,3.2vw,3.5rem)] font-black leading-tight text-[#F8F5EE]">
                  {activeSlide.title}
                </h1>

                <p className="mx-auto mt-6 max-w-4xl whitespace-normal text-base font-normal leading-relaxed text-[#E5E7EB] lg:text-lg">
                  {activeSlide.subtitle}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href="#contact"
                    className="rounded-xl bg-[#C89211] px-8 py-4 text-base font-bold text-black shadow-lg transition hover:bg-[#A9790E] hover:scale-105"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#services"
                    className="rounded-xl border border-[#F8F5EE]/60 bg-black/40 backdrop-blur-md px-8 py-4 text-base font-bold text-[#F8F5EE] transition hover:bg-white/10"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#D4A72C]/40 bg-black/60 p-3 text-[#F8F5EE] hover:bg-[#D4A72C] hover:text-black transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#D4A72C]/40 bg-black/60 p-3 text-[#F8F5EE] hover:bg-[#D4A72C] hover:text-black transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Show slide ${idx + 1}`}
            aria-current={idx === currentIndex}
            className={`h-2.5 transition-all duration-300 rounded-full ${
              idx === currentIndex ? "w-10 bg-[#D4A72C]" : "w-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN COMPONENT WITH PAGE ROUTING
// ==========================================
export default function AKJKWebsite() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "about" | "services" | "academy" | "contact"
  >("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "academy", label: "Academy" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] antialiased text-[#F8F5EE]">
      {/* Header and navigation */}
      <header className="sticky top-0 z-50 border-b border-[#D4A72C]/20 bg-[#0B0B0B]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-14">
          <button onClick={() => setCurrentPage("home")} className="text-left">
            <AKJKLogo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as any)}
                className={`text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-[#D4A72C] font-bold border-b-2 border-[#D4A72C] pb-1"
                    : "text-[#F8F5EE] hover:text-[#D4A72C]"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage("contact")}
              className="rounded-xl bg-[#C89211] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#A9790E]"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#F8F5EE] md:hidden"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#D4A72C]/20 bg-[#0B0B0B] px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as any);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-lg font-semibold text-[#F8F5EE] hover:text-[#D4A72C]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Page content routing */}
      {currentPage === "home" && (
        <main>
          {/* Hero Rolling Carousel */}
          <RollingCarousel slides={homeHeroSlides} textPlacement="top" />

          {/* Core Brand Philosophy */}
          <section className="border-y border-[#D4A72C]/30 bg-gradient-to-r from-black via-[#161616] to-black py-12">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.4em] text-[#D4A72C]">
                  Core Brand Philosophy
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#F8F5EE] sm:text-4xl">
                  The Principles Behind Our Work
                </h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Strategic Solutions",
                    description: "Practical advice that improves profitability, controls costs, and strengthens daily operations.",
                  },
                  {
                    title: "Operational Excellence",
                    description: "Consistent, efficient service built through clear standards, capable teams, and thoughtful leadership.",
                  },
                  {
                    title: "Legacy",
                    description: "Developing hospitality experts and raising the standard of hospitality across East Africa.",
                  },
                ].map((pillar, index) => (
                  <article key={pillar.title} className="rounded-xl border border-[#D4A72C]/25 bg-[#111111]/80 p-5 text-left">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A72C]">0{index + 1}</p>
                    <h3 className="mt-2 text-xl font-bold text-[#F8F5EE]">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#D1D5DB]">{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Visual Showcase Grid (Wine Grapes, Spices, Flaming Drinks, Beach Setup) */}
          <section className="py-20 bg-[#0B0B0B]">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A72C]">
                  Sensory & Experience
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-[#F8F5EE] sm:text-5xl">
                  Capturing the Essence of Luxury
                </h2>
                <p className="mt-4 text-[#D1D5DB] text-base">
                  From exotic spices and wine grape harvests to theatrical flaming pours and romantic beach dining settings.
                </p>
              </div>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
                    title: "Fine Wines & Cellars",
                    sub: "Sommelier Education & Pouring Rituals",
                  },
                  {
                    url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
                    title: "Exotic Spices & Seasoning",
                    sub: "Culinary Flavour Profiling & Recipe Creation",
                  },
                  {
                    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
                    title: "Shots & Drinks on Fire",
                    sub: "High-Energy Lounge Mixology",
                  },
                  {
                    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
                    title: "Romantic Beach Setup",
                    sub: "Unforgettable Oceanfront Dinners",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-[#D4A72C]/30 bg-[#141414]"
                  >
                    <div
                      className="h-72 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.url})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-[#F8F5EE]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#D4A72C] font-semibold">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Services Section Summary */}
          <section className="py-20 bg-[#121212] border-t border-[#D4A72C]/20">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A72C]">
                    Advisory & Execution
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold text-[#F8F5EE] sm:text-5xl">
                    9 Strategic Hospitality Solutions
                  </h2>
                </div>
                <button
                  onClick={() => setCurrentPage("services")}
                  className="rounded-xl bg-[#C89211] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#A9790E]"
                >
                  View All Services
                </button>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Operational Audits & SOPs",
                    desc: "Comprehensive workflow analysis, service manual creation, and quality standard checklists.",
                    icon: Briefcase,
                  },
                  {
                    title: "F&B Concept & Menu Engineering",
                    desc: "Recipe costing, yield management, beverage program development, and profit maximization.",
                    icon: Wine,
                  },
                  {
                    title: "Staff & Waiter Training",
                    desc: "Hands-on floor instruction, upselling techniques, complaint handling, and table etiquette.",
                    icon: GraduationCap,
                  },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-[#D4A72C]/30 bg-[#181818] p-8 transition hover:border-[#D4A72C]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/20 text-[#D4A72C]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-[#F8F5EE]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#D1D5DB] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  );
                })}
                <CrestWatermarkSlot className="hidden min-h-[240px] sm:flex lg:hidden" crestClassName="h-44 w-52" />
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === "about" && (
        <main>
          {/* About Rolling Carousel Header */}
          <RollingCarousel
            textPlacement="top"
            slides={[
              {
                url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
                title: "About AKJK Hospitality",
                subtitle: "Founded by Austin Kahuki and Joseph Kiarie to raise hospitality standards across Kenya, Tanzania, Uganda, and Rwanda.",
                tag: "REGIONAL LEADERSHIP",
              },
              {
                url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
                title: "Passion for Culinary & Wine Excellence",
                subtitle: "Combining deep operational knowledge with creative food and beverage programs.",
                tag: "KNOWLEDGE & PASSION",
              },
            ]}
          />

          <section className="py-20 bg-[#0B0B0B]">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] lg:gap-12">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A72C]">
                    Leadership & Vision
                  </span>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#F8F5EE] sm:text-5xl">
                    Developing People. Elevating Hospitality.
                  </h2>
                  <p className="mt-6 text-base text-[#D1D5DB] leading-relaxed">
                    AK&JK Hospitality Consultancy & Academy bridges the gap between ambitious venue concepts and flawless daily floor execution. We work side-by-side with owners, general managers, and frontline teams.
                  </p>
                  <div className="mt-8 space-y-4">
                    {[
                      "Custom SOP manuals tailored to your brand",
                      "Practical on-site training on your venue floor",
                      "Cost control frameworks and wastage reduction",
                      "Regional footprint across East Africa",
                    ].map((val) => (
                      <div key={val} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#D4A72C]" />
                        <span className="text-sm font-semibold text-[#F8F5EE]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Managing Directors Cards */}
                <div className="space-y-6">
                  <div className="rounded-2xl border border-[#D4A72C]/40 bg-[#161616] p-8 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] text-black font-black text-xl">
                        AK
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#F8F5EE]">
                          Austin Kahuki
                        </h3>
                        <p className="text-xs font-semibold text-[#D4A72C]">
                          Managing Director & F&B Specialist
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-[#D1D5DB] leading-relaxed">
                      Specializing in F&B turnarounds, mixology innovation, sommelier training, and venue launches across East Africa.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#D4A72C]/40 bg-[#161616] p-8 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] text-black font-black text-xl">
                        JK
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#F8F5EE]">
                          Joseph Kiarie
                        </h3>
                        <p className="text-xs font-semibold text-[#D4A72C]">
                          Managing Director & Operations Strategist
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-[#D1D5DB] leading-relaxed">
                      Expert in financial yield optimization, operational SOPs, organizational leadership, and service consistency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === "services" && (
        <main>
          <RollingCarousel
            textPlacement="top"
            slides={[
              {
                url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
                title: "Hospitality Advisory Services",
                subtitle: "Comprehensive solutions tailored to hotels, boutique lodges, bars, and fine dining establishments.",
                tag: "CONSULTING & ADVISORY",
              },
            ]}
          />

          <section className="py-20 bg-[#0B0B0B]">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A72C]">
                  Full Service Capabilities
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-[#F8F5EE] sm:text-5xl">
                  Our 10 Strategic Pillar Services
                </h2>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Operational Consulting",
                    desc: "Comprehensive venue audits, workflow optimization, and structural efficiency planning.",
                    icon: Briefcase,
                  },
                  {
                    title: "Staff Training & Development",
                    desc: "On-site and classroom modules designed to sharpen waiter etiquette and service speed.",
                    icon: GraduationCap,
                  },
                  {
                    title: "Pre-Opening Guidance",
                    desc: "Complete launch assistance from concept design to operational readiness.",
                    icon: Sparkles,
                  },
                  {
                    title: "Standard Operating Procedures (SOPs)",
                    desc: "Tailored service checklists, manuals, and brand compliance guidelines.",
                    icon: FileText,
                  },
                  {
                    title: "F&B & Menu Engineering",
                    desc: "Portion control, recipe costing, yield maximization, and cocktail design.",
                    icon: Wine,
                  },
                  {
                    title: "Supervisory Coaching",
                    desc: "Empowering floor managers with briefing rituals, scheduling, and leadership.",
                    icon: Users,
                  },
                  {
                    title: "Cost Control & Inventory",
                    desc: "Stock auditing systems, wastage tracking, and financial margin protection.",
                    icon: BarChart3,
                  },
                  {
                    title: "Quality Audits & Mystery Shopping",
                    desc: "Unbiased mystery evaluations and actionable service improvement reports.",
                    icon: ClipboardCheck,
                  },
                  {
                    title: "Revenue & Turnaround Strategy",
                    desc: "Strategic plans to revitalise underperforming restaurants, lounges, and hotels.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Hospitality Talent Search & Recruitment",
                    desc: "Finding and assessing hospitality professionals for key roles, with tailored hiring support from candidate search through selection.",
                    icon: Users,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#D4A72C]/30 bg-[#141414] p-8 shadow-md transition hover:border-[#D4A72C] hover:bg-[#1A1A1A]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/20 text-[#D4A72C]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-[#F8F5EE]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#D1D5DB] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
                <CrestWatermarkSlot className="hidden min-h-[280px] lg:col-span-2 lg:flex" crestClassName="h-48 w-56" />
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === "academy" && (
        <main>
          {/* Academy Rolling Carousel Header */}
          <RollingCarousel
            textPlacement="top"
            slides={[
              {
                url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
                title: "AKJK Hospitality Academy",
                subtitle: "Empowering waiters, bartenders, baristas, chefs, and supervisors with world-class practical skills.",
                tag: "PRACTICAL FLOOR TRAINING",
              },
              {
                url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2070&auto=format&fit=crop",
                title: "Culinary & Live Flambé Mastery",
                subtitle: "Training kitchen teams in showmanship, hygiene standards, and precise plate presentation.",
                tag: "CULINARY & LIVE COOKING",
              },
            ]}
          />

          <section className="py-20 bg-[#0B0B0B]">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A72C]">
                  Certification Modules
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-[#F8F5EE] sm:text-5xl">
                  Academy Training Programs
                </h2>
              </div>

              <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Service Etiquette & Waiters",
                    desc: "Table setting, guest welcoming, upselling techniques, and tray presentation.",
                    time: "2–4 Weeks",
                  },
                  {
                    title: "Mixology & Flaming Pours",
                    desc: "Craft cocktail preparation, bar setup efficiency, and flaming shot techniques.",
                    time: "2 Weeks",
                  },
                  {
                    title: "Sommelier & Wine Rituals",
                    desc: "Wine region knowledge, pairing suggestions, opening, and tasting protocols.",
                    time: "1–2 Weeks",
                  },
                  {
                    title: "Floor Leadership & Supervisors",
                    desc: "Briefing techniques, roster planning, stock management, and team coaching.",
                    time: "3 Weeks",
                  },
                ].map((prog) => (
                  <div
                    key={prog.title}
                    className="rounded-2xl border border-[#D4A72C]/30 bg-[#161616] p-8"
                  >
                    <span className="rounded-full border border-[#D4A72C]/40 bg-black px-3 py-1 text-xs font-bold text-[#D4A72C]">
                      {prog.time}
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-[#F8F5EE]">
                      {prog.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#D1D5DB] leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === "contact" && (
        <main>
          {/* Contact Page Rolling Carousel Header */}
          <RollingCarousel
            textPlacement="top"
            slides={[
              {
                url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
                title: "Warm Hostess & Reception Welcome",
                subtitle: "First impressions set the tone for luxury guest experiences. Our team is ready to assist your establishment.",
                tag: "FRONT OFFICE & RECEPTION EXCELLENCE",
              },
              {
                url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
                title: "24/7 Front Office & Concierge",
                subtitle: "Providing seamless communication and reservation management.",
                tag: "GUEST RELATIONS",
              },
            ]}
          />

          <section className="py-20 bg-[#0B0B0B]">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <div className="rounded-2xl border border-[#D4A72C]/30 bg-[#141414] p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-[#F8F5EE]">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-[#D1D5DB]">
                    Fill out the form below to request a site audit or training proposal.
                  </p>

                  <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="mt-2 w-full rounded-xl border border-[#D4A72C]/30 bg-[#0B0B0B] p-4 text-sm text-[#F8F5EE] focus:border-[#D4A72C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="mt-2 w-full rounded-xl border border-[#D4A72C]/30 bg-[#0B0B0B] p-4 text-sm text-[#F8F5EE] focus:border-[#D4A72C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                        Hospitality Business Type
                      </label>
                      <select className="mt-2 w-full rounded-xl border border-[#D4A72C]/30 bg-[#0B0B0B] p-4 text-sm text-[#F8F5EE] focus:border-[#D4A72C] focus:outline-none">
                        <option>Hotel & Resort</option>
                        <option>Restaurant & Fine Dining</option>
                        <option>Bar, Lounge & Nightclub</option>
                        <option>Café & Bakery</option>
                        <option>Individual Training Student</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="How can AKJK Hospitality assist your business?"
                        className="mt-2 w-full rounded-xl border border-[#D4A72C]/30 bg-[#0B0B0B] p-4 text-sm text-[#F8F5EE] focus:border-[#D4A72C] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C89211] p-4 text-sm font-bold text-black shadow-lg transition hover:bg-[#A9790E]"
                    >
                      <Send className="h-4 w-4" /> Send Request
                    </button>
                  </form>
                </div>

                {/* Direct Contact Info */}
                <div className="flex flex-col justify-between space-y-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A72C]">
                      Direct Reach
                    </span>
                    <h2 className="mt-2 text-3xl font-extrabold text-[#F8F5EE]">
                      Get in Touch With Our Directors
                    </h2>
                    <p className="mt-4 text-base text-[#D1D5DB] leading-relaxed">
                      We operate across Kenya, Tanzania, Uganda, and Rwanda. Contact us today for operational advisory or training inquiries.
                    </p>

                    <div className="mt-8 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/20 text-[#D4A72C]">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#D4A72C] uppercase">
                            Location
                          </p>
                          <p className="text-base text-[#F8F5EE] font-medium">
                            Nairobi, Kenya (Serving East Africa)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/20 text-[#D4A72C]">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#D4A72C] uppercase">
                            Phone
                          </p>
                          <p className="text-base text-[#F8F5EE] font-medium">
                            +254 700 000 000
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/20 text-[#D4A72C]">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#D4A72C] uppercase">
                            Email
                          </p>
                          <p className="text-base text-[#F8F5EE] font-medium">
                            info@akjkhospitality.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#D4A72C]/30 bg-[#161616] p-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4A72C]">
                      Regional Operations
                    </p>
                    <p className="mt-2 text-sm text-[#F8F5EE]">
                      Kenya • Tanzania • Uganda • Rwanda
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid items-center gap-6 md:grid-cols-2">
                <CrestWatermarkSlot className="min-h-[220px]" crestClassName="h-48 w-56" />
                <EastAfricaMap className="ml-auto w-full max-w-[360px]" />
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Global footer */}
      <footer className="border-t border-[#D4A72C]/30 bg-black text-[#F8F5EE]">
        <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
            <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <AKJKLogo />
              <p className="mt-4 text-xs text-[#D1D5DB] leading-relaxed">
                Practical hospitality solutions that improve operations, develop people, control costs, and deliver better guest experiences across East Africa.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A72C]">
                Quick Navigation
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-[#D1D5DB]">
                {navItems.map((n) => (
                  <li key={n.id}>
                    <button
                      onClick={() => setCurrentPage(n.id as any)}
                      className="hover:text-[#D4A72C]"
                    >
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A72C]">
                Core Offerings
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-[#D1D5DB]">
                <li>Operational Audits & SOPs</li>
                <li>F&B & Menu Engineering</li>
                <li>Frontline Service Training</li>
                <li>Pre-Opening Management</li>
                <li>Talent Search & Recruitment</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A72C]">
                Leadership
              </h4>
              <p className="mt-4 text-xs text-[#D1D5DB]">
                Managing Directors: Austin Kahuki & Joseph Kiarie
              </p>
              <p className="mt-2 text-xs text-[#D4A72C]">
                Serving Kenya, Tanzania, Uganda, Rwanda.
              </p>
            </div>

            </div>
            <RegionalImageCarousel />
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-[#A1A1AA]">
            © {new Date().getFullYear()} AKJK Hospitality Consultancy & Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
