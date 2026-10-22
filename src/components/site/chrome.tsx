"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#home-build", label: "Home Build" },
  { href: "#impact", label: "Impact" },
  { href: "#leadership", label: "Leadership" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function Logo({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="#top" className="flex items-center gap-2.5" aria-label="Beyond Self — back to top">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border shadow-sm">
        <Image
          src="/media/logo-icon.jpg"
          alt="Beyond Self logo — hands cradling a sun with a growing heart"
          fill
          sizes="44px"
          className="object-cover"
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-bold tracking-tight ${
            dark ? "text-cream" : "text-foreground"
          }`}
        >
          BEYOND SELF
        </span>
        {!compact && (
          <span
            className={`block text-[10px] font-medium uppercase tracking-[0.14em] ${
              dark ? "text-sun" : "text-leaf"
            }`}
          >
            Empowering Communities
          </span>
        )}
      </span>
    </Link>
  );
}

export function TopBar() {
  return (
    <div className="bg-cocoa-deep text-cream/90">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-[11px] font-medium tracking-wide sm:justify-between sm:text-xs">
        <p>
          <span className="text-sun">Registered NPO</span>
          <span className="mx-2 opacity-40" aria-hidden>
            •
          </span>
          Reg No. K2025443565
        </p>
        <p className="hidden sm:inline">Vosloorus · Gauteng · South Africa</p>
        <a
          href="tel:+27783985023"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-sun"
        >
          <Phone className="h-3 w-3" aria-hidden />
          078 398 5023
        </a>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-cream/90 shadow-[0_8px_30px_-12px_rgba(74,46,31,0.25)] backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-full bg-ember px-5 font-semibold shadow-[0_6px_20px_-6px_rgba(224,122,42,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-ember/90 sm:inline-flex"
          >
            <a href="#home-build">
              <Heart className="h-4 w-4" aria-hidden />
              Donate
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cream">
              <SheetHeader className="border-b border-border/70 pb-4 text-left">
                <SheetTitle asChild>
                  <div>
                    <Logo compact />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pt-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-[15px] font-medium text-foreground/85 transition-colors hover:bg-accent"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-3 rounded-full bg-ember font-semibold hover:bg-ember/90"
                >
                  <a href="#home-build" onClick={() => setOpen(false)}>
                    <Heart className="h-4 w-4" aria-hidden />
                    Donate Now
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
