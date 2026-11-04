# Design: Joel Gilpin portfolio

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: atmospheric
- Shape of the first page: Manifesto (Ledge hero, the portrait printed in glyphs)
- Theme: Terminal, with the accent hue moved to emerald by request (vibe: "dark terminal precision, quiet, engineered, one sharp accent")
- Axes: dark/mono/chromatic-green · posture: committed

## Tokens
`app/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(12.5% 0.012 168);  --color-paper-2: oklch(16% 0.016 168);  --color-paper-3: oklch(20.5% 0.022 168);
  --color-ink: oklch(94% 0.03 158);  --color-ink-2: oklch(82% 0.05 160);  --color-muted: oklch(64% 0.06 163);  --color-rule: oklch(27% 0.028 166);
  --color-accent: oklch(85% 0.17 160);  --color-accent-ink: oklch(14% 0.02 168);  --color-focus: oklch(85% 0.17 160);
  --font-display: var(--font-martian), "Martian Mono", ui-monospace, monospace;  --font-body: var(--font-display);  --font-outlier: var(--font-display);
  --radius-card: 0;  --radius-pill: 0;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `app/tokens.css`. Page rules live in `app/globals.css`, whose first lines are the Hallmark stamp.

## Controls
- Primary: emerald fill with `--color-accent-ink` text · square · 48px
- Secondary: 1px `--color-ink-2` outline, transparent · square · 48px
- Links: `--color-ink-2`, dotted underline, accent on hover; state changes step, never fade

## Motion
- Character: severe. The portrait resolves row by row once and flares under the cursor; the session caret blinks five times and holds; the bar retracts on scroll. Under reduced motion everything ends at once.

## Exports
`app/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request.
