# Nutriq Marketing Site — Project Context

> **Purpose of this doc**: capture everything a new Claude Code session needs to pick up where the previous left off. Single source of truth for scope, decisions, and open items.

**Last updated**: May 2026
**Project folder**: `c:\NutriQ-marketing\` (separate from `c:\NutriQ\` which is the app + backend)
**Live URL** (when deployed): `https://nutriq.gr`

---

## 1. Scope

Marketing website for **Nutriq**, a B2B SaaS for dietitians and nutrition clinics made by **InHealion** (Athens-based, founded 2026).

This site is **separate from the app** (`c:\NutriQ\inhealion-fe`, Next.js + AWS). It's a static Astro site designed for:

- Lead generation (signup, demo booking, contact)
- SEO (Greek + international keyword targeting)
- Trust building (clinical authority, GDPR compliance, EU hosting)
- Pricing transparency (3-axis pricing matrix)
- Brand presentation (warm SaaS aesthetic differentiated from cold tech vibe)

**Target audience**: dietitians and nutrition clinics in Greece (primary) + international (secondary). B2B — not consumer.

**Not in scope** (handled elsewhere):
- The actual app (`app.nutriq.gr` subdomain — separate codebase)
- Backend, auth, billing (lives in `inhealion-backend` Spring Boot)
- AI generation engine (lives in `nutriq-meal-plan-generator` Lambda)

---

## 2. Tech stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Astro 5** | Best-in-class SEO for content sites, static HTML output, islands architecture |
| Styling | **Tailwind CSS** | Utility-first, custom design tokens in `tailwind.config.mjs` |
| Language | **TypeScript** | Type-safe i18n + pricing data |
| Font | **Inter** (single font, weight hierarchy) | Full Greek + Latin Extended, professional B2B, screen-optimized |
| i18n | Astro built-in (`@astrojs/i18n`) | Greek default at `/`, English at `/en/` |
| Sitemap | `@astrojs/sitemap` | Auto-generated with hreflang |
| Deployment | **Vercel** | Free Hobby tier covers needs, zero-config Astro support |

**Why these choices** (decisions made during build):
- Dropped Fraunces (editorial serif) → too "warm/wellness", user wanted modern SaaS
- Dropped DM Sans alternative → poor Greek glyph support
- Inter chosen because: best Greek support + already used in `inhealion-fe` (consistency)
- White-dominant background (cream only for selective section breaks)
- Vercel chosen over AWS infrastructure → cheaper, simpler, free for marketing site

---

## 3. Brand

### Colors (from `tailwind.config.mjs`)

| Token | Hex | Use |
|---|---|---|
| `brand-500` (DEFAULT) | `#0AA6A9` | Accent, links, progress |
| `brand-900` | `#00494D` | Primary CTAs, deep panels (footer, dark sections) |
| `brand-50` | `#E6F6F7` | Info chips, subtle backgrounds |
| `peach-400` (DEFAULT) | `#F7AE7E` | Accent only — sparing use (badges, delight moments) |
| `cream-100` | `#FAF8F4` | Selective section breaks (Problem, How, About, Pricing teaser) |
| `gray-*` | Standard SaaS scale | Borders, secondary text |
| `ink` | `#0F1419` | Body text, headings |

**Important**: `#003931` is **NOT** a brand color. The user clarified that `#00494D` is the canonical deep teal.

### Logo files (`public/`)

| File | Use |
|---|---|
| `nutriq-logo.svg` | **Horizontal lockup** (heart + "nutriq" wordmark). Cropped viewBox `700 3900 8900 2600`. Used in Header (h-9) + Footer (h-11). No separate text needed. |
| `nutriq-mark.svg` | **Mark only** (heart icon). Used in dashboard mockup sidebar, footer brand echo. |
| `favicon.svg` | **Square favicon** (heart, tight viewBox `1200 1300 7400 7400`). Used for browser tab. |
| `nutriq-logo-horizontal.svg` | Legacy alternative — not currently used. Can be removed if you want. |

### Typography

- **All text**: Inter (weights 400, 500, 600, 700, 800)
- **Display sizes** (`text-display-xl/lg/md/sm`): set in tailwind config with tight letter-spacing and font-weight 700
- **No serif anywhere** — Fraunces was tried then removed
- `font-display` utility class still exists but maps to Inter (legacy from refactor)

