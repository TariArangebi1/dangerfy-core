# Dangerfy Core

Software prototype of Dangerfy's staged nudge escalation logic — the "brain" behind my wearables concept.

## What this is
A simulator that models how Dangerfy detects potential danger and escalates a response in stages:

1. **Idle** — no unusual activity
2. **Stage 1: Nudge** — light check-in prompt on suspected unusual movement/signal
3. **Stage 2: Check-in** — stronger prompt if no response
4. **Stage 3: Alert** — emergency contacts notified if no response

This repo starts as a plain JS practice space (Week 1) and grows into a full React + Node/Express app with a live deployment by end of September.

## Progress log
- **27 Aug** — repo initialized, Git basics.

## Stack (planned)
- Frontend: React (Vite)
- Backend: Node.js + Express
- Deploy: Vercel (frontend) + Railway/Render (backend)

## Why this exists
Built as part of a 35-day daily coding grind (27 Aug – 30 Sep) to go from "knows what I want to build" to "can actually build it."
