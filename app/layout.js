import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { profile } from "./data/profile";
import "./globals.css";

// next/font downloads and self-hosts these at build time — no
// <link> tags, no layout shift, nothing to configure.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// This is what shows in the browser tab and in link previews.
export const metadata = {
  title: `${profile.name} — Software Engineer`,
  description: profile.headline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body
        style={{ fontFamily: "var(--font-body)" }}
        className="min-h-screen antialiased"
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="mx-auto flex max-w-3xl items-baseline justify-between px-6 pt-8 pb-4">
      <a
        href="/"
        className="text-[15px] font-medium tracking-tight text-[var(--ink)]"
      >
        {profile.name}
      </a>
      <nav className="flex gap-6 text-[15px] text-[var(--muted)]">
        <a href="#work" className="hover:text-[var(--accent)]">
          Work
        </a>
        <a href="#about" className="hover:text-[var(--accent)]">
          About
        </a>
        <a href="#contact" className="hover:text-[var(--accent)]">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-3xl border-t border-[var(--rule)] px-6 py-10">
      <p className="text-sm text-[var(--muted)]">
        Built with Next.js. Source on{" "}
        <a
          href={profile.links.github}
          className="text-[var(--accent)] underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
