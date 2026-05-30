"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/nana-yaa-osei-amoako",
    label: "Linkedin",
    handle: "Nana Yaa Osei-Amoako",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:oseiamoakogabrielle@gmail.com",
    label: "Email",
    handle: "oseiamoakogabrielle@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/riecoco",
    label: "Github",
    handle: "riecoco",
  },
];

const frontendSkills = [
  "React",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "JavaScript",
];

const backendSkills = [
  "C#",
  "Java",
  "ASP.NET",
  "Spring Boot",
  "Node.js",
  "PHP",
  "SQL Server",
  "PostgreSQL",
];

const tools = [
  "Git",
  "GitHub",
  "Docker",
  "Azure",
  "Postman",
  "IntelliJ IDEA",
  "Visual Studio",
  "VS Code",
  "Trello",
  "Figma",
  "Photoshop",
  "Illustrator",
];

class Experience {
  name: string;
  company: string;
  years: string;
  location: string;
  description: string | null;

  constructor(
    name: string,
    company: string,
    years: string,
    location: string,
    description: string | null,
  ) {
    this.name = name;
    this.company = company;
    this.years = years;
    this.location = location;
    this.description = description;
  }
}

const experiences = [
  new Experience(
    "Video Producer",
    "Inholland University of Applied Sciences",
    "April 2026 - Present",
    "Haarlem, Netherlands",
    "Creating educational videos for first-year students covering UI/UX principles, including navigation, web accessibility, and Figma tutorials.",
  ),
  new Experience(
    "Promo Student",
    "Inholland University of Applied Sciences",
    "December 2025 - April 2026",
    "Haarlem, Netherlands",
    null,
  ),
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="flex flex-col items-center justify-center px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex w-full max-w-4xl flex-col gap-12 sm:gap-16">
          <section className="space-y-6">
            <h1 className="text-4xl font-bold text-zinc-200 sm:text-5xl">
              About Me
            </h1>
            <div className="grid gap-8 md:grid-cols-[1fr_15rem] md:items-start md:gap-16">
              <p className="text-base leading-8 text-zinc-400">
                Bold of you to assume I can describe myself in a couple of
                paragraphs. Anyway, here's a couple of paragraphs.
                <br />
                <br />
                I'm studying at Inholland University of Applied Sciences, where
                I'm slowly but surely convincing computers to do what I want -
                they're not always on board, but I get there eventually. When
                I'm not buried in coursework, you'll find me chasing high scores
                and perfect combos in whatever rhythm game has currently
                consumed my soul. I am legally required to try any rhythm game I
                see. Well, maybe not legally. But practically.
                <br />
                <br />
                My sleep schedule is best described as a cry for help, I will
                hyperfocus on a bug or a project for 6 hours straight and forget
                to drink water, and I communicate primarily through memes and
                the occasional coherent sentence. That said - when something
                actually matters to me, I go all in. I take "just one more try"
                very seriously, whether that's a game, a problem, or a life
                decision.
              </p>
              <img
                src="/me.jpeg"
                alt="Nana Yaa Osei-Amoako"
                className="mx-auto h-44 w-44 rounded-full object-cover object-center sm:h-52 sm:w-52 md:h-60 md:w-60 md:flex-shrink-0"
              />
            </div>
          </section>

          <Skills />
          <ExperienceTimeline />

          <section>
            <h2 className="mb-5 text-3xl font-bold text-zinc-200">
              Let's Talk!
            </h2>
            <ContactGrid />
          </section>
        </div>
      </div>
    </main>
  );
}

function ContactGrid() {
  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
      {socials.map((s) => (
        <Card key={s.href}>
          <Link
            href={s.href}
            target="_blank"
            className="relative flex min-h-48 flex-col items-center justify-center gap-4 px-5 py-10 duration-700 group sm:px-4 lg:px-6"
          >
            <span
              className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white drop-shadow-orange">
              {s.icon}
            </span>
            <div className="z-10 flex w-full flex-col items-center text-center">
              <span className="w-full break-words text-base font-medium text-zinc-200 group-hover:text-white font-display">
                {s.handle}
              </span>
              <span className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
                {s.label}
              </span>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section className="space-y-4">
      <h2 className="mb-4 text-3xl font-bold text-zinc-200">Skills</h2>
      <SkillCard title="Frontend" skills={frontendSkills} />
      <SkillCard title="Backend" skills={backendSkills} />
      <SkillCard title="Tools" skills={tools} />
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <div className="space-y-4 p-5 sm:p-6">
        <h3 className="text-2xl font-bold text-zinc-200">{title}</h3>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="w-max rounded-md border border-zinc-600 px-2 py-1 text-zinc-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function ExperienceTimeline() {
  return (
    <section className="space-y-4">
      <h2 className="mb-4 text-3xl font-bold text-zinc-200">Experience</h2>
      {experiences.map((exp) => (
        <Card key={exp.name}>
          <div className="space-y-4 p-5 sm:p-6">
            <h3 className="text-2xl font-bold text-zinc-200">{exp.name}</h3>
            <div className="text-lg font-semibold text-zinc-400">
              {exp.company}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-zinc-500">{exp.years}</div>
              <div className="text-sm text-zinc-500">{exp.location}</div>
            </div>
            {exp.description && (
              <div className="text-base leading-7 text-zinc-300">
                {exp.description}
              </div>
            )}
          </div>
        </Card>
      ))}
    </section>
  );
}
