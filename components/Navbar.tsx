"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandCrest from "./BrandCrest";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Academy", href: "/academy" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-30 border-b border-[#D4A72C]/20 bg-[#090A0B]">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 text-[#F8F5EE]" aria-label="AK&JK Hospitality home">
          <BrandCrest className="h-10 w-11 shrink-0 sm:h-11 sm:w-12" />
          <span className="flex flex-col">
            <span className="text-xl font-semibold leading-none tracking-[-0.04em] sm:text-2xl">
              AK&amp;JK
            </span>
            <span className="mt-1 text-[0.48rem] font-bold uppercase tracking-[0.17em] text-[#D4A72C] sm:text-[0.55rem] sm:tracking-[0.2em]">
              Hospitality Consultancy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-9" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-[#F1ECE3] transition-colors hover:text-[#D4A72C] lg:text-base">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-[#C89211] px-5 py-3 text-sm font-bold text-[#111111] transition hover:bg-[#E1B540] md:inline-flex lg:px-7"
        >
          Contact Us
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A72C]/40 text-[#F8F5EE] transition hover:bg-white/5 md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-[#D4A72C]/20 bg-[#090A0B] px-5 pb-5 pt-3 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-[#F1ECE3] transition hover:bg-white/5 hover:text-[#D4A72C]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg bg-[#C89211] px-5 py-3 text-sm font-bold text-[#111111]"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
