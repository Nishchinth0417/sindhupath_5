# TASK BRIEF FOR Z.AI: BUILD SINDHUPATH MARKETING LANDING PAGE

You are an expert Principal Frontend Architect, UI/UX Designer, and Creative Technologist specializing in ultra-performant, conversion-focused, premium marketing websites.

Your objective is to design, scaffold, and implement a standalone, lightweight, ultra-premium single-page marketing website for **SindhuPath Merchant Navy Academy**.

---

## 1. PROJECT BRIEF & STRATEGIC MISSION

### The Core Objective
Build a separate, single-page marketing website for **SindhuPath** that will be hosted independently on **Vercel** under the intended production marketing domain `https://www.sindhupath.com/`.

This website is a public-facing brand introduction and marketing funnel. Its primary missions are:
1. Introduce the SindhuPath brand, mission, and preparatory offerings with institutional authority, maritime prestige, and absolute clarity.
2. Clearly articulate why serious maritime aspirants and their families choose SindhuPath over commercial recruitment agents and outdated coaching institutions.
3. Convert interested visitors into enrolled cadets or counseling inquiries by directing them to the existing SindhuPath academy platform located at:
   **Primary Platform URL:** `https://merchant-navy-academy.sindhupath.com/`

### Architectural Boundary (Strict Non-Goals)
- **Do NOT recreate the Learning Management System (LMS) or student portal.**
- **Do NOT implement authentication, user registration databases, or login portals.**
- **Do NOT implement mock tests, faculty assignment suites, or admin dashboards.**
- **Do NOT connect to private databases, Supabase backends, or backend servers.**
- **Do NOT trigger any automatic page-load redirect.** Visitors must experience the marketing site and intentionally click through to the platform.
- **Keep the footprint featherlight**: This site must be 100% static, fast-loading, zero-serverless-overhead, and silky-smooth on low-to-mid-range mobile devices on Indian 4G/5G networks.

---

## 2. VERIFIED BRAND & CONTENT BRIEF

All content must be derived exclusively from empirical, verified facts about SindhuPath. Do not improvise or invent claims.

### A. Who and What SindhuPath Is
- **Full Legal/Brand Name:** SindhuPath Merchant Navy Academy (Alternate Brand Wordmark: **SINDHUPATH**).
- **Motto / Slogan:** *"Knowledge • Discipline • Destination"*
- **Institutional Subhead:** *"Guided by Active Sailors. Engineered by Innovators."*
- **Headquarters / Base:** Bengaluru, Karnataka, India (Operating with Pan-India cadet reach).
- **Core Mission:** Demystify and elevate maritime entrance coaching by delivering authentic, merit-based preparation for the Merchant Navy, founded on maritime discipline and technical rigor—eliminating predatory middlemen, unauthorized recruitment agents, and commercial guesswork.

### B. The Team & Pedagogical Fabric (Verified Differentiators)
SindhuPath's authority stems from its unique multidisciplinary collective:
1. **Mentorship by Active Sailing Mariners:** Instruction and viva mentorship come directly from Master Mariners and Chief Engineers actively serving on international commercial fleets (container vessels, tankers, bulk carriers). They understand real-time shipping company interview criteria because they live it.
2. **DNS Graduate in Tech:** Engineered by a Diploma in Nautical Science (DNS) graduate who cleared the pathway and weaves authentic maritime realities into candidate preparation.
3. **Engineering Rigor:** Built with strategic insights from Urban Planning, Architecture (visual precision), and algorithmic evaluation from Robotics Engineering—powering an objective 14-parameter cadet eligibility framework.
4. **100% Merit-Based Guidance (Zero Placement Selling):** SindhuPath explicitly **does not sell jobs or seat sponsorships**. It is an educational and mentorship academy preparing candidates to win independent company selections on merit.

