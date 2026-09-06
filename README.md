# Personal Portfolio

Source repo for my portfolio site. Built with Next.js and Tailwind. Deployed with Vercel.

**Live at:** [connor-cruz-portfolio.vercel.app](https://connor-cruz-portfolio.vercel.app)

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check a production build before pushing:

```bash
npm run build
```

This catches import and path errors faster than waiting on a remote build.

## How it's organized

All content lives in `app/data/profile.js`: name, bio, skills, links, and the
project list. The components read from it, so updating the site normally means
editing that one file and nothing else.

```
app/
├── data/profile.js        Everything the site displays
├── components/
│   ├── Hero.js            Opening statement and top-level links
│   ├── Projects.js        Project list
│   ├── About.js           Bio and skills
│   └── Contact.js         Email and profiles
├── layout.js              Fonts, metadata, nav, footer
├── page.js                Composes the four sections
└── globals.css            Color tokens and base styles
```

`public/` holds the résumé, project images, and paper PDFs.

## Adding a project

Append an entry to the `projects` array in `profile.js`:

```js
{
  title: "Project name",
  year: "2026",
  blurb: "What it does and what was hard about it.",
  stack: ["C", "KiCad"],
  image: { src: "/projects/name.jpg", alt: "Description for screen readers." },
  links: [
    { label: "Code", href: "https://github.com/..." },
  ],
  featured: true,
}
```

`links` is a generic list, so a project can carry a repo, a live site, a PDF, or
any combination. `image` and `featured` are optional — only featured projects
with an image render one, which keeps the visual weight on the strongest work.

## Theming

The palette is six CSS variables at the top of `app/globals.css`:

```css
--paper   page background
--band    tinted section background
--ink     headings and body text
--muted   secondary text
--rule    dividing lines
--accent  links
```

Changing those six values re-themes the whole site. Every component references
them rather than hardcoded colors. Contrast ratios were checked against WCAG AA
before the current palette was chosen.

## Deployment

The repo is connected to Vercel. Pushing to `main` deploys to production;
pushes to other branches get their own preview URLs. Failed builds leave
production untouched.

## Notes

- Images go in `public/` and must be committed. Use lowercase filenames —
  Windows treats `.JPG` and `.jpg` as the same file, GitHub's servers don't,
  and the mismatch only surfaces after deploying.
- Compress images before committing. Git stores every version of a binary
  permanently, so uncompressed photos bloat every future clone.
- Tailwind v4 configures through `@theme` in CSS rather than
  `tailwind.config.js`. Guides written for v3 will not apply.
