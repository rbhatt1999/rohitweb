# Theming System

## Overview

Two themes: **dark** (default) and **light**. Theme is stored in `localStorage` under key `rb-theme` and applied as `data-theme="light"` on `<html>`. A blocking inline `<script>` in `layout.js` reads `localStorage` before React hydrates to prevent flash-of-wrong-theme.

Toggle is handled by `ThemeToggle.jsx` (client component) — sets the attribute + writes to localStorage.

## CSS Variable Reference

All defined in `src/app/globals.css`. Never hardcode color values — always reference these vars.

| Variable | Dark | Light | Purpose |
|----------|------|-------|---------|
| `--bg` | `#06070a` | `#fafaf7` | Page background |
| `--bg2` | `#111114` | `#f4f4ef` | Secondary background |
| `--bg-elev` | `#0a0b10` | `#f0f0eb` | Elevated surface (slightly lighter than bg) |
| `--surface` | `#0d0f15` | `#ffffff` | Card / panel background |
| `--surface2` | `#141418` | `#f7f7f2` | Secondary surface |
| `--border` | `#1f2128` | `#e6e6df` | Default border |
| `--border2` | `#2a2a33` | `#d4d4cb` | Stronger border |
| `--border-soft` | `#16181f` | `#e9e9e2` | Subtle border |
| `--text` | `#e4e4e7` | `#27272a` | Body text |
| `--text-dim` | `#d4d4d8` | `#3f3f46` | Dimmed text |
| `--muted` | `#71717a` | `#71717a` | Muted / placeholder |
| `--accent` | `#a3e635` | `#15803d` | Primary accent (lime dark, green light) |
| `--accent-dim` | `#65a30d` | `#166534` | Dimmed accent |
| `--fg1` | `#fafafa` | `#0a0a0a` | Highest-contrast foreground |
| `--fg2` | `#d4d4d8` | `#27272a` | Primary text |
| `--fg3` | `#a1a1aa` | `#52525b` | Secondary text |
| `--fg4` | `#71717a` | `#71717a` | Tertiary text |
| `--fg5` | `#52525b` | `#a1a1aa` | Faintest text |

### Layout tokens

| Variable | Value | Purpose |
|----------|-------|---------|
| `--r-card` | `18px` | Card border radius |
| `--r-sm` | `10px` | Small border radius |
| `--pad` | `32px` | Default section padding |

## Tailwind Config Extensions

Tailwind is configured (`tailwind.config.js`) with:
- `colors.accent`: `#a3e635`
- `colors.accent-dim`: `#65a30d`
- `fontFamily.mono`: `var(--font-jetbrains)`
- `fontFamily.sans`: `var(--font-inter)`

Use Tailwind classes where possible; use CSS vars via `style={}` props when Tailwind can't express the value.

## Dark-Only Features (Hidden in Light Mode)

These are disabled/hidden in light mode via CSS in `globals.css`:

| Feature | CSS rule |
|---------|----------|
| Cursor glow overlay | `[data-theme="light"] .cursor-glow { display: none }` |
| 3D corridor + hero scrim | `[data-theme="light"] .corridor-wrapper, .hero-scrim { display: none }` |
| Grid backdrop opacity reduced | `[data-theme="light"] .grid-bg { opacity: 0.25 }` |
| Skill bar glow | `[data-theme="light"] .skill-bar::after { box-shadow: none }` |
| Bento card glow | `[data-theme="light"] .b-glow { opacity: 0 }` |

When building new dark-mode-specific visual effects (glows, neon borders, bloom), add a `[data-theme="light"]` override in `globals.css` — do not inline the override in the component.

## Blog-Specific CSS Classes

| Class | Purpose |
|-------|---------|
| `.blog-panel` | Surface card used in blog posts (`background: var(--surface)`) |
| `.blog-title` | Heading color (`color: var(--accent)`) |
| `.blog-body` | Body text color (`color: var(--fg2)`) |
| `.anchor-tag` | Applied to parsed HTML sections; links inside get accent color + underline |
| `.sectionAnchor` | Wrapper for blog sections |

## Adding New Component Styles

All styles go in `globals.css` — there are no CSS modules or styled-components. Use the section header pattern `/* ─── Component Name ─── */` to group new rules. Add a `[data-theme="light"]` block in the "Light mode colour overrides" section if the component has dark-mode-only visuals.
