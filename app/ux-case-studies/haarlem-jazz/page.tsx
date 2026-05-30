import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

const imageBase = "/images/case-studies/haarlem-jazz";

const meta = [
  ["Role", "Lead UX/UI Designer for Haarlem Jazz"],
  [
    "Additional work",
    "Shopping cart, saved program, checkout/payment, selected mobile ticketing prototypes",
  ],
  ["Tools", "Figma, FigJam, WCAG analysis, usability testing"],
  [
    "Project type",
    "UX/UI design, event website, ticketing flow, mobile ticketing prototype",
  ],
];

const insights = [
  {
    title: "Visitors need practical decision-making information.",
    text: "Users need to compare artists, dates, times, venues, prices, and availability before buying.",
  },
  {
    title: "International visitors need clear and consistent content.",
    text: "The festival website needed to be understandable in English and easy to scan.",
  },
  {
    title: "The experience needed to support browsing and task completion.",
    text: "Some users arrive looking for inspiration, while others want to quickly save events or buy tickets.",
  },
];

type CaseStudyImage = {
  src: string;
  alt: string;
  caption: string;
  mobile?: boolean;
};

type DesignSection = {
  title: string;
  text: string;
  images: CaseStudyImage[];
};

const designSections: DesignSection[] = [
  {
    title: "Homepage as both promotion and entry point",
    text: "The homepage introduces the mood of Haarlem Jazz while giving users direct access to artists, schedule previews, ticket offers, and location information. This keeps the page useful for both casual browsing and quick decision-making.",
    images: [
      {
        src: `${imageBase}/01_homepage_hero_about_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz homepage hero and about section",
        caption: "Hero and about sections establish the event identity and orient visitors quickly.",
      },
      {
        src: `${imageBase}/02_homepage_artists_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz homepage artist section",
        caption: "Artist previews help visitors move from browsing into deeper discovery.",
      },
      {
        src: `${imageBase}/03_homepage_schedule_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz homepage schedule preview",
        caption: "Schedule previews make dates and performance options visible early.",
      },
      {
        src: `${imageBase}/04_homepage_special_offers_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz homepage ticket offers section",
        caption: "Ticket offers connect the promotional page to booking decisions.",
      },
    ],
  },
  {
    title: "Schedule designed for comparison",
    text: "The schedule presents day filters, event rows, prices, seats, and ticket actions close together. This helps visitors compare options without opening multiple pages.",
    images: [
      {
        src: `${imageBase}/schedule_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz schedule showing day filters and ticket actions",
        caption: "The schedule groups comparison details and ticket actions in one scannable view.",
      },
    ],
  },
  {
    title: "Artist pages built around discovery and decision-making",
    text: "The brief required artist detail pages, so the design focused on making those pages useful. Artist descriptions, performance details, career highlights, and the playable Figma media player help users understand the artist before booking.",
    images: [
      {
        src: `${imageBase}/01_artist_detail_top_callouts.png`,
        alt: "Annotated screenshot of a Haarlem Jazz artist detail page with playable media prototype",
        caption: "The top of the artist page combines context, performance details, and a playable media prototype in Figma.",
      },
      {
        src: `${imageBase}/02_artist_detail_middle_callouts.png`,
        alt: "Annotated screenshot of a Haarlem Jazz artist detail page showing details and related content",
        caption: "Supporting content gives visitors more reasons to decide whether an artist fits their plans.",
      },
    ],
  },
  {
    title: "Location pages support real-world planning",
    text: "The location pages combine venue identity, contact details, performances, transport information, maps, and FAQs. This helps users prepare for the visit instead of only reading promotional content.",
    images: [
      {
        src: `${imageBase}/03_venue_top_callouts.png`,
        alt: "Annotated screenshot of the Het Patronaat location page with venue information",
        caption: "Venue details help visitors understand where they are going and what to expect.",
      },
      {
        src: `${imageBase}/04_venue_performances_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz venue page performance list",
        caption: "Performance lists connect the venue page back to ticket decisions.",
      },
      {
        src: `${imageBase}/05_venue_map_transport_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz venue map and transport information",
        caption: "Map and transport details support planning before the festival visit.",
      },
      {
        src: `${imageBase}/06_venue_faq_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz venue FAQ section",
        caption: "FAQs keep practical answers close to the location content.",
      },
    ],
  },
  {
    title: "Cart and saved program connect interest to action",
    text: "The cart lets users review selected tickets, edit quantities, remove items, and check the total before payment. The saved program supports planning by keeping selected or bought programs organized. Empty states guide users back to browsing instead of leaving them stuck.",
    images: [
      {
        src: `${imageBase}/01_cart_empty_callouts.png`,
        alt: "Annotated screenshot of the empty shopping cart state",
        caption: "The empty cart gives users a clear route back to browsing.",
      },
      {
        src: `${imageBase}/02_cart_filled_callouts_revised.png`,
        alt: "Annotated screenshot of the shopping cart showing selected tickets and checkout summary",
        caption: "The filled cart keeps ticket details, quantity changes, and totals together.",
      },
      {
        src: `${imageBase}/03_cart_added_feedback_callouts_revised.png`,
        alt: "Annotated screenshot of shopping cart feedback after adding a ticket",
        caption: "Feedback confirms the action and keeps users oriented.",
      },
      {
        src: `${imageBase}/saved_programs_callouts.png`,
        alt: "Annotated screenshot of the saved programs page",
        caption: "Saved programs support planning across selected and purchased events.",
      },
    ],
  },
  {
    title: "Checkout makes user choice visible",
    text: "The checkout flow gives users a choice between account checkout and guest checkout. The design explains the benefit of an account while still allowing users to continue with minimal information. The privacy note makes the data choice more transparent.",
    images: [
      {
        src: `${imageBase}/checkout_path_callouts.png`,
        alt: "Annotated screenshot of the checkout path showing account and guest checkout",
        caption: "Checkout options make the user's path visible before payment.",
      },
      {
        src: `${imageBase}/payment_page_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz payment page",
        caption: "The payment page keeps order details and payment steps close together.",
      },
      {
        src: `${imageBase}/purchase_success_callouts.png`,
        alt: "Annotated screenshot of the Haarlem Jazz purchase success page",
        caption: "The confirmation page closes the purchase and points users toward their tickets.",
      },
    ],
  },
  {
    title: "Mobile ticketing supports attendance",
    text: "The selected mobile ticketing prototype focuses on ticket access. Users can view upcoming tickets, open QR tickets, download tickets, and export tickets to their calendar.",
    images: [
      {
        src: `${imageBase}/mobile_my_tickets_callouts.png`,
        alt: "Annotated screenshot of the mobile ticket wallet prototype",
        caption: "The mobile ticket wallet helps users find upcoming tickets quickly.",
        mobile: true,
      },
      {
        src: `${imageBase}/mobile_ticket_detail_callouts.png`,
        alt: "Annotated screenshot of the mobile QR ticket screen",
        caption: "The ticket detail screen focuses on the QR code and attendance actions.",
        mobile: true,
      },
    ],
  },
];

export const metadata = {
  title: "Haarlem Jazz UX Case Study",
  description:
    "A UX/UI case study for a festival experience from discovery to tickets.",
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-6">
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
  mobile = false,
}: {
  src: string;
  alt: string;
  caption: string;
  mobile?: boolean;
}) {
  return (
    <figure className={mobile ? "max-w-sm mx-auto" : "w-full"}>
      <div
        className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70 ${
          mobile ? "aspect-[9/16]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={mobile ? "(min-width: 768px) 384px, 90vw" : "(min-width: 1024px) 960px, 92vw"}
          className="object-contain"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HaarlemJazzCaseStudyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-zinc-950 via-zinc-900 to-black text-zinc-100">
      <header className="relative isolate overflow-hidden border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link
            href="/ux-case-studies"
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
              Haarlem Jazz
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Designing a festival experience from discovery to tickets.
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
        <Section title="Overview">
          <p>
            Haarlem Jazz was part of The Festival, a four-day cultural event
            concept designed to promote Haarlem through music, food, history,
            dance, and storytelling. Each event needed its own identity while
            still fitting into one shared festival platform.
          </p>
          <p>
            I led the design of the Haarlem Jazz section. My goal was to help
            visitors discover artists, compare performances, understand ticket
            options, and move from interest to booking with less friction. As
            the project developed, my work expanded into the wider booking
            experience through the shopping cart, saved program,
            checkout/payment prototypes, and selected mobile ticketing screens.
          </p>
          <p>
            The final prototype connected the visitor journey from discovery to
            attendance: users could explore artists, compare schedules, save or
            buy tickets, and access ticket information through a mobile
            ticketing prototype.
          </p>
        </Section>

        <Section title="Problem">
          <p>
            The client needed a modern, accessible festival website for an
            international audience. For Haarlem Jazz, the challenge was not only
            to make the event look exciting, but to help visitors answer
            practical questions quickly: who is performing, when they are
            playing, where the event takes place, how much tickets cost, and how
            to buy or save tickets.
          </p>
          <p>
            Research into the existing VisitHaarlem experience showed that some
            pages were informative but not always decision-focused. Ticket
            information, maps, accessibility details, and FAQs were not always
            easy to find. For a festival experience, this could make visitors
            work too hard before deciding whether to attend.
          </p>
        </Section>

        <Section title="My Role">
          <p>
            I designed the Haarlem Jazz homepage, schedule page, artist detail
            pages, and location pages. I also designed the shopping cart, saved
            program, checkout/payment prototypes, and selected mobile ticketing
            prototypes. I worked with feedback from the client, teachers, and
            team members, and adjusted the designs through multiple iterations.
          </p>
        </Section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display">
            Research Insights
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((insight) => (
              <article
                key={insight.title}
                className="rounded-xl border border-zinc-800 bg-black/30 p-5"
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {insight.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {insight.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display">
              Design Decisions
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
              I organized the interface around decisions visitors needed to
              make: discovering artists, comparing events, planning a visit,
              saving options, and completing ticket purchase.
            </p>
          </div>
          {designSections.map((section) => (
            <article key={section.title} className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold text-zinc-100">
                  {section.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-zinc-400">
                  {section.text}
                </p>
              </div>
              <div
                className={
                  section.images.some((image) => image.mobile)
                    ? "grid gap-6 md:grid-cols-2"
                    : "grid gap-6"
                }
              >
                {section.images.map((image) => (
                  <CaseImage key={image.src} {...image} />
                ))}
              </div>
            </article>
          ))}
        </section>

        <Section title="Usability Testing">
          <p>
            The prototype was tested through task-based scenarios. For Haarlem
            Jazz, users needed to find which bands performed on Saturday, book
            specific tickets, add them to the personal program, and show the
            program's current content. These tasks helped check whether the
            schedule, ticket actions, cart, and saved program were
            understandable as a flow.
          </p>
          <p>
            Feedback and testing influenced improvements such as clearer
            navigation, more visible ticket actions, better empty states, and
            more direct paths between discovery, saving, and checkout.
          </p>
        </Section>

        <Section title="Outcome">
          <p>
            The final Haarlem Jazz experience supported the full visitor
            journey. Users could discover artists, compare performances,
            understand ticket options, view venue information, save or buy
            tickets, and access ticket information on mobile. The project became
            more than a set of event pages: it became a connected event
            experience across discovery, planning, booking, and attendance.
          </p>
        </Section>

        <Section title="Reflection">
          <p>
            This project taught me to design for different visitor mindsets. A
            festival website has to support people who want to browse and people
            who want to complete a task quickly. I also learned how much small
            interaction details matter, such as empty states, visible ticket
            actions, clickable areas, and clear page structure.
          </p>
          <p>
            If I continued the project, I would refine table accessibility, test
            the checkout flow with more users, and continue improving clickable
            states and mobile ticketing interactions.
          </p>
        </Section>
      </div>
    </main>
  );
}
