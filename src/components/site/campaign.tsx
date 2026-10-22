"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BadgeCheck,
  Check,
  CircleDashed,
  Copy,
  HardHat,
  Landmark,
  MessageCircle,
  Phone,
  Pickaxe,
  Quote,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./reveal";

const BANK = {
  bank: "Standard Bank",
  account: "10254826774",
  reference: "HOME BUILD",
  phone: "078 398 5023",
};

const MILESTONES = [
  {
    icon: Pickaxe,
    title: "Foundations",
    body: "Trenches dug and prepared.",
    state: "done" as const,
  },
  {
    icon: HardHat,
    title: "Walls",
    body: "Bricks bought — walls rising.",
    state: "current" as const,
  },
  {
    icon: CircleDashed,
    title: "Roof & Windows",
    body: "Frames staged, ready to install.",
    state: "next" as const,
  },
  {
    icon: Rocket,
    title: "Rooms Complete",
    body: "Two new rooms for a family of four.",
    state: "goal" as const,
  },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="h-8 w-8 shrink-0 rounded-full text-cream/70 hover:bg-white/10 hover:text-sun"
      aria-label={`Copy ${label}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
        } catch {
          /* clipboard unavailable — ignore */
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
    >
      {copied ? <Check className="h-4 w-4 text-leaf" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}

export function Campaign() {
  return (
    <section id="home-build" className="relative overflow-hidden bg-cocoa py-20 lg:py-28">
      <div aria-hidden className="sun-rays pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Featured Campaign"
          title="Help us extend a home for a family of four"
          sub="We are raising R15 000 to add two more rooms to a single-room home — giving this family a safer, more comfortable place to live. Construction is already under way."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Milestones */}
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-cream">
                Build progress — every milestone, your impact
              </h3>
              <p className="text-sm leading-relaxed text-cream/65">
                The bricks have been purchased and the work has begun. Follow
                the journey as your contributions turn foundations into rooms.
              </p>

              <ol className="relative mt-2 space-y-1">
                {MILESTONES.map((m, i) => {
                  const last = i === MILESTONES.length - 1;
                  const Icon = m.icon;
                  const styles = {
                    done: {
                      badge: "bg-leaf/20 text-leaf",
                      ring: "border-leaf/40",
                      title: "text-cream",
                      badgeIcon: <BadgeCheck className="h-5 w-5" aria-hidden />,
                    },
                    current: {
                      badge: "bg-sun/20 text-sun",
                      ring: "border-sun/60 shadow-[0_0_0_4px_rgba(247,201,72,0.15)]",
                      title: "text-sun",
                      badgeIcon: <Icon className="h-5 w-5" aria-hidden />,
                    },
                    next: {
                      badge: "bg-white/10 text-cream/60",
                      ring: "border-white/15",
                      title: "text-cream/80",
                      badgeIcon: <Icon className="h-5 w-5" aria-hidden />,
                    },
                    goal: {
                      badge: "bg-white/5 text-cream/50",
                      ring: "border-white/10 border-dashed",
                      title: "text-cream/60",
                      badgeIcon: <Icon className="h-5 w-5" aria-hidden />,
                    },
                  }[m.state];

                  return (
                    <li key={m.title} className="relative flex gap-4 pb-1">
                      {!last && (
                        <span
                          aria-hidden
                          className="absolute left-[21px] top-11 h-[calc(100%-2.2rem)] w-px bg-white/15"
                        />
                      )}
                      <span
                        className={`relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${styles.badge} ${styles.ring}`}
                      >
                        {styles.badgeIcon}
                      </span>
                      <div className="rounded-2xl px-3 py-2">
                        <p className={`flex items-center gap-2 text-[15px] font-semibold ${styles.title}`}>
                          {m.title}
                          {m.state === "current" && (
                            <span className="rounded-full bg-sun px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cocoa-deep">
                              In progress
                            </span>
                          )}
                          {m.state === "done" && (
                            <span className="rounded-full bg-leaf px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                              Complete
                            </span>
                          )}
                        </p>
                        <p className="text-[13px] text-cream/60">{m.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <blockquote className="mt-4 flex gap-3 rounded-2xl bg-white/5 p-4 text-sm italic leading-relaxed text-cream/75">
                <Quote className="h-5 w-5 shrink-0 text-sun/70" aria-hidden />
                Every contribution helps us build with dignity.
              </blockquote>
            </div>
          </Reveal>

          {/* Poster + banking */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-4">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/media/campaign-poster.jpg"
                  alt="Beyond Self fundraising poster — Help us extend a home for a family of four, goal R15 000"
                  width={924}
                  height={1000}
                  className="h-auto w-full"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cocoa-deep/85 px-3.5 py-1.5 text-xs font-bold text-sun backdrop-blur">
                  Goal: R15 000
                </span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
                  <Landmark className="h-5 w-5 text-sun" aria-hidden />
                  Give via EFT
                </h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  {[
                    ["Bank", BANK.bank],
                    ["Account number", BANK.account],
                    ["Reference", BANK.reference],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-2.5"
                    >
                      <dt className="text-cream/60">{k}</dt>
                      <dd className="flex items-center gap-1 font-semibold text-cream">
                        <span className="font-mono tracking-wide">{v}</span>
                        <CopyButton value={v} label={k} />
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Button
                    asChild
                    className="flex-1 rounded-full bg-leaf font-semibold text-white hover:bg-leaf-deep"
                  >
                    <a
                      href={`https://wa.me/27783985023?text=${encodeURIComponent(
                        "Hi Beyond Self! I just contributed to the HOME BUILD campaign. — sent from your website"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      Tell us you gave
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full border-white/20 bg-transparent font-semibold text-cream hover:bg-white/10 hover:text-cream"
                  >
                    <a href={`tel:+27783985023`}>
                      <Phone className="h-4 w-4" aria-hidden />
                      {BANK.phone}
                    </a>
                  </Button>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-cream/50">
                  Every rand goes to the build. Reference{" "}
                  <span className="font-semibold text-sun">HOME BUILD</span>{" "}
                  keeps your gift ring-fenced to this campaign.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