### Visual language

- Animated aurora gradient backgrounds in hero sections (`.bg-aurora`)
- Subtle grid overlay (`.bg-grid` at opacity 30)
- Glow effect under hero dashboard (`.glow-teal`)
- Brush-stroke underline on highlighted hero words (`.underline-brush`)
- Live ticker chip (animated counter) in hero
- Stagger reveal animations on dashboard meal rows
- Animated bars filling on mount
- Sparkline draw-on animation

---

## 4. Site map

```
EL (default at root)              EN (mirrored at /en/)
─────────────────────             ──────────────────────
/                                  /en/                       Home
/features                          /en/features/              Features index (FeatureTabs)
/features/ai-generator             /en/features/ai-generator
/features/ai-assistant             /en/features/ai-assistant  ← Coming Soon + waitlist
/features/client-portal            /en/features/client-portal
/features/meal-planning            /en/features/meal-planning
/features/nutrition                /en/features/nutrition
/features/food-database            /en/features/food-database
/features/teams                    /en/features/teams
/pricing                           /en/pricing
/about                             /en/about
/blog                              /en/blog                   ← Index only, no posts yet
/contact                           /en/contact
/privacy                           /en/privacy
/terms                             /en/terms
/cookies                           /en/cookies
/404                               (same file)
```

**Total**: 33 pages built (16 unique × 2 langs + 404 + sitemap)

### Home page sections (in order)

1. **Hero** (`Hero.astro`) — Live ticker, headline with brush underline, big dashboard mockup with stagger animations, floating badges
2. **TrustStrip** — Marquee of placeholder customer logos (REPLACE WHEN REAL ONES AVAILABLE)
3. **Problem** — Stats section: 8+ hrs, 40%, 13 dietary patterns
4. **FeatureTabs** (`FeatureTabs.astro`) — Interactive sticky list + content panel, all 7 features
5. **HowItWorks** — 3 steps with numbered markers
6. **Testimonials** — 3 placeholder testimonials (REPLACE WHEN REAL)
7. **PricingTeaser** (`id="pricing"`) — 3 sample tier cards + CTA to /pricing
8. **AboutSection** (`id="about"`) — Founding story, dual-panel (Engineers + Dietitians), 4 values, CTA to /about
9. **FAQ** — 6 questions, FAQPage structured data (JSON-LD for SEO)
10. **FinalCTA** — Deep teal banner with "Start today"

### Nav

5 items only (intentionally minimal):
- Features → `/#features` (anchor scroll)
- Pricing → `/#pricing` (anchor scroll)
- About → `/#about` (anchor scroll)
- Blog → `/blog` (separate page — has multiple posts)
- "Start free" CTA → `/pricing`

**Smart anchor scroll**: clicking nav links on home = smooth scroll; from other pages = full navigate then anchor jump.

---

## 5. Pricing — IMPORTANT

The pricing structure is **3-axis** (complex). Source of truth: `src/i18n/pricing.ts`.

| Axis 1 | Axis 2 (Solo only) | Axis 3 |
|---|---|---|
| Solo / Team | Core / Growth | Annual / Monthly |

### Solo Core
- Starter — 19€/mo annual (25€ monthly) · 20 clients · 40 credits
- Professional — 29€/mo annual (39€) · 50 clients · 120 credits · ★ Popular
- Unlimited — 39€/mo annual (49€) · ∞ clients · 300 credits

### Solo Growth (Core + branding tools)
- Starter Growth — 39€/mo annual (49€) · 80 credits + personal landing
- Professional Growth — 59€/mo annual (69€) · 200 credits · ★ Popular
- Unlimited Growth — 79€/mo annual (99€) · 400 credits

### Team
- Team Small — 119€/mo annual (149€) · 3 pros · 300 shared credits
- Team Growth — 199€/mo annual (249€) · 10 pros · 800 credits · ★ Popular
- Team Pro — 299€+/mo · ∞ pros · 1500+ credits
- Enterprise — Custom · SLA + integrations

### AI Credit packs
- 50 credits — 10€
- 150 credits — 25€
- 400 credits — 60€

**Implemented as**: interactive toggle UI in `src/components/pricing/PricingMatrix.astro` with vanilla JS state.

---

