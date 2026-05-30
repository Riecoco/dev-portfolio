import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const tags = [
  "UX/UI Design",
  "Figma",
  "Prototyping",
  "Usability Testing",
  "Accessibility",
];

export const metadata = {
  title: "UX Case Studies",
  description:
    "UX/UI case studies focused on user research, interface design, prototyping, accessibility, and usability testing.",
};

export default function UXCaseStudiesPage() {
  return (
    <main className="relative min-h-screen pb-16 bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <section className="max-w-3xl mx-auto md:mx-0">
          <p className="text-sm font-medium tracking-wide uppercase text-violet-300">
            Portfolio
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            UX Case Studies
          </h1>
          <p className="mt-4 leading-7 text-zinc-400">
            A selection of UX/UI projects focused on user research, interface
            design, prototyping, accessibility, and usability testing.
          </p>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        <section aria-labelledby="case-studies-heading">
          <h2 id="case-studies-heading" className="sr-only">
            Case studies
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <Link
                href="/ux-case-studies/haarlem-jazz"
                className="block h-full"
              >
                <article className="relative flex h-full flex-col p-5 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-zinc-100 group-hover:text-white font-display sm:text-4xl">
                    Haarlem Jazz
                  </h3>
                  <p className="mt-3 text-base font-medium text-zinc-300">
                    Designing a festival experience from discovery to tickets
                  </p>
                  <p className="mt-4 text-sm leading-7 text-zinc-400 group-hover:text-zinc-300">
                    A UX/UI case study for a festival website experience,
                    covering artist discovery, schedules, ticketing, checkout,
                    saved programs, and selected mobile ticketing prototypes.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-200">
                    Read case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </article>
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
