import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-2xl font-semibold tracking-tight"
      >
        Get In Touch
      </h2>

      <p className="mt-4 max-w-[56ch] leading-relaxed text-[var(--muted)]">
        I'm open to internships, work, and any questions. Please reach out via the provided email.
      </p>

      <a
        href={`mailto:${profile.links.email}`}
        style={{ fontFamily: "var(--font-display)" }}
        className="mt-6 inline-block text-2xl font-semibold tracking-tight text-[var(--accent)] underline underline-offset-[6px] sm:text-3xl"
      >
        {profile.links.email}
      </a>

      <div className="mt-8 flex gap-6 text-[15px] text-[var(--muted)]">
        <a href={profile.links.github} className="hover:text-[var(--ink)]">
          GitHub
        </a>
        <a href={profile.links.linkedin} className="hover:text-[var(--ink)]">
          LinkedIn
        </a>
        <a href={profile.links.resume} className="hover:text-[var(--ink)]">
          Résumé
        </a>
      </div>
    </section>
  );
}