### C. Verified Courses & Training Programs
Focus on the 4 verified preparatory pillars:
1. **IMU-CET Comprehensive Coaching:** Complete syllabus mastery for the Indian Maritime University Common Entrance Test across Mathematics, Physics, Chemistry, English Grammar, General Aptitude & Logical Reasoning, and Maritime Affairs & General Knowledge.
2. **DNS Sponsorship Preparation:** Dedicated coaching for Diploma in Nautical Science sponsorships with leading global shipping lines. Covers technical nautical viva, shipboard basics, fleet intelligence, and deck seamanship fundamentals.
3. **Sponsorship Interviews & Viva Mentoring:** 1-on-1 interview simulations conducted with active Captains and Chief Engineers. Covers technical questioning, psychometric screening, fleet-specific interview profiles (Maersk, MSC, Fleet Management, Synergy, Great Eastern, Anglo-Eastern), and personal grooming/officer etiquette.
4. **CBT Mock Examination Series & Diagnostics:** Computer-Based Test (CBT) simulations replicating official IMU-CET exam software, timed test conditions, negative marking, and performance analytics.
5. **Supporting Tool — Free Merchant Navy Eligibility Check:** Evaluates 10+2 PCM marks, age limits, and DG Shipping medical standards (unaided 6/6 distance vision, absence of color blindness, BMI).

### D. Verified Contact & Channel Links
- **Admissions Helpline / WhatsApp:** `+91 96322 97514` (Direct Link: `https://wa.me/919632297514?text=Hello%20Sindhupath%20Team,%20I%20would%20like%20to%20learn%20more%20about%20your%20maritime%20preparatory%20programs.`)
- **Official Email:** `Sindhupath@outlook.com` (and `admissions@sindhupath.com`)
- **Official LinkedIn:** `https://www.linkedin.com/company/sindhupath/about/`
- **Official Instagram:** `https://www.instagram.com/sindhupath_academy`
- **Primary Destination Platform:** `https://merchant-navy-academy.sindhupath.com/`

### E. Content to AVOID (Prohibited / Unverified Claims)
- ❌ **NO placement guarantees or job promises.** (The academy explicitly notes in its legal terms: *"We do not guarantee selection, placement, sponsorship, or sea-time availability."*)
- ❌ **NO claims of being a recruitment / manning agency.** (SindhuPath does not hold or claim an RPSL license; it is an academic preparatory academy).
- ❌ **NO fabricated statistics or AI slop numbers:** Do not invent numbers like *"15+ Expert Faculty"*, *"95% Placement Rate"*, *"100% Sponsorship Guarantee"*, or *"10,000+ Enrolled Cadets"*.
- ❌ **NO fake student testimonials or stock-photo "alumni" quotes.**
- ❌ **NO claims of being an accredited DG Shipping pre-sea maritime college.** (It trains cadets to pass entrance exams and get admitted into approved maritime colleges/fleets).

---

## 3. VISUAL DIRECTION & BRAND AESTHETICS

The design must feel like a prestigious, high-end naval academy—calm, confident, disciplined, and technologically sharp. It must avoid looking like a generic SaaS template, crypto dashboard, or colorful gaming site.

### Design Principles (Anti-Slop Guidelines)
- **Sharp & Architectural:** Use subtle, intentional borders (`1px solid rgba(255,255,255,0.1)` or `rgba(11,35,69,0.12)`) and clean, disciplined radii (8px–16px), avoiding cartoonish, bubbly cards.
- **Generous Maritime Spacing:** Allow content to breathe with nautical grid layouts and structured technical metadata.
- **Disciplined Gold Usage:** Treat gold as a precious navigational accent (beacons, compass lines, key badges), never as a loud primary wash.
- **Accessible Contrast:** Guarantee WCAG 2.1 AA compliance across all viewports.

### Palette Architecture
Harmonize the verified brand colors with the maritime oceanic theme:

