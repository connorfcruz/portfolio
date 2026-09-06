import Image from "next/image";
import { profile } from "../data/profile";

/* Credit to Claude Opus 5 for code formatting */

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-16">
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-2xl font-semibold tracking-tight"
      >
        Selected work
      </h2>

      {/* A list, not a card grid. Rows let each project take the
          space its description needs instead of forcing them all
          into identical boxes. */}
      <ul className="mt-8">
        {profile.projects.map((project) => (
          <li
            key={project.title}
            className="border-t border-[var(--rule)] py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-xl font-semibold tracking-tight"
              >
                {project.title}
              </h3>
              {/* The year is real information, so it earns its place
                  as a structural marker. */}
              <span className="shrink-0 text-sm text-[var(--muted)]">
                {project.year}
              </span>
            </div>

            <p className="mt-3 max-w-[62ch] leading-relaxed text-[var(--muted)]">
              {project.blurb}
            </p>

            {/* Only featured projects get an image, so the visual
                weight lands on your strongest work rather than
                spreading evenly across everything. */}
            {project.featured && project.image && (
              <div className="mt-6 overflow-hidden bg-[var(--band)]">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1476}
                  height={1600}
                  className="h-auto w-full"
                />
              </div>
            )}

            <p className="mt-4 text-sm text-[var(--muted)]">
              {project.stack.join(", ")}
            </p>

            {/* Links are a generic list, so a project can carry a repo,
                a PDF, a live site, or none of those without needing a
                new field here each time. */}
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-[var(--accent)] underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
