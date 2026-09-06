# Jonathan Okoloko — Portfolio

This is the source code for [jonathanokoloko.com](https://jonathanokoloko.com) — a personal
portfolio built as a real, maintainable codebase rather than a single HTML file.

## What this project is

A Next.js portfolio site showcasing projects, journey, AI work, and creative work, with the
exact visual design, animations, and splash screen from the original concept — but rebuilt as a
proper, data-driven React/TypeScript application you can keep updating for years.

**You should almost never need to touch component code to update your content.** Nearly
everything — projects, tech stack, journey stages, social links, lab entries — lives in plain
data files under `/data`, described below.

## Tech stack

- **Next.js 14** (App Router) — React framework, static generation, routing
- **React 18** + **TypeScript** — components and type safety
- **Tailwind CSS** — utility-first styling, configured with the site's exact color palette
- **Framer Motion** — scroll reveals and animation
- **@fontsource** (Space Grotesk + Inter) — self-hosted fonts, no external font-fetching
  required at build time

## Folder structure

```text
portfolio/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, nav, footer, splash
│   ├── page.tsx                # Home page — assembles all sections in order
│   ├── globals.css             # Resets, custom cursor, focus states
│   └── projects/[slug]/
│       └── page.tsx            # Dedicated case-study page per project
│
├── components/                 # UI only — no content lives here
│   ├── SplashScreen.tsx
│   ├── CustomCursor.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Journey.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectCaseStudy.tsx
│   ├── AISection.tsx
│   ├── TechStack.tsx
│   ├── CreativeSection.tsx
│   ├── TeklySection.tsx
│   ├── Lab.tsx
│   ├── CurrentlyBuilding.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx              # Shared scroll-reveal animation wrapper
│
├── data/                       # <-- YOU EDIT THESE FILES
│   ├── projects.ts
│   ├── journey.ts
│   ├── techStack.ts
│   ├── capabilities.ts
│   ├── lab.ts
│   ├── socialLinks.ts
│   └── siteContent.ts          # Hero copy, splash lines, rotating words, etc.
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces for everything in /data
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── images/
│       ├── profile/profile.jpg # Your photo
│       ├── projects/           # Drop project screenshots here
│       └── design/             # Drop creative/design work here
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── .gitignore
```

## How to install

You'll need [Node.js](https://nodejs.org) 18.18 or newer installed.

```bash
npm install
```

## How to run (local development)

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit files.

## How to build

```bash
npm run build
```

This creates an optimized production build and will print any TypeScript or build errors. Run
this before deploying to catch mistakes early. To preview the production build locally:

```bash
npm run build
npm run start
```

## How to deploy to Vercel

1. Push this project to a GitHub repository (see "GitHub-ready" below).
2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New → Project**.
3. Import your GitHub repository. Vercel auto-detects Next.js — no configuration needed.
4. Click **Deploy**. You'll get a live URL in about a minute.
5. Every time you push to your main branch, Vercel automatically redeploys.

No environment variables are required for this project.

## How to update the portfolio

This is the important part — here's how to make every common change.

### How do I add a project?

Open `data/projects.ts` and copy one of the existing objects in the `projects` array. Change
every field, and give it a **unique `slug`** (used for its URL, e.g. `/projects/your-slug`).
That's it — it will automatically appear in the Projects section and get its own case-study page.

Keep `metrics`, `status`, and `links` honest — only report results that have actually happened.
If a project is still in progress, leave `metrics` empty and describe that in `status`.

### How do I change my profile image?

Replace the file at `public/images/profile/profile.jpg` with your new photo (keep the same
filename, or update the path referenced in `components/Hero.tsx` if you rename it).

### How do I update my GitHub/LinkedIn/etc.?

Open `data/socialLinks.ts` and fill in the real URLs. Every link across the whole site (nav,
hero, footer, contact section) reads from this one file — you only enter each URL once.

### How do I add a new technology?

Open `data/techStack.ts`. Either add a new item to an existing category's `items` array, or add
a whole new category object to the top-level array.

### How do I update the "Currently Building" section?

Open `data/lab.ts` and edit the `nowPipeline`, `nowPipelineActiveIndex`, and `nowFocus` arrays
near the bottom of the file.

### How do I add a new Lab entry?

Open `data/lab.ts` and add a new object to the **top** of the `labEntries` array (most recent
entries should read first).

### Other common edits

| Want to change...                      | Edit this file             |
| --------------------------------------- | --------------------------- |
| Journey timeline stages                 | `data/journey.ts`          |
| "What I do with AI" cards               | `data/capabilities.ts`     |
| Creative category tiles                 | `data/capabilities.ts`     |
| Hero headline, rotating identity words  | `data/siteContent.ts`      |
| Splash screen intro lines               | `data/siteContent.ts`      |
| About section copy and traits           | `data/siteContent.ts`      |
| Tekly section copy                      | `data/siteContent.ts`      |
| Résumé button behavior                  | `data/socialLinks.ts` (`resume`) |

## Notes on content honesty

Every metric, result, and status in `data/projects.ts` reflects only what has actually happened
(for example, the FSP project's validation scores are real, documented numbers — not a
competition ranking, which hasn't been decided). When you add new projects, keep the same
discipline: don't fill in a ranking, award, or outcome until it's real. Use a clearly-marked
placeholder or an honest "ongoing" status instead.

## Accessibility & performance

- Full `prefers-reduced-motion` support (splash screen, hero rotator, scroll reveals all respect it)
- Semantic HTML landmarks, visible focus states, and alt text on the profile image
- Fonts are self-hosted (no external font requests at runtime)
- Images use `next/image` for automatic optimization and lazy loading
- Metadata, Open Graph, and Twitter card tags are set in `app/layout.tsx`

## GitHub-ready

This repository is ready to push as-is:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`.gitignore` already excludes `node_modules`, build output, and anything else that shouldn't be
committed.
