import Image from "next/image";
import {
  Eye,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

/* ---------------------------------- Trust bar --------------------------------- */

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Registered & Compliant",
    body: "A voluntary, non-profit, non-partisan organisation — Reg No. K2025443565.",
  },
  {
    icon: Eye,
    title: "Transparent by Design",
    body: "Every rand is directed to its campaign and reported back to supporters.",
  },
  {
    icon: Target,
    title: "Measurable Outcomes",
    body: "Community-based projects with clear goals and trackable milestones.",
  },
  {
    icon: Users,
    title: "Grassroots & Community-led",
    body: "Built by the people of Vosloorus, for the people of South Africa.",
  },
];

export function TrustBar() {
  return (
    <section aria-label="Why donors can trust Beyond Self" className="bg-cocoa">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-12">
        {TRUST_ITEMS.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="flex gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sun">
                <Icon className="h-5.5 w-5.5" aria-hidden />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-cream">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-cream/65">
                  {body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- Our story --------------------------------- */

const STORY_STATS = [
  { value: "3", label: "Director-led teams" },
  { value: "1", label: "Family home under construction" },
  { value: "1", label: "School partnership: Thabang Primary" },
  { value: "100%", label: "Community-powered" },
];

export function Story() {
  return (
    <section id="story" className="overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-[520px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_60px_-20px_rgba(74,46,31,0.4)]">
              <Image
                src="/media/team-thabang.jpg"
                alt="The Beyond Self team outside Thabang Primary School during a handover"
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-2 w-1/2 rotate-2 overflow-hidden rounded-3xl border-4 border-white shadow-[0_24px_50px_-18px_rgba(74,46,31,0.45)] sm:-right-6">
              <div className="relative aspect-square">
                <Image
                  src="/media/volunteers-boxes.jpg"
                  alt="Beyond Self volunteers carrying donation boxes at the distribution centre"
                  fill
                  sizes="(max-width: 1024px) 46vw, 250px"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-sun/30 blur-2xl"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="It started with neighbours who refused to look away."
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Beyond Self began in Vosloorus, on the East Rand of Gauteng,
                where a circle of friends and neighbours kept seeing the same
                thing: families doing their best with far too little — and a
                community full of people ready to help, if only someone would
                organise the helping.
              </p>
              <p>
                So they did. Small acts of service grew into a registered
                non-profit organisation. Today our volunteers pack gift boxes
                for children, stand beside learners at Thabang Primary School,
                and pick up bricks and mortar to extend a family home — one
                room, one wall, one milestone at a time.
              </p>
              <p>
                True to our name, we believe change begins when ordinary people
                look beyond themselves. Our constitution commits us to building
                a grassroots network of socially conscious citizens — people who
                contribute their <strong className="font-semibold text-foreground">time, ideas and resources</strong> to
                solve the social, economic and environmental challenges facing
                South Africa.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {STORY_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-ember">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium leading-snug text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Vision & mission ------------------------------ */

export function VisionMission() {
  return (
    <section id="vision" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who We Are"
          title="Vision & Mission"
          sub="Taken straight from our constitution — the promises we hold ourselves to."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg sm:p-10">
              <div
                aria-hidden
                className="sun-rays pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sun to-ember text-cocoa-deep">
                <Eye className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">Our Vision</h3>
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-cocoa sm:text-[1.35rem]">
                “A South Africa transformed by active citizens who work together
                to create a more just, equal, and empowered society.”
              </blockquote>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                — Constitution of Beyond Self, Clause 3
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf/10 text-leaf-deep">
                <HandHeart className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">Our Mission</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                To build a grassroots network of socially conscious citizens who:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Contribute time, ideas, and resources;",
                  "Engage in projects that address pressing social, economic, and environmental challenges;",
                  "Inspire a culture of collective responsibility and ethical leadership.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-sun to-ember"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                — Constitution of Beyond Self, Clause 4
              </p>
            </article>
          </Reveal>
        </div>

        {/* Objectives */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Raise Funds, Deliver Projects",
              body: "Raise funds and implement community-based projects with measurable outcomes.",
            },
            {
              icon: HeartHandshake,
              title: "Live Our Values",
              body: "Foster values of empathy, transparency, accountability, and service.",
            },
            {
              icon: Lightbulb,
              title: "Share Ideas & Solutions",
              body: "Provide a platform for the exchange of ideas and solutions for South Africa's key challenges.",
            },
          ].map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h4 className="text-[15px] font-semibold">{title}</h4>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Programmes --------------------------------- */

const PROGRAMMES = [
  {
    icon: ShieldCheck,
    image: "/media/build-site-1.jpg",
    alt: "Bricks and building blocks stacked at the family home extension site",
    title: "Shelter & Home Builds",
    body: "Extending homes for families in need — right now, we are adding two rooms to a single-room home for a family of four, giving them a safer, more comfortable place to live.",
    tag: "Active project",
  },
  {
    icon: School,
    image: "/media/school-group.jpg",
    alt: "Beyond Self team with learners at Thabang Primary School",
    title: "Learner Support",
    body: "Walking beside schools like Thabang Primary School with learner support, motivation and practical care — because a child who believes in themselves can learn anything.",
    tag: "School partnership",
  },
  {
    icon: Sparkles,
    image: "/media/box-distribution.jpg",
    alt: "A volunteer handing gift boxes to learners in a school hall",
    title: "Community Gift Drives",
    body: "Collecting, packing and handing over gift boxes that remind a child they are seen, valued and loved — small boxes, giant smiles.",
    tag: "Recurring drive",
  },
  {
    icon: MessagesSquare,
    image: null,
    alt: null,
    title: "Active Citizenship Platform",
    body: "A space where members exchange ideas and solutions for South Africa's key challenges — and turn them into action through service and ethical leadership.",
    tag: "Membership",
  },
];

export function Programmes() {
  return (
    <section id="what-we-do" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Programmes that meet real needs"
          sub="From bricks and mortar to boxes and encouragement — every programme is hands-on, community-led and measured against real outcomes."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                {p.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt ?? ""}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-cocoa via-cocoa-deep to-cocoa">
                    <div aria-hidden className="sun-rays absolute inset-0" />
                    <MessagesSquare className="relative h-14 w-14 text-sun" aria-hidden />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                    <p.icon className="h-3.5 w-3.5" aria-hidden />
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
