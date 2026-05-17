# UWin·Japan — Carbon Management Platform

Marketing site for UWin·Japan, a CCU (Carbon Capture & Utilization) compliance platform. Visitors land on a registration gate; submitting the form unlocks the full marketing site.

**[Live Demo →](https://projectyak.github.io/uwin-japan-ccu/)**

## Features

- Visitor registration gate as site root (QR-friendly entry)
- Hero with live dMRV dashboard preview
- Hardware: PPT-faithful CCU process diagram (quench → super-gravity reactor → spray → fan → stack, plus NaOH tank and filter press) with 6 hover-driven IoT sensor cards
- Software: Platform capabilities (ISO 14064-3 / ISO 14067 / METI FY26)
- Solution: Compliance pipeline walkthrough + How It Works
- Trilingual support (EN / 中文 / 日本語)
- Visitor and contact forms posted to a Google Apps Script Web App, which writes to Google Sheets and emails the team

## Files

| File | Description |
|---|---|
| `index.html` | Visitor registration gate (site root); redirects to `home.html` on submit |
| `home.html` | Full marketing site (hero, hardware, software, solution, contact) |
| `colors_and_type.css` | Design tokens (colors, typography, spacing) |
| `i18n.js` | EN / 中 / 日 translations |
| `logo.png` · `favicon.svg` | Brand assets |
| `scripts/Code.gs` | Google Apps Script source for the form-handling Web App (visitor gate + contact) |

## Tech

Vanilla HTML/CSS · [Lucide Icons](https://lucide.dev) · No build step — open `index.html` directly. Form backend is a Google Apps Script Web App bound to the response spreadsheet; see the deploy notes at the top of `scripts/Code.gs`.
