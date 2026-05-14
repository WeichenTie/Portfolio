# Weichen Tie - Portfolio

My personal portfolio site. Built with Nuxt 3, animated with GSAP, and styled with Tailwind. Sections cover my background, projects (with write-ups in Markdown), and skills across software and mechatronics engineering.

## Stack

- **Nuxt 3** - framework and routing
- **Tailwind CSS** - styling
- **GSAP** - scroll-driven animations
- **shadcn-vue / Radix Vue** - UI primitives
- **@nuxt/content** - project write-ups as Markdown files
- **@nuxt/image** - optimized images

## Setup

Requires Node 18+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Runs on `http://localhost:3000`.

## Build

```bash
pnpm build
pnpm preview   # preview the production build locally
```

## Adding a Project

Project write-ups live in `content/projects/`. Each is a Markdown file - the filename prefix (e.g. `3.`) controls the order they appear on the site.

```
content/
  projects/
    1.goofy-golf.md
    2.shock-absorbing-regenerative-backpack.md
    3.breadboard-gpu.md
    ...
```
