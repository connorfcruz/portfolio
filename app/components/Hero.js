import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-10 pb-20">
      {/* The headline is the loudest thing on the page. Everything
          else stays quiet so this one element carries the weight. */}
      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="rise max-w-[19ch] text-[2.6rem] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--ink)] sm:text-6xl"
      >
        {profile.headline}
      </h1>

      <p className="rise rise-delay-1 mt-8 max-w-[52ch] text-lg leading-relaxed text-[var(--muted)]">
        {profile.status}
      </p>

      <div className="rise rise-delay-2 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
        <a
          href="#work"
          className="font-medium text-[var(--accent)] underline underline-offset-4"
        >
          See what I've built
        </a>
        <a href={profile.links.github} className="text-[var(--muted)] hover:text-[var(--ink)]">
          GitHub
        </a>
        <a href={profile.links.resume} className="text-[var(--muted)] hover:text-[var(--ink)]">
          Résumé
        </a>
      </div>
    </section>
  );
}
