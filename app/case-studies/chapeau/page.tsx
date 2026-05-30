import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

const imageBase = "/images/case-studies/chapeau";

const meta = [
  ["Role", "UX/UI Designer"],
  ["Project type", "School UX project"],
  ["Tools", "Figma, research, user flows, prototyping"],
  ["Focus", "Kitchen and bar order management"],
];

const problems = [
  {
    title: "Orders needed clearer priority",
    text: "Kitchen and bar staff needed to quickly see which tickets had been waiting the longest.",
  },
  {
    title: "Courses needed clearer structure",
    text: "Starters, mains, entremets, and desserts had to be prepared and served in the correct sequence.",
  },
  {
    title: "Kitchen and bar needed different information",
    text: "The kitchen needed food and course details, while the bar needed drink tickets and linked drink information.",
  },
];

const insights = [
  {
    title: "Busy staff need fewer unnecessary interactions.",
    impact:
      "I simplified the status flow and focused the interface on the most useful handoff states.",
  },
  {
    title: "Kitchen and bar work differently.",
    impact:
      "I created separate views so each role only sees the information they need.",
  },
  {
    title: "Linked drinks need better timing.",
    impact:
      "I added linked drink information so the bar can prepare drinks connected to a course at the right moment.",
  },
];

const decisions = [
  {
    title: "Separate Kitchen and Bar views",
    text: "Kitchen and bar staff do not need the same information. I separated the views so each role could focus on its own tasks without extra visual noise.",
  },
  {
    title: "Use ticket-style order cards",
    text: "I used ticket-style cards because they match the way restaurant staff already think about orders. Each card groups the table, timer, items, notes, and status in one place.",
  },
  {
    title: "Group items by course",
    text: "Items are grouped under course headings such as Starters, Mains, Entremets, and Desserts. This helps staff understand the preparation sequence more quickly.",
  },
  {
    title: "Simplify the status flow",
    text: "Earlier versions included more manual preparation states. I simplified the flow because kitchen and bar staff need to work quickly and should not have to update the screen too often during service. The final design focuses on clear visibility and the most important handoff moments.",
  },
];

export const metadata = {
  title: "Restaurant Chapeau UX Case Study",
  description:
    "A role-based restaurant ordering interface for kitchen and bar staff.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display">
        {title}
      </h2>
      <div className="space-y-5 text-base leading-8 text-zinc-400">
        {children}
      </div>
    </section>
  );
}

function CaseImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="w-full">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 960px, 92vw"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function ChapeauCaseStudyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-zinc-950 via-zinc-900 to-black text-zinc-100">
      <header className="relative isolate overflow-hidden border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 duration-200 hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            UX Case Studies
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 duration-200 hover:text-zinc-100"
          >
            Home
          </Link>
        </div>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div>
            <p className="text-sm font-medium tracking-wide uppercase text-violet-300">
              UX/UI Case Study
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              Designing a Kitchen & Bar Order Management System for Restaurant
              Chapeau
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              A role-based restaurant ordering interface that helps kitchen and
              bar staff track orders, manage preparation status, and coordinate
              linked drinks with less confusion.
            </p>
          </div>
          <dl className="grid gap-4 rounded-xl border border-zinc-800 bg-black/30 p-5 md:p-6">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {label}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-zinc-300">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </header>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-14 lg:px-8 lg:py-20">
        <CaseImage
          src={`${imageBase}/kitchen-final-callouts.png`}
          alt="Annotated final kitchen dashboard for Restaurant Chapeau showing order tickets, courses, timing, notes, and preparation status"
          caption="The kitchen view makes food orders, course structure, notes, and timing easier to scan during service."
        />

        <Section title="Context">
          <p>
            Restaurant Chapeau needed a digital ordering system for a small
            restaurant with 10 tables. The system had to support staff during
            service by making orders, preparation status, and role
            responsibilities easier to understand. My part of the project
            focused on Scenario 3: helping kitchen and bar staff manage orders
            that are ready to be prepared and served.
          </p>
        </Section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display">
            The Problem
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-xl border border-zinc-800 bg-black/30 p-5"
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {problem.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display">
            Research Insights
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((insight, index) => (
              <article
                key={insight.title}
                className="rounded-xl border border-zinc-800 bg-black/30 p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-violet-300">
                  Insight {index + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {insight.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-300">
                  Design impact
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  {insight.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display">
            Design Decisions
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {decisions.map((decision, index) => (
              <article
                key={decision.title}
                className="rounded-xl border border-zinc-800 bg-black/30 p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-violet-300">
                  Design decision {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-100">
                  {decision.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {decision.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <Section title="Iteration">
          <p>
            The first version explored a more generic expediter layout. It
            helped me test how order tickets, status controls, and filters could
            work, but it also showed that the interface needed clearer role
            separation and a simpler status flow. Feedback from this stage led
            to the final kitchen and bar views.
          </p>
          <CaseImage
            src={`${imageBase}/before-version-callouts.png`}
            alt="Annotated earlier expediter-style order management interface for Restaurant Chapeau showing feedback callouts"
            caption="The earlier version helped test ticket structure, filters, and status controls before the interface was split into clearer role-based views."
          />
        </Section>

        <Section title="Final Kitchen View">
          <p>
            The final kitchen view focuses on food orders. Tickets are grouped
            by table and course, with visible notes and large timing information
            to support quick scanning during service.
          </p>
          <CaseImage
            src={`${imageBase}/kitchen-final-callouts.png`}
            alt="Annotated final kitchen view for Restaurant Chapeau showing food tickets grouped by table and course"
            caption="The final kitchen dashboard supports fast scanning of food tickets, course groups, notes, and timing."
          />
        </Section>

        <Section title="Final Bar View">
          <p>
            The final bar view focuses only on drinks. This keeps the
            bartender's interface simpler and separates drink preparation from
            kitchen food preparation.
          </p>
          <CaseImage
            src={`${imageBase}/bar-final-callouts.png`}
            alt="Annotated final bar view for Restaurant Chapeau showing drink tickets and linked drink information"
            caption="The bar dashboard keeps drink preparation focused and shows linked drink information at the right moment."
          />
        </Section>

        <Section title="Reflection">
          <p>
            This project taught me that UX for operational environments is
            different from designing for casual browsing. In a restaurant, the
            interface needs to be fast, clear, role-specific, and practical. I
            learned to design around real working conditions: busy staff,
            limited attention, quick decisions, and the need to avoid mistakes.
          </p>
          <p>
            If I continued this project, I would test the prototype with actual
            restaurant staff and improve the status-change interaction based on
            how quickly they understand it.
          </p>
        </Section>
      </div>
    </main>
  );
}