| Token Name | Hex Code | Role / Usage |
|:---|:---|:---|
| **Deep Sea Night** | `#03232D` / `#071322` | Deepest background for hero, footer, and high-impact dark cards |
| **Ocean Navy** | `#062F3D` / `#0B2345` | Primary institutional brand color; header, primary buttons, accents |
| **Maritime Teal** | `#087F86` | Modern oceanic secondary accent; highlights, route lines, status indicators |
| **Foam / Light Teal** | `#DCEFED` | Soft ocean-tinted surface for badges, subtle fills, and highlights |
| **Navigational Gold** | `#E8B94F` / `#C89B3C` | Hero highlights, key insignia, beacon points, active states |
| **Dark Bronze (AA-Safe)** | `#7A560D` / `#8A6414` | Gold-family text on light surfaces (meets 4.5:1 WCAG contrast) |
| **Horizon Alabaster** | `#F5F7F3` / `#F7F9FC` | Crisp, clean page canvas for daylight reading sections |
| **Pure White** | `#FFFFFF` | Card surfaces, crisp text on dark backgrounds |
| **Slate Text** | `#1A1A1A` | High-legibility primary body text on light backgrounds |
| **Slate Muted** | `#424751` / `#64748B` | Secondary explanatory text, captions, and metadata |

### Typography Hierarchy
- **Display Headings:** `"Bebas Neue"`, sans-serif (Bold, commanding naval caps for hero statements and section titles).
- **Subheads & Navigation:** `"Oswald"`, sans-serif (Technical, structured, condensed letterforms for badges and cards).
- **Body & Explanatory:** `"Montserrat"` or `"Inter"`, sans-serif (Clean, highly legible geometric sans for reading comfort).

---

## 4. ANIMATION SYSTEM: ISOMETRIC MARITIME THEME

Create a coherent, lightweight isometric visual system rendered purely with inline SVG and CSS keyframes. **Do NOT use Three.js, Canvas engines, or large Lottie JSON files.**

### Visual Concept 1: Isometric Ship & Sea-Lane Hero
- A precision-drawn SVG isometric container/cargo training vessel sailing on a faceted isometric ocean plane (`polygon` facets with nautical gradients).
- An animated dashed navigational route line (`stroke-dasharray` and `stroke-dashoffset` CSS keyframe loop) extending from an origin coordinate toward a destination beacon.
- A pulsing navigational harbor beacon at the destination with soft radial wave ripples.
- A slow, dignified vessel float animation (`transform: translateY(-4px) to (4px)` with a gentle `rotate(0.5deg)` over 6 seconds).

### Visual Concept 2: Isometric 4-Tier Cadet Readiness Stack
An isometric vertical or stepped progression diagram showing the cadet transformation:
- **Tier 01 (Foundation):** Isometric chart table representing 10+2 PCM mastery and DG Shipping physical eligibility.
- **Tier 02 (Diagnostics):** Isometric screen terminal representing CBT exam timing and speed diagnostics.
- **Tier 03 (Command):** Isometric ship's bridge panel representing technical viva with Master Mariners.
- **Tier 04 (Destination):** Isometric vessel gangway representing shipping company sponsorship and induction.
Each tier reveals smoothly on scroll using CSS transform and opacity.

### Visual Concept 3: Nautical Micro-Interactions
- **Navigational Compass:** Subtle 45° rotation on hover of primary interactive cards.
- **Radar Ping:** Gentle circular sweep in technical module badges.
- **CTA Nudge:** Smooth forward glide (`translateX(4px)`) on arrow icons when hovering over CTA buttons.

### Animation Guardrails
- Must strictly honor `@media (prefers-reduced-motion: reduce)` by providing clean, non-animated static views.
- Animate only `transform` and `opacity` to avoid GPU layout re-flows.
- Ensure the page is 100% legible and functional even if CSS animations fail or run on low-spec hardware.

---

## 5. RECOMMENDED PAGE STRUCTURE (CONVERSION-OPTIMIZED)

