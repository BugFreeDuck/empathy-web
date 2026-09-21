# empathy-web-new

Single-page site for the Empathy dance studio (Vilnius). SvelteKit 2 + Svelte 5,
Tailwind CSS 4, prerendered to static files with `@sveltejs/adapter-static`.

## Commands

```bash
npm run dev      # dev server
npm run build    # static output in ./build
npm run preview  # serve the built output
npm run check    # svelte-check
npm run photos   # regrade + re-export photography (see below)
```

## Structure

Components follow atomic design and are reachable through aliases declared in
`svelte.config.js`:

| Alias         | Path                            | Contents                                     |
| ------------- | ------------------------------- | -------------------------------------------- |
| `$atoms`      | `src/lib/components/atoms`      | `Photo`, `Button`, `Heading`, `Icon`, …       |
| `$molecules`  | `src/lib/components/molecules`  | `PriceCard`, `DayCard`, `StudioMap`, …        |
| `$organisms`  | `src/lib/components/organisms`  | One per page section, plus header and footer  |
| `$templates`  | `src/lib/components/templates`  | `LandingPage` composes the organisms          |
| `$data`       | `src/lib/data`                  | All copy, schedule, pricing and photo metadata |

Other directories:

- `src/lib/styles` — `theme.css` (tokens), `base.css` (element defaults and
  custom utilities), `animations.css` (keyframes and motion classes).
- `src/lib/actions` — `reveal` (scroll-in fade).

All text lives in `src/lib/data`, so copy changes never require touching a
component.

## Photography

Source images are graded and exported outside the build. `scripts/photos.config.mjs`
lists which originals map to which slug, the responsive widths, and the warm
pass applied to every frame. Running `npm run photos` writes WebP variants to
`static/photos` and regenerates `src/lib/data/photos.generated.ts`, which
`Photo.svelte` reads to build its `srcset`.

The pass is deliberately light: blue is trimmed by a few percent so the studio's
cyclorama settles onto the sand page, and nothing else is touched. Photographs
are shown as shot, with no tint, vignette or blend layered over them. Resist
strengthening any of this — heavier treatment turns skin orange and the gerberas
red, which is what an earlier version of the grade got wrong.

No cropping or content is altered. Source photographs live in the 2024 Empathy
photoshoot folder — set `SOURCE_DIR` in `scripts/photos.config.mjs` before running.

## Palette

`src/lib/styles/theme.css` holds every token. Surfaces are `sand-*` (warm ivory),
text is `bark-*`, and the accent is `ember-*` running from the last light down
into the coals. Two sunset gradients exist: `--gradient-sunset` for gradient
text, and `--gradient-sunset-deep` wherever pale text sits on the gradient,
because the lit end of the first one does not carry enough contrast.

## Motion

Animations respect `prefers-reduced-motion`: the media query at the bottom of
`animations.css` disables every keyframe and transition.
