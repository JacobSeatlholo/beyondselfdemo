"use client";

import Link from "next/link";
import { MapPin, Phone, Hammer, Heart } from "lucide-react";
import { Logo } from "./chrome";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#home-build", label: "Home Build Campaign" },
  { href: "#impact", label: "Impact" },
  { href: "#leadership", label: "Leadership" },
  { href: "#governance", label: "Governance" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-cocoa-deep text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            A registered, non-profit, non-partisan organisation building a
            South Africa transformed by active citizens — one family, one
            learner, one home at a time.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-sun">
            <Heart className="h-3.5 w-3.5" aria-hidden />
            Empowering Communities. Transforming Lives.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Explore
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-cream/70 transition-colors hover:text-sun"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Reach Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
              <span>
                635 Ingulule Crescent Ext 3,
                <br />
                Vosloorus, Gauteng, South Africa
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
              <a href="tel:+27783985023" className="transition-colors hover:text-sun">
                078 398 5023
              </a>
            </li>
          </ul>
          <p className="mt-5 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-cream/60">
            Donations: <span className="text-cream/90">Standard Bank</span> ·
            Acc <span className="text-cream/90">10254826774</span> · Ref{" "}
            <span className="text-sun">HOME BUILD</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Beyond Self NPO · Reg No. K2025443565
            · All rights reserved.
          </p>
          <p
            className="inline-flex items-center gap-1.5 font-medium text-cream/75"
            title="Demo credit"
          >
            <Hammer className="h-3.5 w-3.5 text-sun" aria-hidden />
            Demo built by <span className="font-semibold text-sun">Business Hustle</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
