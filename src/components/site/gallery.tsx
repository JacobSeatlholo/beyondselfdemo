import Image from "next/image";
import { HeartHandshake, Eye, Scale, HandHelping } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

/* --------------------------------- Gallery --------------------------------- */

const GALLERY = [
  {
    src: "/media/team-thabang.jpg",
    alt: "The Beyond Self team standing outside Thabang Primary School",
    caption: "Our team at Thabang Primary School",
    span: "sm:col-span-2",
  },
  {
    src: "/media/learners-boxes.jpg",
    alt: "Learners holding their gift boxes in the school hall",
    caption: "Learners receiving their boxes",
    span: "",
  },
  {
    src: "/media/boy-gift.jpg",
    alt: "A boy smiling as he receives his gift box",
    caption: "One box. One very happy boy.",
    span: "",
  },
  {
    src: "/media/box-distribution.jpg",
    alt: "A volunteer handing boxes to learners queuing in the hall",
    caption: "Handover day at the school",
    span: "",
  },
  {
    src: "/media/volunteers-boxes.jpg",
    alt: "Two volunteers carrying donation boxes in the preparation hall",
    caption: "Volunteers behind the scenes",
    span: "",
  },
  {
    src: "/media/school-group.jpg",
    alt: "Learners in uniform gathered on the school steps with their boxes",
    caption: "Thabang Primary School community",
    span: "sm:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="impact" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Impact"
          title="Moments that keep us going"
          sub="Every photograph is a promise kept — to a learner, a child, a family. This is what community-powered change looks like."
        />

        <div className="mt-12 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-3 lg:auto-rows-[220px]">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06} className={g.span}>
              <figure className="group relative h-full w-full overflow-hidden rounded-3xl border-2 border-white shadow-md">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/85 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-cream drop-shadow">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Values ---------------------------------- */

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Empathy",
    body: "We serve with open hearts — listening first, and meeting families where they are.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "Open books, honest updates. Supporters always know where their contribution goes.",
  },
  {
    icon: Scale,
    title: "Accountability",
    body: "Directors personally accountable for every decision and every rand entrusted to us.",
  },
  {
    icon: HandHelping,
    title: "Service",
    body: "Leadership means showing up — with sleeves rolled, in the dust and the dirt.",
  },
];

export function Values() {
  return (
    <section id="values" className="bg-sand py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Values"
          title="The values we live by"
          sub="Clause 5 of our constitution commits us to fostering empathy, transparency, accountability and service — so we made them the four pillars of everything we do."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="h-full">
              <div className="group h-full rounded-3xl border border-border bg-card p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sun/90 to-ember text-cocoa-deep shadow-[0_10px_24px_-8px_rgba(224,122,42,0.55)] transition-transform group-hover:scale-110">
                  <v.icon className="h-6.5 w-6.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
