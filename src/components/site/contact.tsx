"use client";

import { useState } from "react";
import {
  Loader2,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./reveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("635 Ingulule Crescent Ext 3, Vosloorus, Gauteng");

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          sub="Questions about the build, donations or volunteering? The team answers personally."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sun to-ember text-cocoa-deep">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">Visit us</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  635 Ingulule Crescent Ext 3,
                  <br />
                  Vosloorus, Gauteng, South Africa
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ember">
                  <Navigation className="h-4 w-4" aria-hidden />
                  Get directions
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+27783985023"
                  className="group block rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf/10 text-leaf-deep">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">Call us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">078 398 5023</p>
                </a>
                <a
                  href="https://wa.me/27783985023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf/10 text-leaf-deep">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">WhatsApp</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Fastest reply</p>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-border bg-cocoa p-6 text-cream shadow-md">
                <h3 className="font-display text-lg font-semibold">
                  Area of service
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/70">
                  Rooted in Vosloorus, serving greater Ekurhuleni — and
                  welcoming partners from anywhere in South Africa.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  toast.success("Thank you! Your message has been captured.", {
                    description:
                      "This is a demo form — the team will be reachable on 078 398 5023 and WhatsApp while email is being set up.",
                  });
                  (e.target as HTMLFormElement).reset();
                }, 900);
              }}
            >
              <h3 className="font-display text-2xl font-semibold">Send a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We usually respond within a day.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="rounded-xl" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone or email</Label>
                  <Input
                    id="phone"
                    name="contact"
                    placeholder="How do we reach you?"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="mt-4 grid gap-2">
                <Label htmlFor="topic">Topic</Label>
                <select
                  id="topic"
                  name="topic"
                  className="h-10 rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue="The Home Build"
                >
                  <option>The Home Build</option>
                  <option>Donating</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="mt-4 grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how you'd like to help, or what you'd like to know…"
                  rows={5}
                  required
                  className="rounded-xl"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="mt-6 w-full rounded-full bg-ember py-6 text-base font-semibold shadow-[0_10px_30px_-8px_rgba(224,122,42,0.55)] hover:bg-ember/90"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden />
                    Send message
                  </>
                )}
              </Button>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
                Demo form — while email is being set up, please use WhatsApp or
                call 078 398 5023 for an immediate response.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
