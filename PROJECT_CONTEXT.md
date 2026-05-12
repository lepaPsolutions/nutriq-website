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
| `nutriq-logo.svg` | **Horizontal lockup** (heart + "nutriq" wordmark + small "your nutrition guide" tagline). viewBox `700 3650 8900 2850` (tuned so heart leaf-tip at y≈3682 is not clipped). Used in Header (h-12) + Footer (h-11). No separate text needed. The leaf has a flat top by design. |
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
/                                  /en/                       Home (contains #features and #about sections)
/features/ai-generator             /en/features/ai-generator
/features/ai-assistant             /en/features/ai-assistant  ← Coming Soon + waitlist
/features/client-portal            /en/features/client-portal
/features/meal-planning            /en/features/meal-planning
/features/nutrition                /en/features/nutrition
/features/food-database            /en/features/food-database
/features/teams                    /en/features/teams
/pricing                           /en/pricing
/blog                              /en/blog                   ← Index only, no posts yet
/contact                           /en/contact
/privacy                           /en/privacy
/terms                             /en/terms
/cookies                           /en/cookies
/404                               (same file)
```

**Total**: 29 pages built (14 unique × 2 langs + 404 + sitemap). The `/features` and `/about` **index pages were intentionally removed** — those concepts live as anchored sections on home (`/#features` from FeatureTabs, `/#about` from AboutSection). The 7 individual `/features/*` deep-dive pages remain.

### Home page sections (in order)

1. **Hero** (`Hero.astro`) — Live ticker, headline with brush underline, big dashboard mockup with stagger animations, floating badges. Dashboard sidebar is `hidden md:flex` (sidebar removed on mobile to give main panel full width). Dashboard URL chip reads `nutriq.gr/clients/maria` (not `app.nutriq.gr`).
2. **TrustStrip** — Marquee of placeholder customer logos (REPLACE WHEN REAL ONES AVAILABLE)
3. **Problem** — Stats section: 30+ hrs, ~40%, 13 dietary patterns
4. **FeatureTabs** (`FeatureTabs.astro`, `id="features"`) — Interactive sticky list + content panel, all 7 features. On mobile, tab cards are compact (short description + arrow hidden via `hidden md:block`).
5. **HowItWorks** — 3 steps with numbered markers
6. **Testimonials** — 3 placeholder testimonials (REPLACE WHEN REAL)
7. **PricingTeaser** (`id="pricing"`) — 3 sample tier cards + CTA to /pricing
8. **AboutSection** (`id="about"`) — Founding story, dual-panel (Engineers + Dietitians), 4 values. **No CTA** — the section is self-contained on home; there's no separate /about page to link to.
9. **FAQ** — 6 questions, FAQPage structured data (JSON-LD for SEO)
10. **FinalCTA** — Deep teal banner with "Start today"

### Nav

Items (intentionally minimal):
- Features → `/#features` (anchor scroll)
- Pricing → `/#pricing` (anchor scroll)
- About → `/#about` (anchor scroll)
- Blog → `/blog` (separate page — has multiple posts)
- **Login** link → `https://nutriq.gr/authentication/login` (opens in new tab, `target="_blank"`)
- **"Start free" / "Ξεκίνα δωρεάν"** CTA → `/pricing`

**Smart anchor scroll**: clicking nav links on home = smooth scroll; from other pages = full navigate then anchor jump. Implemented via `data-nav-anchor` attribute on links (see `Header.astro` script).

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

## 6. SEO

The site is built **SEO-native** — static HTML, hreflang on every page, structured data, clean URLs. This section documents what's implemented and what's still missing, so the founder can answer "what are you doing for SEO?" in conversation.

### What's implemented ✅

| Layer | What | Where |
|---|---|---|
| **Static HTML** | Astro outputs pre-rendered HTML (no runtime rendering) — Google indexes instantly, zero JS-execution penalty | `astro.config.mjs` |
| **Clean URLs** | `format: "directory"` → `/pricing/` not `/pricing.html` | `astro.config.mjs:21` |
| **Sitemap** | Auto-generated at `dist/sitemap-index.xml` with i18n locales (el-GR, en-US) | `@astrojs/sitemap` config in `astro.config.mjs:9-14` |
| **robots.txt** | Allows all crawlers, references sitemap | `public/robots.txt` |
| **Per-page title + description** | Each page has its own `title` and `description` constants in frontmatter, passed to `<BaseLayout>`. Titles 48-60 chars (within Google's 60-char preview). Descriptions 150-160 chars (within 160-char preview). | `src/pages/**/*.astro` (each page) |
| **Title pattern** | Auto-suffix " — Nutriq" unless title already contains it | `BaseLayout.astro:23` |
| **Canonical URLs** | Emitted on every page; defaults to `nutriq.gr + Astro.url.pathname` | `BaseLayout.astro` |
| **Hreflang** | `<link rel="alternate" hreflang="el">`, `hreflang="en"`, `hreflang="x-default"` on every page — prevents EL ↔ EN cannibalization | `BaseLayout.astro:37-39` |
| **Open Graph** | `og:type`, `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`, `og:locale` (el_GR or en_US) | `BaseLayout.astro:42-48` |
| **Twitter Cards** | `summary_large_image` with title/description/image | `BaseLayout.astro:51-54` |
| **JSON-LD: Organization** | Global on every page — name "Nutriq", legalName "InHealion", URL, logo, description, addressCountry "GR", sameAs social links | `BaseLayout.astro:67-77` |
| **JSON-LD: FAQPage** | 6 Q&A pairs from FAQ section → eligible for Google FAQ rich snippets | `src/components/home/FAQ.astro:15-23` |
| **Lang attribute** | `<html lang="el-GR">` or `lang="en-US"` per locale | `BaseLayout.astro` |

### Target keywords (natural, no stuffing)

These are the words our copy is naturally rich in — observable in page titles, h1/h2 headings, body paragraphs. NOT in a `meta keywords` tag (Google ignores that since 2009).

**Greek (primary)**:
- "λογισμικό διατροφής", "διαιτολόγος", "AI πλάνα διατροφής", "πλάνα διατροφής"
- "πελάτες", "ομάδα", "διατροφική ανάλυση", "Μεσογειακή διατροφή"
- "GDPR", "EU hosting", "ελληνική βάση τροφίμων"

**English (secondary)**:
- "nutrition software", "dietitian", "AI meal plans", "meal planning software"
- "client portal", "nutritional analysis", "team practice management"

### Gaps to close before launch ⚠️

| Gap | Impact | Priority |
|---|---|---|
| **Missing `/og-default.png`** | Social shares (LinkedIn, X, Slack) show no image. CTR loss. `BaseLayout.astro:11` references the file but it doesn't exist in `/public` | 🔴 HIGH — quick win, just generate a 1200×630px branded PNG |
| **No blog content** | Blog index exists at `/blog`, but zero articles. Long-tail keyword search traffic = currently zero. This is the #1 SEO lever for SaaS. | 🔴 HIGH — content roadmap |
| **No SoftwareApplication schema** | Google doesn't know we're SaaS, not a generic site. Missing potential for rich pricing snippets. | 🟠 MEDIUM — add to BaseLayout (could include offerCatalog with pricing) |
| **No BreadcrumbList schema** | Deep-dive feature pages and legal pages don't show breadcrumbs in SERPs | 🟡 LOW — polish |
| **No Review / AggregateRating schema** | Testimonials are plain HTML, can't surface star ratings | 🟡 LOW — meaningful only once we have real testimonials |
| **Page-specific OG images** | All pages use the (missing) default. Pricing page could show tier cards, feature pages could show product visuals | 🟡 LOW — polish after default OG exists |
| **Google Search Console + GA4** | Not connected yet; should happen post-deploy to start tracking impressions/clicks | 🔴 HIGH post-deploy — first thing after going live |

### Founder pitch (ready-to-say, ~30 sec)

> "Έχουμε χτίσει το site με Astro που βγάζει static HTML — η Google το αγαπάει γιατί φορτώνει αστραπιαία. Κάθε σελίδα έχει proper meta tags, OpenGraph για social previews, canonical URLs, και hreflang annotations έτσι ώστε οι ελληνικές και αγγλικές εκδόσεις να μη ανταγωνίζονται μεταξύ τους στα αποτελέσματα της Google. Έχουμε structured data για Organization και FAQ — οι ερωτο-απαντήσεις μας βγαίνουν σαν rich snippets. Αυτό που μένει είναι το blog content — θα τραβάει long-tail searches από διαιτολόγους που ψάχνουν λύσεις, και ταυτόχρονα θα χτίζει authority."

---

## 7. Important decisions & user preferences

These were explicit user decisions during build. Honor them:

| Decision | Reason |
|---|---|
| **Multi-page, NOT single-page** | Lots of content to show, but home is comprehensive |
| **Home has full FeatureTabs** | Replaced earlier "FeaturesOverview" with interactive tabs. `FeaturesOverview.astro` is still in the repo but unused (no imports) — safe to delete |
| **No /features or /about index pages** | Removed. Both concepts live as anchored sections on home. The 7 `/features/*` deep-dive sub-pages remain |
| **No "For Solo" / "For Clinics" pages** | Removed as redundant. Solo is default. Team specifics shown via badges in FeatureTabs |
| **Inter font, NOT Fraunces** | Modern SaaS aesthetic, professional Greek rendering |
| **White-dominant, cream selective** | Not too sterile, not too warm. Strategic balance |
| **brand-900 = #00494D** | NOT #003931. User clarified this is the canonical dark teal |
| **Logo SVG has wordmark built in** | No separate "nutriq" text rendered next to logo in Header/Footer |
| **Footer copyright says "Nutriq"** | NOT "InHealion" — user explicitly changed. Legal entity name "InHealion" survives only in JSON-LD `legalName` for Google/SEO. Privacy policy uses "Nutriq" too (no "InHealion (Nutriq, we)" wrapper) |
| **Greek primary, English at /en/** | nutriq.gr is .gr domain, Greek SEO authority |
| **Greek brand spelling is "Nutriq"** | Lowercase q. User uses this consistently. Not "NutriQ" |

---

## 8. Key files & where things live

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

## 9. Outstanding items / TODOs

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
- [x] **Mobile responsive check** — first pass done (Hero, FeatureTabs, Pricing, FAQ, Footer). Hero dashboard mockup on mobile = main panel only (sidebar `hidden md:flex`)
- [ ] **Lighthouse audit** — target 95+ on Performance/SEO/Accessibility
- [ ] **Test all i18n switches** — every page has proper EN/EL toggle that works
- [ ] **Test FeatureTabs interactivity** — clicking tabs swaps content correctly
- [ ] **Test PricingMatrix toggles** — all 3 axes work in combination

### 🔴 Deploy prep

- [x] `git init` + first commit — done
- [x] Push to GitHub — done, pushed to `https://github.com/lepaPsolutions/nutriq-website` (private repo, user's GitHub identity is `iplex@digipath.gr` after credential clear-out — original cached creds were for a different account `joanplex` which caused initial 404 errors)
- [ ] Connect Vercel to repo — **blocked**: Vercel GitHub App needs to be installed on the `lepaPsolutions` organization (returns "repo not found / empty" until then). User must approve the Vercel App for that org at https://github.com/apps/vercel/installations/select_target
- [ ] Set `nutriq.gr` as custom domain in Vercel
- [ ] DNS config (CNAME or A record to Vercel)
- [ ] Verify SSL auto-provisioning
- [ ] Test production build at preview URL before pointing nutriq.gr at it

---

## 10. Build & dev commands

```powershell
# From c:\NutriQ-marketing\
npm install           # one-time
npm run dev           # local dev → http://localhost:4321
npm run build         # production build → dist/
npm run preview       # serve the built site locally
```

**Last verified**: build passes (29 pages, ~4–6s, 0 errors) on May 2026.

---

## 11. Continuation tips for new Claude session

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
- ❌ Don't recreate `/features` or `/about` index pages — those concepts live as anchors (`/#features`, `/#about`) on home; the 7 `/features/*` deep-dive pages stay
- ❌ Don't restore the "Read more" CTA on AboutSection (it pointed to the removed /about page)
- ❌ Don't make it a true single-page site (user wants multi-page architecture)
- ❌ Don't add `font-display` CSS rules that change away from Inter
- ❌ Don't put `#003931` in any palette (it's wrong)
- ❌ Don't change footer copyright back to "InHealion" — user changed it to "Nutriq"
- ❌ Don't auto-push to remote without user direction (initial push is done; future pushes should be proposed first)

### User communication style

- User speaks **Greek primarily**, switches to English freely
- Prefers concise updates, not long essays
- Likes design review checkpoints — pause and ask before doing large batches
- Will iterate on design direction (e.g., went from editorial → modern SaaS mid-build)
- Appreciates clear "what's left" summaries

---

## 12. Memory references (from auto-memory system)

These memories are loaded automatically in NutriQ-related sessions:

- **NutriQ specs and tickets** — references to TICKET-338, COPY_PASTE_BE_REQUIREMENTS
- **Companies cannot edit system-admin foods** — FE constraint for the app
- **Git branch workflow — propose, never auto-act** — applies to BOTH the app repo AND this marketing site repo

When starting a new session: trust this MD file as the most current state for the marketing site specifically. App-related memories (above) are for `c:\NutriQ\` not here.
