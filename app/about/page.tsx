"use client";
import { Contact, Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

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

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="flex flex-col items-center justify-center px-4 py-32">
        <div className="w-full max-w-4xl flex flex-col gap-16">
			<div className="flex flex-col space-y-4">
				<div className="text-5xl font-bold text-zinc-200">About Me</div>
				<div className="flex flex-row gap-16">
					<p className="text-md text-zinc-400">
						Bold of you to assume I can describe myself in a couple of paragraphs. Anyway, here's a couple of paragraphs.
						<br />
						<br />
						I'm studying at Inholland University of Applied Sciences, where I'm slowly but surely convincing computers to do what I want — they're not always on board, but I get there eventually.
						When I'm not buried in coursework, you'll find me chasing high scores and perfect combos in whatever rhythm game has currently consumed my soul. I am legally required to try any rhythm game I see. Well, maybe not legally. But practically.
						<br />
						<br />
						My sleep schedule is best described as a cry for help, I will hyperfocus on a bug or a project for 6 hours straight and forget to drink water, and I communicate primarily through memes and the occasional coherent sentence.
						That said — when something actually matters to me, I go all in. I take "just one more try" very seriously, whether that's a game, a problem, or a life decision.
				    </p>
					<img
					src="/me.jpeg"
					alt="Me"
					className="w-60 h-60 rounded-full object-cover object-center flex-shrink-0"
					/>
				</div>
			</div>

			<Skills />

			<ExperienceTimeline />
			
			<div>
				<div className="text-3xl font-bold text-zinc-200 mb-5">Let's Talk!</div>
          		<ContactGrid />
			</div>
        </div>
      </div>
	</div>
  );
}

function ContactGrid() {
	return (
			<div className="grid w-full max-w-4xl grid-cols-1 gap-4 mx-auto mt-32 sm:mt-0 sm:grid-cols-3">
				{socials.map((s) => (
					<Card key={s.href}>
						<Link
							href={s.href}
							target="_blank"
							className="relative flex flex-col items-center gap-4 duration-700 group py-16 px-6"
						>
							<span
							className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
							aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
							{s.icon}
							</span>
							<div className="z-10 flex flex-col items-center text-center w-full">
							<span className="text-base font-medium text-zinc-200 group-hover:text-white font-display break-words w-full">
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
	)
}

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

function Skills() {
	return (
		<div className="space-y-4">
			<div className="text-3xl font-bold text-zinc-200 mb-4">Skills</div>
			<Card>
				<div className="p-6 space-y-4">
					<div className="text-2xl font-bold text-zinc-200">Frontend</div>
					<div className="flex flex-wrap gap-4">
						{frontendSkills.map((skill) => (
							<div key={skill} className="text-zinc-400 border rounded-md border-zinc-600 px-2 py-1 w-max">
								{skill}
							</div>
						))}
					</div>
				</div>
			</Card>
			<Card>
				<div className="p-6 space-y-4">
					<div className="text-2xl font-bold text-zinc-200">Backend</div>
					<div className="flex flex-wrap gap-4">
						{backendSkills.map((skill) => (
							<div key={skill} className="text-zinc-400 border rounded-md border-zinc-600 px-2 py-1 w-max">
								{skill}
							</div>
						))}
					</div>
				</div>
			</Card>
			<Card>
				<div className="p-6 space-y-4">
					<div className="text-2xl font-bold text-zinc-200">Tools</div>
					<div className="flex flex-wrap gap-4">
						{tools.map((tool) => (
							<div key={tool} className="text-zinc-400 border rounded-md border-zinc-600 px-2 py-1 w-max">
								{tool}
							</div>
						))}
					</div>
				</div>
			</Card>
		</div>
	)
}

class Experience {
	name: string;
	company: string;
	years: string;
	location: string;
	description: string | null;

	constructor(name: string, company: string, years: string, location: string, description: string | null) {
		this.name = name;
		this.company = company;
		this.years = years;
		this.location = location;
		this.description = description;
	}
}

const experiences = [
	new Experience("Video Producer", "Inholland University of Applied Sciences", "April 2026 - Present", "Haarlem, Netherlands", "Creating educational videos for first-year students covering UI/UX principles, including navigation, web accessibility, and Figma tutorials."),
	new Experience("Promo Student", "Inholland University of Applied Sciences", "December 2025 - April 2026", "Haarlem, Netherlands", null),
];

function ExperienceTimeline() {
	return (
		<div className="space-y-4">
			<div className="text-3xl font-bold text-zinc-200 mb-4">Experience</div>
			{experiences.map((exp) => (
				<Card key={exp.name}>
					<div className="p-6 space-y-4">
						<div className="text-2xl font-bold text-zinc-200">{exp.name}</div>
						<div className="text-lg font-semibold text-zinc-400">{exp.company}</div>
						<div className="flex flex-col gap-2">
							<div className="text-sm text-zinc-500">{exp.years}</div>
							<div className="text-sm text-zinc-500">{exp.location}</div>
						</div>
						{exp.description && (
							<div className="text-md text-zinc-300">{exp.description}</div>
						)}
					</div>
				</Card>
			))}
		</div>
	)
}
