# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server on port 3001
npm run build     # production build
npm run start     # serve production build
npm run lint      # ESLint via next lint
```

No test suite — verify changes by running the dev server and checking in browser.

## Environment

`.env` must have:
```
NEXT_PUBLIC_URL = 'http://localhost:3001'
```
`NEXT_PUBLIC_URL` is used across all internal `fetch` calls. In production it is `https://www.rohitweb.me`.

## Architecture & Structure

See [artifacts/architecture.md](artifacts/architecture.md) for the full project layout, data flow, server vs. client component split, and key patterns.

**Short version:** Next.js 13 App Router, JS only. No database — all blog/category data is static JS arrays in `src/app/api/blogs/blog.js` and `category.js`. API routes read those files; page server components fetch from those routes.

## Adding or Editing Blog Posts

See [artifacts/blog-content-schema.md](artifacts/blog-content-schema.md) for:
- Full blog post object shape and all optional fields
- `sections[]` schema (h1, h2, p, list, image, html/code, subSections)
- Category ID table
- Rules for IDs, slugs, dates, HTML in text fields, and image hosting

## Theming (CSS Variables)

See [artifacts/theming.md](artifacts/theming.md) for the full CSS variable reference, dark-only feature list, and blog-specific CSS classes.

**Critical rule:** Never hardcode color values. Always use `var(--accent)`, `var(--fg2)`, `var(--border)`, etc. All styles go in `src/app/globals.css` — no CSS modules or styled-components.
