# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for **UWin·Japan**, a PwC-branded CCU (Carbon Capture & Utilization) compliance platform. Trilingual (EN / 中文 / 日本語). No build step, no framework, no package manager — just open the HTML files in a browser.

Live demo: https://projectyak.github.io/uwin-japan-ccu/ (deployed via GitHub Pages from `main`).

## Run / develop

There is no build, no `npm`, no test suite, no linter.

- **Develop**: open `index.html` directly in a browser, or serve the repo root with any static server (`python -m http.server`, VS Code Live Server, etc.). All asset paths are relative to repo root.
- **Deploy**: push to `main` — GitHub Pages serves the repo root.
- **Test forms**: submitting from a `file://` URL works (the GAS endpoint accepts `mode: 'no-cors'` POSTs from anywhere). To verify a submission actually landed, check the response Google Sheet — the front-end can't read the response under `no-cors`, so it always assumes success and redirects/shows the thank-you.

## Site layout (two-page flow)

```
index.html  ── visitor gate (site root) ──▶  home.html  (marketing site)
                  │                              │
                  │ form_type=visitor_gate       │ form_type=contact (default)
                  └──────────────┬───────────────┘
                                 ▼
              Google Apps Script Web App (scripts/Code.gs)
                ├─ "Visitors" sheet  + email to project@yaktw.com
                └─ "Contact"  sheet  + email to project@yaktw.com
```

### `index.html` — visitor registration gate

Site root. Designed for QR-code entry at events. Captures **name, email, company, title**, POSTs to the GAS endpoint with `form_type=visitor_gate`, then unconditionally redirects to `home.html` (in `.finally()`, so even network failures still let the visitor through). The gate is *not* an auth barrier — anyone can navigate to `home.html` directly. It exists for lead capture only.

### `home.html` — full marketing site

Single long-scroll page. Sections in order (each has a stable `id` used by the nav anchors):

| `id` | Section | Purpose |
|---|---|---|
| `hero` | Hero | Headline + live dMRV dashboard mock card + floating METI subsidy badge |
| `platform` | Dark panel + "How It Works" | Hardware+software pitch, mock app window, 3-step pipeline (sensor → calc → filed report) |
| `equipment` | Equipment Real-Time Monitoring | PPT-faithful CCU diagram — 7 vessels (QT-110 quench → HG-200 super-gravity → ST-300 spray → BL-101 fan → SK-001 stack, plus TK-420 NaOH tank and PF-700 filter press) with 6 IoT sensor dots. Dots reveal a data card on hover; see "Monitoring panel internals" below |
| `features` | Platform capabilities | 4 feature cards tagged with ISO 14064-3 / ISO 14067 / METI FY26 |
| `contact` | Contact form | Name / Email / Company / Message → `form_type=contact` (default) |

The contact form's inline submit handler (bottom of `home.html`) replaces the form HTML with a hard-coded English thank-you message, ignoring the localized `fThanks` string and the `window.__ccuOnSubmitContact` helper that `i18n.js` exposes. If you localize the success state, route through that helper.

#### Monitoring panel internals

The `#equipment` section's interactive monitoring uses a paired-element pattern: SVG `<g class="dmrv-hotspot" data-hot="A-0X">` dots inside the equipment SVG, each matched to a DOM `<div class="dmrv-dtag" data-tag="A-0X">` card positioned absolutely inside `.dmrv-hero`. Cards are hidden by default (`opacity:0`) and revealed only when the matching dot or card is hovered — `setActive(id)` adds `.active` to both, with a 200ms grace timer on mouseleave so the cursor can travel from dot to card without losing focus.

Leader lines (dashed orange lines connecting a card to its dot) are drawn at runtime by `leaderPath()` near `home.html:1300` into a separate overlay SVG (`#dmrv-leader-svg`). The function reads the equipment SVG's **actual** rect (not the hero's — the canvas div can have CSS margins narrower than the hero) and handles `preserveAspectRatio="xMidYMid meet"` centering. If the target dot's x sits inside the card's x-range, it draws a straight vertical drop; otherwise it routes via a per-tag `data-lane` offset so concurrent leaders to the same y-line (e.g. multiple sensors on the gas pipe) don't share an approach line.

To move a sensor: update both the hotspot circle `cx/cy` (inside the SVG) AND the matching dtag's `data-leader-x/y` to the same SVG-space coordinates. The dtag's CSS position (`left/top`) controls where the card *appears*; the dot's position controls where the leader *lands*.

