import { site } from "@/lib/site";

export type GitHubRepo = {
  id: number;
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  homepage: string;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  pushedAt: string;
};

type GitHubApiRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
};

export function getGitHubUsername() {
  return process.env.GITHUB_USERNAME?.trim() || site.githubUsername;
}

export function formatRepoTitle(name: string) {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Hanya URL http(s) valid — dipakai sebagai live demo di GitHub Homepage field */
export function normalizeLiveDemoUrl(url: string | null | undefined): string | null {
  if (!url?.trim()) return null;

  const trimmed = url.trim();
  if (trimmed === "#") return null;

  try {
    const parsed = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    if (!parsed.hostname) return null;
    return parsed.href;
  } catch {
    return null;
  }
}

export function demoHostname(homepage: string) {
  try {
    return new URL(homepage).hostname.replace(/^www\./, "");
  } catch {
    return homepage;
  }
}

export async function fetchGitHubRepos(limit = 9): Promise<GitHubRepo[]> {
  const username = getGitHubUsername();
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "reydev-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=pushed&per_page=100&type=owner`,
    { headers, cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}`);
  }

  const data = (await res.json()) as GitHubApiRepo[];

  return data
    .filter((repo) => !repo.fork && !repo.archived && !repo.private)
    .map((repo) => {
      const homepage = normalizeLiveDemoUrl(repo.homepage);
      if (!homepage) return null;

      return {
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description?.trim() || "Proyek web dengan demo live.",
        htmlUrl: repo.html_url,
        homepage,
        language: repo.language,
        topics: (repo.topics ?? []).slice(0, 4),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        pushedAt: repo.pushed_at,
      };
    })
    .filter((repo): repo is GitHubRepo => repo !== null)
    .slice(0, limit);
}
