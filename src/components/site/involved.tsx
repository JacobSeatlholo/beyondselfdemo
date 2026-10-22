import Image from "next/image";
import {
  BadgeCheck,
  FileText,
  HandCoins,
  HandHeart,
  Landmark,
  Megaphone,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./reveal";

/* -------------------------------- Leadership -------------------------------- */

const DIRECTORS = [
  { name: "Thabisile Majola", initials: "TM" },
  { name: "Lwazi Zenzile", initials: "LZ" },
  { name: "Motshabi Mothobela", initials: "MM" },
];

export function Leadership() {
  return (
    <section id="leadership" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind the promise"
          sub="A hands-on leadership team that shows up on site, in school halls and in family living rooms — not just in board minutes."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_60px_-20px_rgba(74,46,31,0.4)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/media/team-thabang.jpg"
                  alt="Beyond Self team members and partners at Thabang Primary School, in Beyond Self branded shirts"
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="object-cover"
                />
              </div>
              <p className="bg-cocoa px-5 py-3 text-center text-xs font-medium text-cream/80">
                On the ground at Thabang Primary School — service before titles.
              </p>
            </div>
          </Reveal>

          <div>
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {DIRECTORS.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.08}>
                  <li className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <span
                      aria-hidden
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sun to-ember font-display text-lg font-bold text-cocoa-deep"
                    >
                      {d.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                      <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <BadgeCheck className="h-3.5 w-3.5 text-leaf" aria-hidden />
                        Director · Beyond Self NPO
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.28}>
              <p className="mt-5 rounded-2xl bg-accent/60 p-4 text-sm leading-relaxed text-accent-foreground">
                Our directors lead under the constitution&apos;s commitment to
                empathy, transparency, accountability and service — and are
                supported by a growing network of volunteers and members.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Governance -------------------------------- */

const COMMITMENTS = [
  {
    icon: Landmark,
    title: "Funds with a purpose",
    body: "Donations are ring-fenced to their campaign (reference HOME BUILD) and used only for that purpose.",
  },
  {
    icon: FileText,
    title: "Reporting back",
    body: "Supporters receive milestone updates — foundation photos, wall photos, handover moments — as the work progresses.",
  },
  {
    icon: UserRoundCheck,
    title: "Named accountability",
    body: "Three named directors carry personal responsibility for decisions, finances and delivery.",
  },
  {
    icon: ScrollText,
    title: "A constitution, not vibes",
    body: "A formal constitution binds the organisation — its vision, mission, objectives and membership rules.",
  },
];

export function Governance() {
  return (
    <section id="governance" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Governance & Trust"
            title="Built on trust, run with integrity"
          />
          <Reveal delay={0.1}>
            <blockquote className="mt-6 rounded-3xl border-l-4 border-ember bg-card p-6 shadow-sm sm:p-7">
              <ShieldCheck className="h-6 w-6 text-leaf" aria-hidden />
              <p className="mt-3 font-display text-lg leading-relaxed text-cocoa sm:text-xl">
                “Beyond Self is a voluntary, non-profit, non-partisan
                organisation established in accordance with the laws of the
                Republic of South Africa. It shall have legal personality and
                the capacity to acquire rights and incur obligations.”
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                — Constitution, Clause 2 · Reg No. K2025443565
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full bg-leaf font-semibold text-white hover:bg-leaf-deep">
                <a
                  href="https://wa.me/27783985023?text=Hi%20Beyond%20Self!%20I%20have%20a%20question%20about%20governance%20and%20donations."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Ask us anything
                </a>
              </Button>
              <a
                href="tel:+27783985023"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa underline-offset-4 hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden />
                078 398 5023
              </a>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-3 text-[15px] font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- Get involved ------------------------------- */

const WAYS = [
  {
    icon: HandCoins,
    title: "Give",
    tagline: "Fund the next milestone",
    body: "From R50 to a full room — every contribution moves the HOME BUILD campaign closer to R15 000. EFT details below, one tap to copy.",
    cta: { label: "Donate now", href: "#home-build", primary: true },
  },
  {
    icon: Users,
    title: "Volunteer",
    tagline: "Lend your time & hands",
    body: "Membership is open to all individuals aged 18 and above who support the Organisation's mission and values. Drive, pack, build, mentor — every pair of hands counts.",
    cta: {
      label: "Join on WhatsApp",
      href: "https://wa.me/27783985023?text=Hi%20Beyond%20Self!%20I%20would%20like%20to%20volunteer%20and%20become%20a%20member.",
      primary: false,
      external: true,
    },
  },
  {
    icon: Megaphone,
    title: "Partner",
    tagline: "Bring ideas & resources",
    body: "Businesses, schools and organisations — contribute time, ideas and resources, and let's design a project that changes lives together.",
    cta: {
      label: "Start a conversation",
      href: "https://wa.me/27783985023?text=Hi%20Beyond%20Self!%20We%20would%20like%20to%20explore%20a%20partnership.",
      primary: false,
      external: true,
    },
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get Involved"
          title="Three ways to look beyond yourself"
          sub="Whether you give money, time or ideas — you become part of a grassroots network building a better South Africa."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sun to-ember text-cocoa-deep">
                  <w.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{w.title}</h3>
                <p className="text-sm font-semibold text-ember">{w.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
                <Button
                  asChild
                  className={`mt-6 w-full rounded-full font-semibold ${
                    w.cta.primary
                      ? "bg-ember hover:bg-ember/90"
                      : "border-cocoa/25 bg-white text-cocoa hover:bg-accent hover:text-accent-foreground"
                  }`}
                  variant={w.cta.primary ? "default" : "outline"}
                >
                  <a
                    href={w.cta.href}
                    {...("external" in w.cta && w.cta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <HandHeart className="h-4 w-4" aria-hidden />
                    {w.cta.label}
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
