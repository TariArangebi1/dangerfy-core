# Dangerfy Core

Software prototype of Dangerfy's staged nudge escalation logic — the "brain" behind the wearable concept.

## What this is
A simulator that models how Dangerfy detects potential danger and escalates a response in stages:

1. **Idle** — no unusual activity
2. **Stage 1: Nudge** — light check-in prompt on suspected unusual movement/signal
3. **Stage 2: Check-in** — stronger prompt if no response
4. **Stage 3: Alert** — emergency contacts notified if no response

This repo starts as a plain JS practice space and grows into a full React + Node/Express app with a live deployment, following a day-by-day build plan running **Sep 3 → Oct 7**.

## Progress log
- **3 Sep** ✅ — Repo initialized, Git & GitHub basics, first commit pushed. Wrote and ran first JS script (variables, types, template literals).
- **4 Sep** — JS functions (arrow functions, params/returns).

## Stack (planned)
- Frontend: React (Vite)
- Backend: Node.js + Express
- Deploy: Vercel (frontend) + Railway/Render (backend)

## Build plan
- **Week 1 (Sep 3–9):** JS fundamentals + Git
- **Week 2 (Sep 10–16):** Node basics + intro React
- **Week 3 (Sep 17–23):** Dangerfy state machine built directly in React
- **Week 4 (Sep 24–30):** Alert log, styling, Express backend started
- **Week 5 (Oct 1–7):** Backend data layer + live deployment

## Why this exists
Built as part of a daily coding grind (Sep 3 – Oct 7) to go from "knows what I want to build" to "can actually build it," ahead of degree apprenticeship applications.