The landing page must follow a tightly structured narrative that builds institutional credibility and drives action:

```
┌──────────────────────────────────────────────────────────────┐
│ 1. GLOBAL HEADER                                             │
│    Logo + Wordmark | Nav Links | WhatsApp Help | "Platform"  │
├──────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION                                              │
│    Eyebrow: "Knowledge • Discipline • Destination"           │
│    H1: "PREPARE FOR THE SEA WITH MASTER MARINERS"            │
│    Lead Copy: Merit-based IMU-CET & DNS Sponsorship Mentoring│
│    Primary CTA: "Explore SindhuPath Platform" → Platform URL │
│    Secondary CTA: "Chat on WhatsApp (+91 96322 97514)"      │
│    Hero Visual: Isometric Vessel & Navigational Route (SVG)  │
├──────────────────────────────────────────────────────────────┤
│ 3. CORE TRAINING MODULES (4 CARDS)                           │
│    • IMU-CET Comprehensive Coaching                          │
│    • DNS Sponsorship Preparation                             │
│    • Sponsorship Interviews & 1-on-1 Viva                    │
│    • CBT Mock Examination Series & Analytics                 │
│    Each card has: Duration/Scope, Key Topics, Direct Action  │
├──────────────────────────────────────────────────────────────┤
│ 4. THE SINDHUPATH DIFFERENCE (WHY US)                        │
│    • Active Deep-Sea Command Mentors                         │
│    • 100% Merit Guidance (Zero Placement Selling)            │
│    • Current Shipping Fleet Intelligence (Maersk, MSC, etc.) │
│    • Transparent Medical & DG Shipping Fitness Counseling    │
├──────────────────────────────────────────────────────────────┤
│ 5. CADET PREPARATION PATHWAY (HOW IT WORKS)                  │
│    Step 1: Eligibility & Physical Criteria Review            │
│    Step 2: Intensive PCM & Maritime Syllabus Coaching        │
│    Step 3: CBT Timed Exam Simulations                        │
│    Step 4: 1-on-1 Sponsorship Mock Viva with Sailing Captains│
│    Step 5: Board Selection & Academy Induction               │
├──────────────────────────────────────────────────────────────┤
│ 6. INSTITUTIONAL FAQ (ACCESSIBLE ACCORDION)                  │
│    • What is IMU-CET and who should take it?                 │
│    • What does DNS Sponsorship mean in the Merchant Navy?    │
│    • What are the mandatory educational & medical standards? │
│    • How does SindhuPath mentor candidates across India?     │
├──────────────────────────────────────────────────────────────┤
│ 7. FINAL CONVERSION CALLOUT                                  │
│    Commanding headline: "Ready to Chart Your Course to Sea?" │
│    Primary Button: "Launch Academy Platform" (Same Tab)      │
│    Helpline: WhatsApp Counselor link                         │
├──────────────────────────────────────────────────────────────┤
│ 8. MINIMAL SEMANTIC FOOTER                                   │
│    Brand Info | Verification Disclaimers | Socials | Legal   │
└──────────────────────────────────────────────────────────────┘
```

---

## 6. REDIRECT & CONVERSION BEHAVIOR SPECIFICATION

1. **Centralized Configuration:**
   Maintain the destination URL in a single central constant:
   ```javascript
   export const SINDHUPATH_CONFIG = {
     platformUrl: "https://merchant-navy-academy.sindhupath.com/",
     admissionsPhone: "+91 96322 97514",
     admissionsWhatsApp: "https://wa.me/919632297514?text=Hello%20Sindhupath%20Team,%20I%20would%20like%20to%20learn%20more%20about%20your%20maritime%20preparatory%20programs.",
     admissionsEmail: "Sindhupath@outlook.com",
     linkedIn: "https://www.linkedin.com/company/sindhupath/about/",
     instagram: "https://www.instagram.com/sindhupath_academy",
     canonicalDomain: "https://www.sindhupath.com"
   };
   ```
