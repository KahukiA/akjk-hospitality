// @/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
      {/* Background Image Container */}
      <div className="relative min-h-[720px] w-full lg:min-h-[800px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Restaurant Interior with Waiter"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Soft Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%,_rgba(212,167,44,0.18),_transparent_60%)]" />

        {/* Content Box */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-8 py-20 lg:px-14">
          <div className="max-w-[1000px]">
            {/* Tagline */}
            <p className="text-base font-medium uppercase tracking-[0.5em] text-[#D4A72C]">
              AKJK Hospitality
            </p>

            {/* Main Headline */}
            <h1 className="mt-8 text-6xl font-black leading-[1.0] tracking-[-0.05em] text-[#F8F5EE] sm:text-7xl lg:text-[100px] xl:text-[112px]">
              Hospitality Consulting,
              <span className="block text-[#D4A72C] mt-2 xl:mt-4">
                Management & Training
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-[#E5E7EB] max-w-[820px]">
              Practical hospitality solutions that improve operations, develop people, control costs, and deliver better guest experiences across East Africa.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-wrap gap-5 items-center">
              <Link
                href="/contact"
                className="rounded-xl bg-[#C89211] px-10 py-5 text-lg font-bold text-[#111111] shadow-lg transition hover:bg-[#A9790E] hover:scale-[1.02]"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="rounded-xl border-2 border-[#F8F5EE]/80 bg-black/30 backdrop-blur-sm px-10 py-5 text-lg font-bold text-[#F8F5EE] transition hover:bg-white/10 hover:border-white"
              >
                Our Services
              </Link>
            </div>

            {/* Core Pillars */}
            <div className="mt-14 flex items-center gap-4 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#F8F5EE]">
              <div className="w-10 h-px bg-[#D4A72C]" />
              <span>Consulting</span>
              <span className="text-[#D4A72C]">•</span>
              <span>Management</span>
              <span className="text-[#D4A72C]">•</span>
              <span>Training</span>
            </div>
          </div>
        </div>

        {/* Good Food / Great People Slogan Box */}
        <div className="absolute right-14 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="w-[300px] rounded-[30px] border-2 border-[#D4A72C]/80 bg-black/60 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-sm">
            <h3 className="text-5xl font-extrabold leading-tight text-[#D4A72C] tracking-tight">
              GOOD FOOD
              <span className="block text-[#F8F5EE] mt-1">GREAT PEOPLE</span>
              <span className="block text-[#D4A72C] mt-1">LASTING MEMORIES</span>
            </h3>
            <div className="mt-6 h-1 w-20 bg-[#D4A72C] mx-auto rounded-full" />
          </div>
        </div>

        {/* Bottom Gold Accent Strip */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#D4A72C] via-[#F3E5AB] to-[#D4A72C]" />
      </div>
    </section>
  );
}