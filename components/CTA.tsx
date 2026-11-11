import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#B8860B] via-[#C89211] to-[#AA7C11] py-20">
      
      {/* Background Decorative Circles */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        {/* Small Tagline */}
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#111111]/80">
          Partner With AKJK Hospitality
        </p>

        {/* Headline */}
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">
          Ready to Elevate Your Hospitality Business?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/95">
          Speak with AKJK Hospitality today regarding bespoke consulting, management solutions, SOP implementation, or staff training across Kenya, Tanzania, Uganda, and Rwanda.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#222222] hover:scale-[1.02]"
          >
            Contact AKJK Hospitality <ArrowRight className="h-5 w-5 text-[#C89211]" />
          </Link>

          <a
            href="tel:+254706188231"
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-4 text-base font-bold text-white transition hover:bg-white/20"
          >
            <Phone className="h-4 w-4" /> +254 706 188 231
          </a>
          <a
            href="tel:+255659359005"
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/20"
          >
            <Phone className="h-4 w-4" /> +255 659 359 005
          </a>
        </div>

        {/* Direct Contact Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-white/90">
          <a href="mailto:austinkahuki@outlook.com" className="inline-flex items-center gap-1.5 hover:underline">
            <Mail className="h-4 w-4" /> austinkahuki@outlook.com
          </a>
          <span className="hidden sm:inline">•</span>
          <span>Kenya | Tanzania | Uganda | Rwanda</span>
        </div>

      </div>
    </section>
  );
}
