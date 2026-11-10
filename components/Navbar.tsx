// @/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EE] border-b border-[#D6D3D1]/50 shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-14">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-1.5 text-2xl font-black tracking-tight text-[#111111]">
          <span>AK</span>
          <span className="text-[#C89211]">JK</span>
          <span className="font-light text-[#444444] ml-1">Hospitality</span>
        </Link>

        {/* Desktop Navigation Links & Action Button */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-[#111111] transition-colors hover:text-[#C89211]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-[#C89211] px-6 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-[#A9790E] hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[#111111] hover:bg-[#EAE4D6] md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#D6D3D1] bg-[#F8F5EE] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#111111] hover:text-[#C89211]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-block rounded-xl bg-[#C89211] px-6 py-3.5 text-center text-base font-bold text-white shadow-md transition hover:bg-[#A9790E]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}