"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, HandHeart, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: "Registered NPO" },
  { icon: BadgeCheck, label: "Non-partisan" },
  { icon: Users, label: "Community-led" },
  { icon: Sparkles, label: "Grassroots" },
];

const ease = [0.21, 0.6, 0.35, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      {/* decorative sun rays — a nod to the logo */}
      <div
        aria-hidden
        className="sun-rays pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full sm:right-[-4%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sun/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm backdrop-blur"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-leaf" aria-hidden />
            Reg. K2025443565
            <span className="opacity-40" aria-hidden>·</span>
            <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden />
            Vosloorus, Gauteng
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-[4.2rem]"
          >
            Empowering
            Communities.
            <span className="relative mt-1 block text-ember">
              Transforming Lives.
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-2 left-0 w-[min(320px,70%)] text-sun"
                fill="none"
              >
                <path
                  d="M3 9C60 3 160 3 217 8"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Beyond Self is a grassroots movement of active citizens working
            together to create a more just, equal and empowered South Africa —
            one family, one learner, one home at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-ember px-7 text-base font-semibold shadow-[0_10px_30px_-8px_rgba(224,122,42,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-ember/90"
            >
              <a href="#home-build">
                <HandHeart className="h-5 w-5" aria-hidden />
                Support the Home Build
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-cocoa/25 bg-white/60 px-7 text-base font-semibold text-cocoa backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <a href="#get-involved">Become a Volunteer</a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Trust indicators"
          >
            {TRUST_CHIPS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cocoa/80"
              >
                <Icon className="h-4 w-4 text-leaf" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Collage */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_60px_-20px_rgba(74,46,31,0.4)]"
          >
            <Image
              src="/media/boy-gift.jpg"
              alt="A young boy joyfully receiving his gift box at a Beyond Self community drive"
              fill
              priority
              sizes="(max-width: 1024px) 78vw, 400px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="absolute -bottom-8 left-0 aspect-[4/3] w-[52%] overflow-hidden rounded-3xl border-4 border-white shadow-[0_24px_50px_-18px_rgba(74,46,31,0.45)]"
          >
            <Image
              src="/media/school-group.jpg"
              alt="Learners of Thabang Primary School at a Beyond Self handover event"
              fill
              priority
              sizes="(max-width: 1024px) 52vw, 270px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -18, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="absolute -right-2 top-6 w-[38%] overflow-hidden rounded-3xl border-4 border-white shadow-[0_24px_50px_-18px_rgba(74,46,31,0.45)] sm:-right-5"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src="/media/learners-boxes.jpg"
                alt="Learners queuing with their gift boxes"
                fill
                priority
                sizes="(max-width: 1024px) 38vw, 200px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* floating campaign card */}
          <motion.a
            href="#home-build"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="group absolute -bottom-10 right-1 flex items-center gap-3 rounded-2xl border border-border bg-white/95 p-3.5 pr-5 shadow-[0_18px_40px_-14px_rgba(74,46,31,0.45)] backdrop-blur transition-transform hover:-translate-y-1 sm:right-4"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sun to-ember text-cocoa-deep">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-bold text-foreground">
                Home Build: R15 000
              </span>
              <span className="block text-xs font-medium text-muted-foreground">
                Under way — walls are rising →
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
