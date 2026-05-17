import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { getRepos, Repo } from "@/util/github";

export const dynamic = "force-dynamic";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Vue: "#41b883",
  "C#": "#178600",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  PHP: "#4F5D95",
  "ASP.NET": "#512bd4",
};

function LanguageDot({ language }: { language: string }) {
  const color = languageColors[language] ?? "#6e7681";
  return (
    <span className="flex items-center gap-1">
      <span
        style={{ backgroundColor: color }}
        className="w-3 h-3 rounded-full inline-block"
      />
      {language}
    </span>
  );
}

function RepoCard({
  repo,
  featured = false,
}: {
  repo: Repo;
  featured?: boolean;
}) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full"
    >
      <article
        className={`relative w-full h-full p-4 ${featured ? "md:p-8" : "md:p-6"}`}
      >
        {/* Language, stars, forks */}
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          {repo.language && <LanguageDot language={repo.language} />}
          <span>☆ {repo.stargazers_count}</span>
          <span>⑂ {repo.forks_count}</span>
        </div>

        {/* Title */}
        <h2
          className={`mt-3 font-bold text-zinc-100 group-hover:text-white font-display ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}
        >
          {repo.name}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 duration-150 text-zinc-400 group-hover:text-zinc-300">
          {repo.description ?? "No description provided."}
        </p>

        {/* Updated date */}
        <p className="mt-3 text-xs text-zinc-500">
          Updated{" "}
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
          }).format(new Date(repo.updated_at))}
        </p>

        {featured && (
          <div className="absolute bottom-4 md:bottom-8">
            <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
              View on GitHub <span aria-hidden="true">&rarr;</span>
            </p>
          </div>
        )}
      </article>
    </a>
  );
}

export default async function ProjectsPage() {
  const repos = await getRepos();
  const published = repos.filter((r) => !r.name.startsWith("."));

  const featured = published[0];
  const top2 = published[1];
  const top3 = published[2];
  const rest = published.slice(3);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A collection of my personal and school projects. Most of these are built during my studies at Inholland.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Featured + top 2 */}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {featured && (
            <Card>
              <RepoCard repo={featured} featured />
            </Card>
          )}
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].filter(Boolean).map((repo) => (
              <Card key={repo.id}>
                <RepoCard repo={repo} />
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* Rest in 3 columns */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {[0, 1, 2].map((col) => (
            <div key={col} className="grid grid-cols-1 gap-4">
              {rest
                .filter((_, i) => i % 3 === col)
                .map((repo) => (
                  <Card key={repo.id}>
                    <RepoCard repo={repo} />
                  </Card>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