## Google Apps Script backend (`scripts/Code.gs`)

This file is the **canonical source of truth** for the deployed Web App. The runtime copy lives at script.google.com bound to the response spreadsheet — keep them in sync.

**Routing**: `doPost` reads the `form_type` form field:
- `"visitor_gate"` → `handleVisitorGate` → appends to **"Visitors"** sheet (Timestamp, Name, Company, Title, Email) + emails the team
- missing or `"contact"` → `handleContact` → appends to **"Contact"** sheet (Timestamp, Name, Email, Company, Message) + emails the team
- Recipient is hard-coded: `RECIPIENT_EMAIL = "project@yaktw.com"`

**Deploy workflow after editing `Code.gs`** (the URL must not change — both HTML files have it hard-coded):
1. Paste the file into Code.gs at script.google.com
2. *Deploy → Manage deployments → pencil on existing deploy → Version: New version → Deploy*
3. Do **not** pick "New deployment" — that mints a new URL and breaks both front-ends.

The Web App URL is hard-coded as `APPS_SCRIPT_URL` in **both** `index.html` (line ~164) and `home.html` (bottom inline script). If the deployment URL ever does change, update both.

## i18n (`i18n.js`)

Self-contained IIFE, three language dicts (`en`, `zh`, `ja`). Switching applies translations DOM-wide via three attribute hooks:

- `data-i18n="key"` → sets `textContent`
- `data-i18n-html="key"` → sets `innerHTML` (use for strings with `<em>`, `<br>`, `<sub>`, `&rarr;`, etc.)
- `data-i18n-placeholder="key"` → sets the `placeholder` attribute

Selected language persists in `localStorage` under key `ccu-lang`. Current language is exposed as `window.__ccuLang`. After applying a language the script re-runs `lucide.createIcons()` because inline `<i data-lucide="...">` placeholders may have been replaced.

**When adding a new translatable string**: add the key to all three of `en`, `zh`, `ja` (lines 4 / 162 / 321). Missing keys fall through silently — the element keeps whatever text is in the HTML.

Note the `data-i18n-html` handler has the line `el.innerHTML = dict[dict[k]] || dict[k];` — the `dict[dict[k]]` lookup is almost always undefined, so the fallback `dict[k]` does the real work. Treat it as if it were just `el.innerHTML = dict[k];` when adding keys.

## Design tokens (`colors_and_type.css`)

Single source of truth for colors, type, radii, motion. Two layers:

- `--pwc-*` — PwC Taiwan brand palette (Orange `#D04A02` is primary; Tangerine / Yellow / Rose / Red / Green / Blue ramps plus greys).
- `--ccu-*` — app-role aliases mapped onto the PwC palette, kept for back-compat with older selectors (e.g. `--ccu-green` is actually PwC Orange — do not rename it).

Type system substitutes Inter for Helvetica Neue and Source Serif 4 for Georgia on web (free, brand-faithful metrics). Imported from Google Fonts at the top of the file.

House style is **flat / square**: prefer borders to shadows, small or zero radii (`--ccu-radius-sm: 2px`). Pills (`--ccu-radius-pill: 999px`) are reserved for status chips.

## Editing conventions

- **Two-page CSS duplication**: nav, language switcher, and shared section styles (`.section-eyebrow`, `.section-h2`, `.section-lead`, `.contact-section` form styles) are duplicated between `index.html` and `home.html`. When changing nav or form styling, update both. The gate explicitly mirrors home's contact-form look.
- **Section anchors are an API**: the top-nav `<a href="#platform|#equipment|#features|#contact">` links and the hero CTAs depend on those exact IDs. Don't rename a section's `id` without sweeping the nav and the i18n keys.
- **Lucide icons** are rendered by `lucide.createIcons()`. Inline `<i data-lucide="name">` placeholders are replaced with SVG at load and again on every language switch. Use names from https://lucide.dev.
- **Subscripts in headlines**: CO₂ is written as `CO<sub>2</sub>` in some headings (e.g. `equipH2`) — keep the markup when translating.
- README claims a brand mark `nav-logo-mark` exists, but the live nav uses `<img src="logo.png">`. The `.nav-logo-mark` CSS class is dead code in `home.html` — safe to ignore unless you're re-introducing a wordmark.

## What's NOT in this repo

- No tests, no CI config, no lint.
- No `package.json` / `node_modules` — Lucide and Google Fonts are loaded from CDNs at runtime.
- The Google Sheet that receives form submissions lives outside the repo (bound to the GAS project at script.google.com).
