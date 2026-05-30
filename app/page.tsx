import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Download Resume", href: "/resume.pdf" },
  { name: "Projects", href: "/projects" },
  { name: "UX Case Studies", href: "/ux-case-studies" },
  { name: "About", href: "/about" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-4 py-10 sm:py-12">
      <nav className="my-8 animate-fade-in sm:my-12 md:my-16">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 max-w-5xl px-0.5 py-3.5 text-center text-4xl font-bold leading-tight text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl">
        Nana Yaa Osei-Amoako
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 max-w-xl text-center animate-fade-in sm:my-12 md:my-16 md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-sm leading-7 text-zinc-500">
          I'm a thoughtful, creative student with design and programming skills. I'm seeking an internship opportunity within full stack development to cultivate experience and create innovative technological solutions.
        </h2>
      </div>
    </main>
  );

}