## 6. Important decisions & user preferences

These were explicit user decisions during build. Honor them:

| Decision | Reason |
|---|---|
| **Multi-page, NOT single-page** | Lots of content to show, but home is comprehensive |
| **Home has full FeatureTabs** | Replaced earlier "FeaturesOverview" with interactive tabs |
| **About section on home + /about page** | Both exist — home has the section, /about has deeper content |
| **No "For Solo" / "For Clinics" pages** | Removed as redundant. Solo is default. Team specifics shown via badges in FeatureTabs |
| **Inter font, NOT Fraunces** | Modern SaaS aesthetic, professional Greek rendering |
| **White-dominant, cream selective** | Not too sterile, not too warm. Strategic balance |
| **brand-900 = #00494D** | NOT #003931. User clarified this is the canonical dark teal |
| **Logo SVG has wordmark built in** | No separate "nutriq" text rendered next to logo in Header/Footer |
| **Greek primary, English at /en/** | nutriq.gr is .gr domain, Greek SEO authority |

---

## 7. Key files & where things live

```
c:\NutriQ-marketing\
├── astro.config.mjs              i18n + sitemap config
├── tailwind.config.mjs           Brand tokens, fonts, shadows, animations
├── tsconfig.json
├── vercel.json                   Headers + cache + redirects
├── package.json
├── public\
│   ├── nutriq-logo.svg          horizontal lockup (Header/Footer)
│   ├── nutriq-mark.svg          icon only
│   ├── favicon.svg              browser tab icon
│   └── robots.txt
└── src\
    ├── styles\global.css         Tailwind layers + .bg-aurora, .bg-grid, etc.
    ├── env.d.ts
    ├── i18n\
    │   ├── ui.ts                 ALL UI copy (EL + EN, ~200 keys)
    │   ├── pricing.ts            Source of truth for all pricing data
    │   └── utils.ts              getLangFromUrl, useTranslations, localizePath
    ├── layouts\
    │   └── BaseLayout.astro      Header + Footer + CookieBanner + SEO meta
    ├── components\
    │   ├── Header.astro          Sticky header with smart anchor scroll
    │   ├── Footer.astro          Dark teal footer with brand logo
    │   ├── Logo.astro            Logo wrapper component
    │   ├── CookieBanner.astro    GDPR consent
    │   ├── FeatureTabs.astro     ← The interactive feature tabs (used on home + /features)
    │   ├── SimpleFeaturePage.astro    Template for simple feature pages
    │   ├── LegalPage.astro       Template for Privacy/Terms/Cookies
    │   ├── home\
    │   │   ├── Hero.astro        Live ticker, dashboard mockup, stagger
    │   │   ├── TrustStrip.astro
    │   │   ├── Problem.astro
    │   │   ├── HowItWorks.astro
    │   │   ├── Testimonials.astro
    │   │   ├── PricingTeaser.astro       id="pricing"
    │   │   ├── AboutSection.astro        id="about" — founder story
    │   │   ├── FAQ.astro
    │   │   └── FinalCTA.astro
    │   └── pricing\
    │       └── PricingMatrix.astro       3-axis toggle UI
    └── pages\
        ├── index.astro                   Greek home
        ├── (all the EL pages)
        └── en\                            Mirror of all pages
            ├── index.astro
            └── (all the EN pages)
```

---

## 8. Outstanding items / TODOs

### 🟢 Content placeholders to replace with real

- [ ] **Customer logos** in `TrustStrip.astro` — currently fake names ("Diet Center Athens" etc.)
- [ ] **Testimonials** in `Testimonials.astro` — currently 3 placeholder quotes by "Σοφία Λ.", "Δημήτρης Κ.", "Άννα Μ."
- [ ] **App screenshots** in Hero dashboard mockup — currently designed mock UI. Replace with real product screenshots when ready
- [ ] **Founder photos / team** — `AboutSection.astro` currently uses abstract dual-panel design. No actual people photos
- [ ] **Blog post content** — `/blog` index has 5 post stubs, no actual articles. Need to write them
- [ ] **Open Graph image** — `BaseLayout.astro` references `/og-default.png` which doesn't exist

### 🟡 Functional wiring (need backend or service integration)

- [ ] **Contact form** (`/contact`) — currently optimistic UI only. Needs Resend / Formspree / custom API
- [ ] **AI Assistant waitlist** (`/features/ai-assistant`) — same, needs backend
- [ ] **Demo booking** — "Book a demo" button does nothing. Needs Calendly integration or similar
- [ ] **Newsletter signup** (if desired) — not built yet

### 🔵 Pre-launch verification

- [ ] **Hard refresh in browser to verify** — all pages render, no console errors
- [ ] **Mobile responsive check** across all pages (built mobile-first but worth eyeballing)
- [ ] **Lighthouse audit** — target 95+ on Performance/SEO/Accessibility
- [ ] **Test all i18n switches** — every page has proper EN/EL toggle that works
- [ ] **Test FeatureTabs interactivity** — clicking tabs swaps content correctly
- [ ] **Test PricingMatrix toggles** — all 3 axes work in combination

### 🔴 Deploy prep

- [ ] `git init` + first commit (NOT done yet — user wanted to do this themselves)
- [ ] Push to GitHub/GitLab as new repo (separate from `inhealion-fe`)
- [ ] Connect Vercel to repo
- [ ] Set `nutriq.gr` as custom domain in Vercel
- [ ] DNS config (CNAME or A record to Vercel)
- [ ] Verify SSL auto-provisioning
- [ ] Test production build at preview URL before pointing nutriq.gr at it

---

## 9. Build & dev commands

```powershell
# From c:\NutriQ-marketing\
npm install           # one-time
npm run dev           # local dev → http://localhost:4321
npm run build         # production build → dist/
npm run preview       # serve the built site locally
```

**Last verified**: build passes (33 pages, 6.4s, 0 errors, 0 warnings) on May 2026.

---

## 10. Continuation tips for new Claude session

### Before making changes
1. Read this file
2. Check `package.json` to confirm Astro version (currently 5.x)
3. Run `npm run build` to confirm clean baseline before adding features
4. If user wants UI changes — preview existing design first via `npm run dev`

### Common tasks

**Add a new page**:
1. Create `src/pages/{name}.astro` (Greek)
2. Mirror at `src/pages/en/{name}.astro` (English) with adjusted import paths
3. Add translations to `src/i18n/ui.ts` for both langs
4. Update `Header.astro` nav array if it should appear in main nav
5. Update `Footer.astro` link columns

**Add a new feature to FeatureTabs**:
1. Edit `src/components/FeatureTabs.astro`
2. Add entry to both `el` and `en` `tabs` arrays (matching shapes)
3. Pick a `visual` type or add a new one in the visual swap section
4. Add corresponding `/features/{id}.astro` page (EL + EN) if you want a deep dive

**Add a new pricing tier**:
1. Edit `src/i18n/pricing.ts`
2. The `PricingMatrix.astro` will pick it up automatically

**Change brand colors**:
1. Edit `tailwind.config.mjs` (the `colors` section)
2. Don't change `brand-900` from `#00494D` — user established this is canonical
3. Don't add `#003931` back — user explicitly said this is NOT a brand color

### Things to NOT do

- ❌ Don't bring back Fraunces or any serif font
- ❌ Don't add "For Solo" or "For Clinics" pages (user explicitly removed)
- ❌ Don't make it a true single-page site (user wants multi-page architecture)
- ❌ Don't add `font-display` CSS rules that change away from Inter
- ❌ Don't put `#003931` in any palette (it's wrong)
- ❌ Don't auto-init git or auto-push to remote — user wants to control this

### User communication style

- User speaks **Greek primarily**, switches to English freely
- Prefers concise updates, not long essays
- Likes design review checkpoints — pause and ask before doing large batches
- Will iterate on design direction (e.g., went from editorial → modern SaaS mid-build)
- Appreciates clear "what's left" summaries

---

## 11. Memory references (from auto-memory system)

These memories are loaded automatically in NutriQ-related sessions:

- **NutriQ specs and tickets** — references to TICKET-338, COPY_PASTE_BE_REQUIREMENTS
- **Companies cannot edit system-admin foods** — FE constraint for the app
- **Git branch workflow — propose, never auto-act** — applies to BOTH the app repo AND this marketing site repo

When starting a new session: trust this MD file as the most current state for the marketing site specifically. App-related memories (above) are for `c:\NutriQ\` not here.