2. **Accessible Links:** Every CTA must be a standard semantic HTML `<a>` link (not button with JS window hack) for maximum accessibility, search engine indexing, and standard browser right-click behavior.
3. **Target Handling:** The primary platform link should open in the **same tab** (`_self`) by default to provide a frictionless continuation into the academy ecosystem.
4. **No Premature Redirection:** Never trigger `window.location.replace` automatically on load. The marketing page must first deliver value and allow the user to make a deliberate choice.

---

## 7. TECHNICAL & DEPLOYMENT REQUIREMENTS (VERCEL)

### Framework Selection
Choose the simplest, cleanest modern stack:
- **Recommended Stack:** **Next.js (App Router, Static Export `output: 'export'`)** or **Astro** or **Vite + Vanilla HTML5/Tailwind**.
- Ensure running `npm run build` generates a pristine static distribution folder (`out/` or `dist/`) ready for instant edge deployment on Vercel.
- **Zero Server Overhead:** Zero dynamic Node.js server processes, zero edge functions, zero serverless runtime costs.

### SEO & Structured Data
Include in the `<head>`:
- **Title:** `Sindhupath Merchant Navy Academy | IMU-CET & DNS Sponsorship Coaching`
- **Meta Description:** `India's premier merit-based Merchant Navy coaching academy. Structured IMU-CET coaching, DNS sponsorship interview mentoring by active sailing Captains and Chief Engineers.`
- **Canonical URL:** `https://www.sindhupath.com/`
- **Open Graph & Twitter Cards:** Complete `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card="summary_large_image"`.
- **JSON-LD Schema:** Valid `EducationalOrganization` with slogan, contactPoint, and sameAs links.

### Assets & Icons
- Use standard SVG icons or inline Lucide/Material symbols.
- Ensure all images have explicit `width`, `height`, and `loading="lazy"` (except hero which uses `fetchpriority="high"`).

---

## 8. RESPONSIVE & ACCESSIBILITY REQUIREMENTS

The page must be tested across the following minimum viewport widths:
1. **Small Mobile:** 360px (Samsung Galaxy / entry phones)
2. **Standard Mobile:** 390px (iPhone 13/14/15)
3. **Tablet:** 768px (iPad Mini / Portrait tablets)
4. **Laptop:** 1366px (Standard notebook displays)
5. **Desktop:** 1440px+ (Wide desktop monitors)

### Non-Negotiable Accessibility Rules
- **Zero Horizontal Overflow:** Ensure `overflow-x: hidden` and test wide flex/grid containers.
- **Touch Target Sizing:** Minimum 44×44px for all mobile buttons, links, and accordion headers.
- **Contrast Ratios:** Minimum 4.5:1 for normal text and 3:1 for large display text. Specifically ensure gold text on light surfaces uses the AA-safe dark bronze `#7A560D`.
- **Focus Rings:** Visible, high-contrast keyboard focus indicators (`outline: 2px solid #E8B94F`, `outline-offset: 2px`).
- **Semantic HTML:** Correct landmark structure (`<header>`, `<main>`, `<section>`, `<footer>`), logical `<h1>` to `<h3>` hierarchy.

---

## 9. YOUR DELIVERABLES

When executing this task, Z.ai must produce:
1. **The Complete Codebase:** All source files (`src/`, components, styles, config files).
2. **The Isometric SVGs:** Inline or modular SVG components for the vessel, sea-lanes, and readiness stack.
3. **Vercel Deployment Guide:** Complete instructions for deploying to Vercel with zero friction (`vercel.json` or Vercel Git integration).
4. **Verification Report:** Confirmation of responsive behavior, accessibility audit results, and build success.
5. **Asset Confirmation List:** Clear notes on any local image assets (such as `logo.png` or `sp-ship.jpeg`) that need to be copied into the `public/` directory.

Start by presenting the project architecture and scaffold, then write the clean, modular code.
