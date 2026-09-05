import { profile } from "../data/profile";

export default function About() {
  return (
    // Tinted band
    <section id="about" className="bg-[var(--band)] py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl font-semibold tracking-tight"
        >
          About
        </h2>

        <div className="mt-8 grid gap-12 sm:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="max-w-[60ch] leading-relaxed text-[var(--ink)]">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="space-y-5">
            {profile.skills.map((skill) => (
              <div key={skill.group}>
                <dt className="text-sm font-medium text-[var(--ink)]">
                  {skill.group}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  {skill.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
