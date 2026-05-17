// util/github.ts
export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
  topics: string[];
  updated_at: string;
  homepage: string | null;
};

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 },
    } as RequestInit & { next: { revalidate: number } },
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}
