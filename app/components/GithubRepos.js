import { profile } from "../data/profile";

// ─────────────────────────────────────────────────────────────
// OPTIONAL. This pulls your public repos straight from GitHub so
// the page updates itself as you push new work.
//
// Use it *in addition to* the hand-written Projects list, not
// instead of it — your three best projects deserve real
// descriptions, and this is a good "everything else" section.
//
// To use: import it in app/page.js and add <GithubRepos /> below
// <Projects />.
// ─────────────────────────────────────────────────────────────

// Put your GitHub username here (or reuse the one from profile.js).
const USERNAME = "yourusername";

// Repos you don't want listed.
const HIDE = ["yourusername", "test-repo"];

async function getRepos() {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
    // Re-fetch at most once an hour instead of on every page view.
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];

  const repos = await res.json();

  return repos
    .filter((repo) => !repo.fork && !HIDE.includes(repo.name))
    .slice(0, 8);
}

export default async function GithubRepos() {
  const repos = await getRepos();

  // If GitHub is down or rate-limits us, render nothing rather
  // than a broken section.
  if (repos.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-2xl font-semibold tracking-tight"
      >
        Everything else
      </h2>

      <p className="mt-3 max-w-[56ch] leading-relaxed text-[var(--muted)]">
        Smaller experiments and works in progress, pulled live from GitHub.
      </p>

      <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              className="font-medium text-[var(--accent)] underline underline-offset-4"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {repo.description}
              </p>
            )}
            {repo.language && (
              <p className="mt-1 text-sm text-[var(--muted)]">{repo.language}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
