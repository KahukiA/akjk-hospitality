// @/components/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import RegionalImageCarousel from "./RegionalImageCarousel";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
  { name: "Consulting", href: "/consulting" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Operational Audits", href: "/services" },
  { name: "Staff Training & SOPs", href: "/academy" },
  { name: "F&B & Menu Engineering", href: "/services" },
  { name: "Pre-Opening Management", href: "/services" },
  { name: "Revenue & Cost Turnaround", href: "/services" },
  { name: "Talent Search & Recruitment", href: "/services" },
];

const regions = ["Kenya", "Tanzania", "Uganda", "Rwanda"];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F8F5EE]">
      {/* Top Gold Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C89211] via-[#F8F5EE] to-[#C89211]" />

      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-14 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
          <div className="grid gap-10 sm:grid-cols-2">
          
          {/* Column 1: Brand & Crest Header */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-black text-white"
            >
              <span>AK</span>
              <span className="text-[#C89211]">JK</span>
              <span className="font-light text-[#A1A1AA]">Hospitality</span>
            </Link>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C89211]">
              Consultancy & Academy
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
              Practical hospitality solutions that improve operations, develop people, control costs, and deliver better guest experiences across East Africa.
            </p>

            {/* Regional Operating Scope */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F8F5EE]">
                Regional Presence:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span
                    key={region}
                    className="rounded-md border border-[#C89211]/30 bg-[#161616] px-2.5 py-1 text-xs font-medium text-[#C89211]"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C89211]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D4D4D8] transition hover:text-[#C89211]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C89211]">
              Core Offerings
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D4D4D8] transition hover:text-[#C89211]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C89211]">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-3.5 text-sm text-[#D4D4D8]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C89211]" />
                <span>Nairobi, Kenya (Operating across East Africa)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#C89211]" />
                <div className="flex flex-col">
                  <a href="tel:+254706188231" className="hover:text-[#C89211]">+254 706 188 231</a>
                  <a href="tel:+255659359005" className="hover:text-[#C89211]">+255 659 359 005</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#C89211]" />
                <a
                  href="mailto:austinkahuki@outlook.com"
                  className="hover:text-[#C89211]"
                >
                  austinkahuki@outlook.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-[#C89211]/30 bg-[#161616] p-3 text-xs text-[#C89211]">
              <Award className="h-5 w-5 shrink-0" />
              <span>Managing Directors: Austin Kahuki & Joseph Kiarie</span>
            </div>
          </div>
          </div>
          <RegionalImageCarousel />
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 border-t border-[#27272A] pt-8 text-center text-xs text-[#71717A]">
          <p>
            © {new Date().getFullYear()} AKJK Hospitality Consultancy & Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
