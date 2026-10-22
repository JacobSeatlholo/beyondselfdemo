"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

function VideoCard({
  src,
  poster,
  alt,
  phase,
  title,
  portrait = false,
}: {
  src: string;
  poster: string;
  alt: string;
  phase: string;
  title: string;
  portrait?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <figure
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg ${
        portrait ? "max-w-sm" : ""
      }`}
    >
      <div className={`relative ${portrait ? "aspect-[9/16]" : "aspect-video"}`}>
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 92vw, 480px"
          className={`object-cover transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"}`}
        />
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          preload="none"
          aria-label={alt}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className={`absolute inset-0 h-full w-full bg-black transition-opacity duration-300 ${
            playing ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        {!playing && (
          <button
            type="button"
            onClick={start}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-cocoa-deep/80 via-cocoa-deep/10 to-transparent transition-colors hover:from-cocoa-deep/70"
          >
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-sun text-cocoa-deep shadow-xl transition-transform duration-300 group-hover:scale-110">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-sun/40"
              />
              <Play className="relative ml-1 h-7 w-7 fill-current" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-3 p-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-ember">
            {phase}
          </span>
          <p className="font-display text-lg font-semibold leading-tight">{title}</p>
        </div>
        <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
          Real footage
        </span>
      </figcaption>
    </figure>
  );
}

const SITE_PHOTOS = [
  {
    src: "/media/build-worker.jpg",
    alt: "A community member hard at work with a wheelbarrow on the build site",
  },
  {
    src: "/media/build-site-3.jpg",
    alt: "Concrete blocks stacked and ready for the next phase of construction",
  },
  {
    src: "/media/build-site-2.jpg",
    alt: "The unfinished brick house where two new rooms are being added",
  },
];

export function BuildJourney() {
  return (
    <section id="journey" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="From the Ground Up"
          title="Watch the home take shape"
          sub="No stock photos, no promises on paper — real footage from the build site in Vosloorus, exactly as your support leaves it."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="mx-auto w-full lg:mx-0 lg:justify-self-center">
            <VideoCard
              src="/media/build-foundations.mp4"
              poster="/media/build-foundations-poster.jpg"
              alt="Site walkthrough video showing freshly dug foundation trenches and stacked concrete blocks"
              phase="Phase 1 · Foundations"
              title="Breaking ground"
              portrait
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <VideoCard
                src="/media/build-walls.mp4"
                poster="/media/build-walls-poster.jpg"
                alt="Site walkthrough video showing new block walls rising at the family home"
                phase="Phase 2 · Walls Rising"
                title="Walls going up"
              />
            </Reveal>

            <div className="grid grid-cols-3 gap-4">
              {SITE_PHOTOS.map((p, i) => (
                <Reveal key={p.src} delay={0.15 + i * 0.07}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white shadow-md">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 1024px) 30vw, 200px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
