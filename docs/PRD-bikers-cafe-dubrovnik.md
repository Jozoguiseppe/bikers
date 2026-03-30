# Product Requirements Document (PRD)

## Bikers Cafe Dubrovnik — Premium Landing Page

---

## 1. Document control

| Field | Value |
|-------|--------|
| **Project title** | Bikers Cafe Dubrovnik — Marketing Landing Page |
| **Version** | 1.0 |
| **Status** | Draft — ready for design & engineering review |
| **Owner** | Founder / General Manager, Bikers Cafe Dubrovnik |
| **Authors** | Product (this document); to be supplemented by design lead & tech lead |
| **Stakeholders** | Founder/GM, Head of operations, Lead designer, Frontend lead, Content/SEO, Social media manager |
| **Last updated** | 2026-03-30 |

### Revision history

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0 | 2026-03-30 | Product | Initial PRD: full scope, hero scroll-video spec, IA, content model, UAC, appendices |

---

## 2. Product summary

**What Bikers Cafe Dubrovnik is:** A biker-focused cafe in Dubrovnik positioned as a **destination for motorcycle culture**—welcoming touring riders, locals, and visitors who want a **themed, high-quality** food-and-drink experience with a **distinct garage-meets-coast** atmosphere.

**What the website is:** A **single premium landing page** (marketing site) that functions as the **digital front door**: cinematic, fast to understand, and optimized to drive **visits, calls, map opens, and social follows**—not a booking engine or ecommerce platform.

**What success looks like:**

- Visitors **understand the concept in under 10 seconds** (hero + headline).
- Users **scroll deep** through story, gallery, and proof (reviews).
- **Map, phone, and social** actions are easy and tracked.
- The experience feels **premium and credible** to both **international tourists** and **local bikers**.

**Emotional impression the site must create:** **Cinematic confidence**—dark, mechanical, modern, immersive; **orange** as controlled energy (signal, not chaos); **white** typography as clarity cutting through the night ride. The visitor should feel: *“This is the real deal—I want to see it in person.”*

**Business outcomes (real terms):**

- **Brand awareness:** Memorable visual signature (hero video + palette) aligned with the logo.
- **Foot traffic:** Frictionless **directions** and **clear address/hours**.
- **Social discovery:** Prominent **Instagram/Facebook** paths for ongoing engagement and UGC loops.
- **Trust:** Reviews and professional presentation reduce hesitation for first-time visitors.

---

## 3. Problem statement

**Business problem:** Without a **strong, modern web presence**, the cafe competes on word-of-mouth and scattered social posts alone. Prospective visitors **cannot quickly answer**: What is it? Is it worth detouring? Where exactly is it? What does it feel like?

**Risks of weak or absent web presence:**

- **High bounce** from generic listings (maps/social) with insufficient story or imagery.
- **Lost foot traffic** from tourists who choose a more “obvious” venue.
- **Inconsistent brand** across channels—weakens memorability and premium positioning.
- **Lower trust** vs. competitors with polished digital touchpoints.

**Why a premium motion-led landing page matters:** The brand trades on **culture and atmosphere**. Motion and **scroll-synced hero video** communicate **vibe and quality** faster than static copy. A **cinematic, restrained** execution signals **serious hospitality**, not a gimmick—when paired with performance discipline and accessibility.

---

## 4. Goals and objectives

### Business goals

- Increase **qualified visits** (tourists + locals) informed by the website.
- Grow **Instagram/Facebook** engagement from web referrals.
- Establish **premium positioning** for the Dubrovnik market.

### User goals

- **Instant clarity** on concept and vibe.
- **Fast wayfinding** (map + directions).
- **Proof** (photos, reviews) to justify a visit.
- **Low-friction contact** (phone, social).

### Brand goals

- **Consistent** black / orange / white identity from logo through UI.
- **Signature moment:** scroll-driven hero video experience (desktop-first).
- **Tone:** bold, mechanical, modern—never tacky or cluttered.

### Design goals

- **Cinematic composition** with depth (3D feel via layering, lighting, motion).
- **Glass + metal** surfaces used sparingly and credibly.
- **Typography-led** hierarchy; restrained ornament.

### Technical goals

- **Excellent Core Web Vitals** on content-heavy sections (gallery) despite hero video.
- **Graceful degradation** on mobile / low-power devices.
- **Maintainable** stack (see §21); typed components; predictable content model.

### SEO goals

- Strong **local relevance** (Dubrovnik + biker cafe + brand name).
- Clean **metadata**, **OG/Twitter**, **canonical**, **robots** strategy.
- **NAP consistency** with Google Business Profile (when live).

### Conversion goals

- **Primary:** Map/directions intent, phone tap, social clicks.
- **Secondary:** Gallery engagement, scroll depth, return visits via social.

---

## 5. Non-goals (phase 1)

The first release **will not** include:

| Non-goal | Notes |
|----------|--------|
| **Ecommerce / merch checkout** | Out of scope unless explicitly added later |
| **Online ordering** | Not in v1 |
| **Full reservation backend** | No accounts, no booking engine; optional “call us” only |
| **Multilingual UI** | English-only copy in v1 unless client mandates otherwise |
| **User login / dashboard** | None |
| **Blog / CMS-heavy editorial** | No blog in v1 |
| **Live Google Reviews API** | Optional phase 2; v1 uses curated/static reviews |
| **Complex admin UI** | Content may ship as structured data / headless later |

---

## 6. Success metrics

Targets are **directional** until baseline analytics exist post-launch; revise after 4–8 weeks.

| Metric | Target (directional) | Rationale |
|--------|----------------------|-----------|
| **Bounce rate** | ≤ 45–55% (landing traffic) | Strong hero + clarity |
| **Avg. time on page** | ≥ 1:30–2:30 | Story + gallery engagement |
| **Scroll depth** | ≥ 60% users past About | Content resonance |
| **Map / directions clicks** | Track uplift week-over-week | Primary conversion |
| **Phone clicks** | Track; compare device mix | High intent |
| **Instagram / Facebook clicks** | CTR from footer + any inline CTAs | Social loop |
| **Gallery interactions** | Opens / lightbox usage | Proof engagement |
| **LCP** | ≤ 2.5s (75th percentile field) | SEO + UX |
| **INP** | ≤ 200ms | Interactivity |
| **CLS** | ≤ 0.1 | Layout stability |
| **Lighthouse Performance** | ≥ 85–90 on tested profile | Guardrail (not vanity) |

**Mobile vs desktop:** Desktop may show **higher scroll completion** on hero; mobile may show **higher map/phone**—segment metrics accordingly.

---

## 7. Audience and personas

### Persona A — “Marco” — Tourist biker (EU, touring)

| Dimension | Detail |
|-----------|--------|
| **Demographics** | Male, 38; Germany; middle income; travels with partner or small group |
| **Intent** | Find a **credible** biker-friendly stop in Dubrovnik |
| **Emotional driver** | Pride in the ride + desire for **authentic** spots, not tourist traps |
| **Needs from page** | Instant vibe, **photos**, **map**, **hours**, trust signals |
| **Content priorities** | Hero proof, gallery, reviews, location |
| **UX priorities** | Fast load, readable type on dark, **directions** |
| **Trust signals** | Real photos, reviews, precise address, professional design |

### Persona B — “Ana” — Local biker (Croatia)

| Dimension | Detail |
|-----------|--------|
| **Demographics** | Female, 29; Dubrovnik area; regular weekend rider |
| **Intent** | Find a **community** hangout; compare vibe vs other cafes |
| **Emotional driver** | Belonging; **local credibility** |
| **Needs from page** | Story of the place, **Instagram** link, hours, location |
| **Content priorities** | About, reviews, social |
| **UX priorities** | Mobile-first actions (map, phone), fast scanning |
| **Trust signals** | Local references in copy, real reviews, social presence |

### Persona C — “Chris & Sam” — Tourist couple (non-bikers)

| Dimension | Detail |
|-----------|--------|
| **Demographics** | Mixed 30s; US/UK; vacation mode |
| **Intent** | “Cool themed cafe” for an afternoon or evening |
| **Emotional driver** | Novelty + **Instagrammable** atmosphere |
| **Needs from page** | **Vibe** (video/gallery), location near itinerary, reviews |
| **Content priorities** | Hero, gallery, reviews, map |
| **UX priorities** | Simple language, **clear CTA** to directions |
| **Trust signals** | Clean design, good photos, positive reviews |

### Persona D — “Ines” — Social-first discoverer (Instagram)

| Dimension | Detail |
|-----------|--------|
| **Demographics** | Female, 24; EU; discovers via Reels/Stories |
| **Intent** | Validate hype; find **exact location** and hours |
| **Emotional driver** | FOMO + aesthetic match |
| **Needs from page** | **Gallery**, vibe, **IG link**, map |
| **Content priorities** | Gallery, hero, footer social |
| **UX priorities** | Thumb-friendly taps, fast imagery |
| **Trust signals** | Cohesive brand, not generic template |

---

## 8. User stories

**Hero**

- As a **first-time visitor**, I want the hero to **show the vibe immediately** so I know what kind of place this is.
- As a **desktop user**, I want **scroll to advance the cinematic video** so the experience feels premium and intentional.
- As a user with **vestibular sensitivity**, I want **reduced motion** so I am not forced through heavy parallax/video scrubbing.

**About**

- As a **tourist**, I want a **short, credible story** so I understand why this cafe is special.
- As a **local**, I want to see **community and identity** so I feel this is an authentic spot.

**Gallery**

- As a **social-first visitor**, I want **high-quality photos** quickly so I can decide to visit.
- As a **mobile user**, I want **swipeable** or easy-to-browse images without jank.

**Location**

- As any visitor, I want **one-tap directions** so I can navigate without copying text manually.
- As a **mobile user**, I want **click-to-call** when I need help.

**Reviews**

- As a skeptical visitor, I want **credible testimonials** so I trust the experience.

**Footer**

- As a visitor, I want **Facebook, Instagram, and phone** in one place so I can follow or call instantly.

**SEO / accessibility**

- As a screen reader user, I want **semantic structure** and **text alternatives** so I get equivalent information.

---

## 9. Functional scope (in-scope)

| Feature area | What it does |
|--------------|----------------|
| **Hero (scroll-video)** | Full-viewport pinned hero; video progress mapped to scroll; overlay typography animates with progress |
| **About** | Brand story, differentiation, optional stats |
| **Gallery** | Image grid/stack; optional lightbox; lazy loading |
| **Location** | Address, hours (optional), embedded or linked map, directions CTA |
| **Reviews** | Curated review cards (static JSON/CMS-ready) |
| **Footer** | Brand line, social icons (Facebook, Instagram), phone icon/link |
| **Global** | Metadata, OG, Twitter card, canonical, robots, sitemap reference, analytics events |
| **Accessibility** | Keyboard, focus, contrast, reduced motion paths |

---

## 10. Information architecture

**Top-to-bottom order:**

1. **Hero** (pinned scroll region ~200–300vh) — signature experience  
2. **About Us** — transition from hero into readable story  
3. **Gallery** — visual proof  
4. **Location** — wayfinding  
5. **Reviews** — trust  
6. **Footer** — persistent brand + contacts  

**Anchor linking:** Optional single-page anchors (`#about`, `#gallery`, `#location`, `#reviews`, `#contact`) for campaigns; smooth scroll; **offset** for any fixed UI if introduced.

**Hero → About transition:** When scroll progress exits hero range, **unpin** hero and **reveal** About with content fade/slide; no jarring jump (see §12-A).

**Footer destinations:** Social URLs (new tab), `tel:` for phone, legal/minimal copyright.

---

## 11. Content model

| Field name | Type | Example | Length guidance | Req | Edit frequency |
|------------|------|---------|-----------------|-----|----------------|
| `site.title` | string | Bikers Cafe Dubrovnik | ≤ 60 chars | Y | Rare |
| `site.tagline` | string | Best Place for Bikers in Dubrovnik | ≤ 80 chars | Y | Rare |
| `hero.headline` | string | RIDE IN. CHILL OUT. | ≤ 40 chars | Y | Seasonal |
| `hero.subheadline` | string | Premium biker cafe on the Adriatic—coffee, food, and the road in one stop. | 80–160 chars | Y | Seasonal |
| `hero.ctaPrimary` | string | Get Directions | ≤ 24 chars | Opt | Medium |
| `hero.ctaSecondary` | string | View Gallery | ≤ 24 chars | Opt | Medium |
| `hero.video.posterSrc` | URL | `/media/hero-poster.jpg` | — | Y | Rare |
| `hero.video.src` | URL | `/media/hero-main.mp4` | — | Y | Rare |
| `about.title` | string | Built for the Road | ≤ 40 chars | Y | Rare |
| `about.body` | markdown/text | (2–3 short paragraphs) | 400–900 chars | Y | Medium |
| `about.stats[]` | array | `{ label, value }` e.g. Seats, Years | 2–4 items | Opt | Rare |
| `gallery.items[]` | array | `{ src, alt, caption? }` | 8–24 images | Y | High |
| `location.address` | string | Ulica …, Dubrovnik | full | Y | Rare |
| `location.hours` | string or structured | Mon–Sun 9:00–23:00 | — | Opt | High |
| `location.mapUrl` | URL | Google Maps URL | — | Y | Rare |
| `location.embedAllowed` | boolean | true | — | Opt | Rare |
| `reviews.items[]` | array | `{ quote, name, rating, source?, date? }` | 4–12 | Y | Medium |
| `footer.phone` | E.164 or display | +385 … | — | Y | Rare |
| `social.facebook` | URL | https://facebook.com/... | — | Y | Rare |
| `social.instagram` | URL | https://instagram.com/... | — | Y | Rare |
| `seo.metaDescription` | string | … | 140–160 chars | Y | Medium |

---

## 12. Detailed feature requirements

### A. Hero section with scroll-controlled video

| Aspect | Specification |
|--------|----------------|
| **Purpose** | Immediate emotional hit; communicate **premium biker** positioning; anchor brand memory |
| **User value** | Understand vibe before reading; enjoyable, share-worthy experience |
| **Business value** | Differentiation; longer dwell; stronger brand recall |

**UX behavior**

- On load: hero is **100vh**, **pinned**; video at **t = 0** (or poster if not ready).
- User scrolls through a **scroll container** of **200vh–300vh** (configurable constant).
- **Scroll progress** `p ∈ [0,1]` maps to **video currentTime** proportionally: `time = p * duration` (with smoothing).
- At `p → 1`, hero **completes**; next section begins **without** scroll position jumps (unpin + transition).
- Overlay headline/subheadline: **opacity, blur, translateY, scale** tied to `p` with **distinct curves** (not 1:1 with video to avoid illegibility).

**UI composition**

- Full-bleed video (object-fit: cover).
- **Gradient scrim** (black + subtle bottom fade) for text legibility—**must pass contrast** for white text.
- Optional **thin orange rule** or frame element aligned to grid.
- CTAs: max **two** (primary filled / secondary outline).

**Data fields**

- `video.src`, `video.poster`, optional `video.webm`, `duration` (from metadata).

**States**

- **Loading:** Poster visible; subtle skeleton or spinner **non-intrusive** (corner).
- **Ready:** Transition poster → video first frame.
- **Playing/scrubbing:** Driven by scroll (desktop).
- **Error:** Poster + message “Experience unavailable—continue below”; **no** blocking modal.

**Interactions**

- Scroll is primary; optional **Skip to content** link before hero (accessibility).
- Keyboard: **Skip link**, focusable CTAs.

**Motion details**

- Smoothing via **requestAnimationFrame** loop reading scroll target, **lerp** toward target time (e.g. damping factor tuned for 60fps).
- Text: staggered fade + slight parallax on Y.

**Responsive**

- **Desktop/laptop:** Full scroll-scrub spec.
- **Tablet:** Prefer scrub **or** simplified: autoplay muted short loop + shorter pin height—**pick one** in build after perf test.
- **Mobile:** If scrubbing hurts **INP/LCP** or battery, use **muted loop** + shorter hero height; ensure **no** mandatory long scroll to reach content.

**Accessibility**

- `prefers-reduced-motion: reduce`: disable scrub sync; show **static poster** or short fade; no forced long pinned scroll.
- Visible **pause** not required if no autoplay audio; **no audio** by default.

**Technical notes**

- `IntersectionObserver` + scroll listener on container; **debounce** resize; **cancel** rAF on unmount.
- Video `preload="metadata"` or `auto` balanced with LCP; **serve compressed** MP4 (H.264) + optional WebM.
- Consider **CDN** with **byte-range** support.

**Analytics**

- `hero_scroll_complete` when `p ≥ 0.95` once per session/page load.
- `hero_cta_click` with label.

**Dependencies**

- Final encoded video asset, poster frame.

**Edge cases**

- Very short viewport: reduce pin height; ensure CTAs still reachable.
- Safari iOS quirks: test `currentTime` updates throttling.

**UAC — Hero**

1. **Given** a desktop user on first load, **when** they scroll from top through the hero scroll region, **then** the video progresses from start to end smoothly without stutter **and** About is reachable without broken layout.  
2. **Given** reduced motion is enabled, **when** the page loads, **then** scrubbing is not required for access to content **and** no essential information is only in motion.  
3. **Given** video fails to load, **when** the user views the hero, **then** poster remains visible **and** downstream content remains usable.

---

### B. About Us section

| Aspect | Specification |
|--------|----------------|
| **Purpose** | Explain identity, local connection, and why the cafe matters |
| **Composition** | Section label, H2, 2–3 paragraphs, optional stats row |
| **Typography** | H2 white; body muted white; max line width ~65ch |
| **Imagery** | Optional single interior photo with orange edge treatment |
| **Micro-motion** | Section reveal: opacity + translateY on scroll into view (subtle) |

**Content fields:** See §11.

**UAC**

1. **Given** any user, **when** they reach About, **then** they can read **what the place is** and **why it is special** without horizontal scroll.  
2. **Given** keyboard user, **when** tabbing, **then** focus order is logical and visible.

---

### C. Gallery section

| Aspect | Specification |
|--------|----------------|
| **Purpose** | Visual proof; social validation |
| **Layout** | Responsive grid **or** cinematic stacked rows; consistent gutters |
| **Hover (desktop)** | Scale 1.02 max; orange border/glow; **respect reduced motion** |
| **Lightbox (optional)** | Dark chrome UI; ESC closes; focus trap; next/prev |
| **Mobile** | Swipe in lightbox; grid stacks 1–2 cols |
| **Performance** | `next/image` or equivalent; **lazy** below fold; modern formats (AVIF/WebP) |
| **Alt text** | Required per image; descriptive, not keyword-stuffed |

**UAC**

1. **Given** slow network, **when** user scrolls to gallery, **then** images do not cause catastrophic CLS (dimensions reserved).  
2. **Given** lightbox open, **when** ESC pressed, **then** lightbox closes and focus returns.

---

### D. Location section

| Aspect | Specification |
|--------|----------------|
| **Purpose** | Wayfinding and trust (real place) |
| **Map** | Embedded iframe **or** static map image linking to Google Maps—**must open correct pin** |
| **Address** | Copy-paste friendly block |
| **Hours** | If used, **match** Google Business Profile |
| **CTAs** | Directions (external), optional click-to-call |

**UAC**

1. **Given** mobile user, **when** tapping directions, **then** maps app or Google Maps opens with correct destination.  
2. **Given** any user, **when** viewing hours (if present), **then** they match published NAP sources.

---

### E. Reviews section

| Aspect | Specification |
|--------|----------------|
| **Purpose** | Trust and social proof |
| **Layout** | Cards: quote, name, rating (stars), optional date/source |
| **Long quotes** | Clamp with “Read more” expanding inline (optional) |
| **Motion** | Stagger reveal on scroll |
| **Fallback** | Curated static reviews in v1 |

**UAC**

1. **Given** screen reader user, **when** navigating reviews, **then** ratings are textually available (not stars-only).  
2. **Given** 10+ reviews in future, **then** layout remains scannable (grid/carousel rules TBD phase 2).

---

### F. Footer

| Aspect | Specification |
|--------|----------------|
| **Purpose** | Persistent **contact + social** |
| **Elements** | Logo/wordmark, brand line, FB + IG + phone icons |
| **Behaviors** | FB/IG: `target=_blank`, `rel=noopener`; phone: `tel:` |
| **States** | Hover/focus: orange glow/outline |

**UAC**

1. **Given** mobile user, **when** tapping phone icon, **then** dialer opens with correct number.  
2. **Given** keyboard user, **when** focusing each icon, **then** focus ring meets contrast (orange on dark).

---

## 13. UI and visual design system

**Mood:** Cinematic, premium garage, mechanical precision, **dark base**, **orange signal**, **white clarity**.

**Materials:** Matte black panels, **tinted glass** (dark), **brushed metal** edges (subtle).

**Depth:** Foreground UI > midground content > background media; **avoid** excessive z-index layers.

**Icon style:** Geometric stroke; **white** default; **orange** on hover/active.

**Buttons**

- **Primary:** Orange fill, black or near-black label if contrast demands; hover slightly brighter + shadow.
- **Secondary:** Transparent with **orange or white** outline.

**Radii:** **8–12px** cards; **999px** only for pills if used.

**Lighting:** Orange as **rim/emissive**; shadows deep and soft.

**Spacing:** Section vertical rhythm **96–160px** desktop; **64–96px** mobile.

**Semantic color tokens (logo-only palette)**

| Token | Role | Hex guidance |
|-------|------|----------------|
| `bg.primary` | Page | `#0A0A0C` |
| `bg.elevated` | Cards | `#12121A` |
| `text.primary` | Headlines | `#F5F5F5` |
| `text.secondary` | Body | `rgba(245,245,245,0.72)` |
| `accent.primary` | CTAs, key icons | `#E67A2E` |
| `accent.glow` | Glows | `#FF9A4A` @ 20–40% opacity |
| `border.subtle` | Hairlines | `rgba(255,255,255,0.08)` |
| `border.accent` | Active | `rgba(230,122,46,0.55)` |
| `button.primary` | Fill | `#E67A2E` |
| `button.secondary` | Outline | `border: 1px solid rgba(245,245,245,0.35)` |
| `focus.ring` | a11y | `2px solid #E67A2E` + offset |

**Contrast rules:** Body text on black must meet **WCAG AA** (prefer AAA for large headings where feasible).

---

## 14. Typography system

| Style | Usage | Weight | Case | Notes |
|-------|-------|--------|------|--------|
| **Display / H1** | Hero | 700–900 | ALL CAPS or Title | Tight tracking, line-height ~0.95–1.05 |
| **H2** | Section titles | 700 | Title | Clear jump from H1 |
| **H3** | Subsections | 600 | Sentence | — |
| **Body** | Paragraphs | 400–500 | Sentence | 16–18px mobile, 18–20px desktop |
| **Label** | Eyebrows | 600 | ALL CAPS | Letter-spacing +1–2% |
| **Button** | CTAs | 600–700 | Title | — |

**Readability:** Max ~65–75ch; avoid long ALL CAPS paragraphs.

**Biker-premium look:** Bold condensed display + neutral grotesk body; **no** comic or script fonts.

---

## 15. Motion and 3D direction

**Principles**

- **Scroll choreography:** Hero = time axis; below fold = **section reveals**.
- **Parallax:** **1–2 layers** max per section; slower background, faster foreground text.
- **Hero video sync:** Primary signature; smoothing mandatory.
- **Hover:** Mechanical glow lines; **small** translateZ illusion via shadow + scale.
- **Overload guard:** If more than **three** simultaneous animated families are visible, **reduce**.

**Orange trace lines:** Use **1px–2px** lines, **short** durations (200–400ms), **ease-out**.

**Performance guardrails:** Prefer **transform/opacity**; test **GPU** cost of blurs; **reduce** simultaneous filters.

**Reduced motion:** Disable scrub; replace with **static** hero + instant section reveals.

---

## 16. Responsive behavior

| Breakpoint | Layout expectations |
|--------------|-------------------|
| **Large desktop** (≥1440px) | Full hero scrub; wide grid; generous whitespace |
| **Laptop** (1024–1439px) | Scrub; 2–3 col gallery |
| **Tablet** (768–1023px) | 2 col gallery; test scrub vs loop |
| **Mobile** (≤767px) | Single column; **shorten** hero pin if needed; **tap targets** ≥ 44px |

**Simplifications on mobile:** Less parallax; fewer simultaneous glows; optional **no lightbox** → full-width viewer.

---

## 17. Accessibility requirements

- **Contrast:** WCAG AA minimum; critical text AAA where feasible.
- **Keyboard:** All interactive elements focusable; **skip link** to main content.
- **Focus:** Visible **orange** focus ring on dark backgrounds.
- **Reduced motion:** OS preference honored (see §12-A, §15).
- **Headings:** Single **H1**; logical **H2/H3** order.
- **Images:** Meaningful `alt`; decorative images `alt=""`.
- **Video:** No essential info **only** in video; poster conveys mood; optional transcript line in About if needed later.
- **Targets:** Minimum **44×44px** touch areas for icons/CTAs.

---

## 18. SEO requirements

| Item | Guidance |
|------|----------|
| **Title** | `Bikers Cafe Dubrovnik | Best Place for Bikers in Dubrovnik` (≤60 chars; validate) |
| **Meta description** | 140–160 chars; include **Dubrovnik**, **biker cafe**, brand line |
| **H1** | One per page; brand + primary intent |
| **H2/H3** | Section names: About, Gallery, Location, Reviews |
| **Image alt** | Descriptive; include “Dubrovnik” only when natural |
| **Local SEO** | NAP consistent with GBP; mention neighborhood/landmarks if approved |
| **Schema** | `LocalBusiness` or `Restaurant` JSON-LD (address, phone, hours, sameAs social) |
| **Open Graph** | `og:title`, `og:description`, `og:image` (1200×630 branded still), `og:url`, `og:type: website` |
| **Twitter** | `summary_large_image` |
| **Canonical** | Single canonical URL (HTTPS, no trailing slash ambiguity) |
| **Robots** | `index,follow` for launch; `noindex` on staging |
| **Sitemap** | `/sitemap.xml` with homepage + future pages placeholder |
| **Performance** | Fast LCP (image/video discipline) supports SEO indirectly |
| **Anchors** | `#about`, etc., for ad campaigns |

---

## 19. Analytics and event tracking

| Event name | Trigger |
|------------|---------|
| `hero_scroll_complete` | Hero progress ≥ 0.95, once |
| `cta_click` | Any primary/secondary CTA with `label` |
| `gallery_image_view` | Image expanded or brought into viewport threshold (optional) |
| `lightbox_open` | If lightbox used |
| `phone_click` | Footer or inline `tel:` |
| `map_click` | Directions or map link |
| `social_facebook_click` | Footer FB |
| `social_instagram_click` | Footer IG |
| `review_expand` | If read-more used |
| `scroll_depth` | 25/50/75/90% milestones |

**Implementation:** Data layer push or GA4 recommended events with **parameters** `{ section, label }`.

---

## 20. CMS / content assumptions (phase 1)

**Phase 1:** Content can live as **typed TS objects** or **`content/site.json`** in repo for speed.

**Future:** Headless CMS (Sanity, Contentful) or **Supabase** for JSON fields—**same schema** as §11.

**Non-developer editing:** Marketing should edit **copy JSON** or CMS fields for: hero text, about, gallery list, reviews, hours, social URLs—**not** layout code.

---

## 21. Technical architecture recommendations

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | **Next.js** (App Router) | SSR/SSG, metadata API, image optimization, routing |
| **UI** | **React + TypeScript** | Type-safe content model |
| **Styling** | **Tailwind CSS** or CSS Modules | Rapid theming with design tokens |
| **Motion** | **GSAP + ScrollTrigger** for hero scrub (timeline control) **or** **Framer Motion** for section reveals—**one primary** library to avoid bloat |
| **Video** | `<video>` + scroll binding; **hosted** MP4; **poster** mandatory |
| **Images** | `next/image`, responsive sizes, modern formats |
| **Fonts** | `next/font` subsetting |
| **Deploy** | Vercel or equivalent CDN edge |

**Reasoning:** Next.js balances **SEO**, **performance**, and **team hiring pool**; TS reduces content/schema errors.

---

## 22. Performance requirements

- **Video:** H.264 MP4, **target bitrate** tuned for 1080p hero (e.g. **8–15 Mbps** source max depending on length; compress for web); **short** duration preferred (15–45s loopable master edited for narrative).
- **Lazy load:** Gallery images; **below-fold** only.
- **LCP:** Optimize poster + first meaningful paint; **no** giant text-blocking scripts.
- **CLS:** Explicit width/height on images/video container.
- **Animation:** Budget **<16ms** frame time goal; degrade effects on low-end.
- **Mobile fallback:** Loop/autoplay muted **or** static poster—measure **INP**.

---

## 23. Dependencies and assumptions

**Client / business**

- Final **logo** SVG/PNG (multiple sizes)
- **Hero video** master + approval of grade/content
- **Gallery** high-res photos (rights cleared)
- **NAP**: address, phone, hours, social URLs
- **Reviews** text approval
- **Analytics** account access

**Team**

- Designer for **visual QA** against logo
- Frontend for **scroll hero** prototype early

---

## 24. Risks and mitigation

| Risk | Mitigation |
|------|------------|
| Heavy video hurts CWV | Aggressive compression, poster LCP, mobile fallback |
| Motion complexity delays launch | Lock hero spec early; time-box prototype |
| Weak photos | Professional shoot or curated editing; fewer but stronger images |
| Unclear messaging | Copy workshop before visual freeze |
| Mobile perf | Separate mobile hero mode; test on real devices |
| Review inconsistency | Curated static quotes in v1 |

---

## 25. Project phases and timeline

| Phase | Deliverables | Duration (indicative) | Dependencies | Owner suggestion |
|-------|--------------|------------------------|--------------|------------------|
| **Discovery** | Goals, audience, competitor scan | 3–5 days | Stakeholder time | PM / Founder |
| **Content & brand** | Copy deck, logo/video assets list | 1–2 weeks | Client assets | Content + Founder |
| **Wireframes** | Low-fi IA, hero scroll storyboard | 1 week | PRD | Designer |
| **Visual design** | UI kit, section mocks, motion storyboards | 2–3 weeks | Wireframes | Designer |
| **Motion prototype** | Hero scrub demo | 1 week | Video asset | Frontend + Motion |
| **Frontend build** | Next.js implementation | 3–5 weeks | Designs frozen | Frontend |
| **QA** | Cross-browser/device, a11y, perf | 1–2 weeks | Build | QA + Frontend |
| **Launch** | DNS, analytics, OG QA | 2–4 days | Approvals | Tech + PM |

---

## 26. QA checklist

- [ ] Hero scrub completes and syncs within tolerance (no major drift)
- [ ] Section spacing matches design tokens
- [ ] Text readable over video (scrim sufficient)
- [ ] Footer icons clickable and correct targets
- [ ] Map opens correct location
- [ ] Phone opens dialer on mobile
- [ ] Gallery crisp; lazy load works
- [ ] Footer responsive; no overflow
- [ ] Motion smooth at 60fps on target desktop
- [ ] Reduced motion path works
- [ ] No contrast failures on primary text
- [ ] Lighthouse / CWV within targets on staging
- [ ] No console errors on happy path

---

## 27. User acceptance criteria (formal)

**Hero**

- **Given** desktop and default motion settings, **when** the user scrolls through the full hero track, **then** video reaches end near completion of track **and** About section is visible without layout break.

**About — Given** content loaded, **when** user reads section, **then** story answers what/why **and** line length stays within readability bounds.

**Gallery — Given** images load, **when** user opens lightbox (if enabled), **then** keyboard and ESC work **and** focus is managed.

**Location — Given** directions CTA, **when** clicked on mobile, **then** external maps opens to pin.

**Reviews — Given** static reviews, **when** read with screen reader, **then** rating information is perceivable.

**Footer — Given** social links, **when** clicked, **then** correct profiles open in new tab.

**Responsive — Given** viewport 375px wide, **when** user navigates, **then** no horizontal scroll for standard content.

**Accessibility — Given** keyboard-only user, **when** tabbing page, **then** all controls reachable with visible focus.

**Analytics — Given** events instrumented, **when** QA triggers actions, **then** events appear in debug mode.

**SEO — Given** deploy, **when** inspecting head, **then** title, description, canonical, OG tags present.

---

## 28. Launch readiness requirements

- All **copy** and **media** legally approved
- **Links** verified (maps, social, phone)
- **Video** optimized; poster set
- **Metadata** complete
- **Analytics** live (staging excluded)
- **No** blocking console errors
- **Responsive** QA signed off
- **robots** allows index on prod only

---

## 29. Future enhancements (phase 2+)

- Food/drink **menu** section
- **Events** / meetups calendar
- **Reservation inquiry** form (non-backend-heavy)
- **Merch** (link-out)
- **Multilingual** (HR/EN)
- **Blog** or **ride routes**
- **UGC** gallery submission
- **Live Google Reviews** sync

---

## 30. Final design and build guidance

- The experience must feel **premium and cinematic**, not generic template.
- **Motion serves storytelling**—if an animation does not clarify hierarchy or emotion, remove it.
- **Black (#0A0A0C), orange (#E67A2E), white (#F5F5F5)** are the **non-negotiable** brand foundation—tune to **actual logo** in QA.
- **Hero video + scroll** is the **signature centerpiece**—protect its performance budget.
- The landing page must be **elegant, bold, performant, and easy to use**.
- Every section must feel **intentionally designed**—spacing, type, and motion aligned to one vision.

---

# Appendices (required)

## Appendix 1 — Suggested page copy placeholders

| Section | Placeholder copy |
|---------|------------------|
| Hero headline | **RIDE IN. CHILL OUT.** |
| Hero sub | Premium biker cafe in Dubrovnik—great coffee, food, and the road in one stop. |
| Hero CTA 1 | Get Directions |
| Hero CTA 2 | View Gallery |
| About title | Built for Riders, Open to Everyone |
| About body | Bikers Cafe Dubrovnik is where the ride meets the Adriatic. We built a home for locals and travelers who live for the road—quality drinks, solid food, and a atmosphere that respects the machine. |
| Gallery title | The Garage Energy |
| Location title | Find Us |
| Reviews title | What Riders Say |
| Footer tag | Best Place for Bikers in Dubrovnik |

---

## Appendix 2 — Suggested React/Next.js component tree

```
app/layout.tsx
app/page.tsx
  components/layout/SiteShell.tsx
  components/sections/HeroScrollVideo.tsx
  components/sections/AboutSection.tsx
  components/sections/GallerySection.tsx
  components/sections/LocationSection.tsx
  components/sections/ReviewsSection.tsx
  components/sections/SiteFooter.tsx
  components/ui/Button.tsx
  components/ui/SectionHeading.tsx
  components/ui/IconSocial.tsx
  components/ui/ReviewCard.tsx
  components/ui/GalleryGrid.tsx
  lib/content/loadSiteContent.ts
  lib/analytics/track.ts
  lib/motion/prefersReducedMotion.ts
```

---

## Appendix 3 — Suggested Next.js file structure

```
/app
  layout.tsx
  page.tsx
  opengraph-image.tsx (optional)
  sitemap.ts
  robots.ts
/components
  /sections
  /ui
  /layout
/lib
  /analytics
  /content
  /motion
/public
  /media
    hero-main.mp4
    hero-poster.jpg
    gallery/*
/content
  site.json
/styles
  globals.css
```

---

## Appendix 4 — Suggested analytics event table

| event_name | parameters | notes |
|------------|------------|-------|
| hero_scroll_complete | `{ duration_ms }` | once per session |
| cta_click | `{ id, label, section }` | |
| gallery_open | `{ image_id }` | |
| phone_click | `{ location: footer|inline }` | |
| map_click | `{ provider: google }` | |
| social_click | `{ network }` | facebook|instagram |
| scroll_depth | `{ percent }` | 25/50/75/90 |

---

## Appendix 5 — Suggested content schema example (JSON)

```json
{
  "site": {
    "title": "Bikers Cafe Dubrovnik",
    "tagline": "Best Place for Bikers in Dubrovnik"
  },
  "seo": {
    "metaDescription": "Bikers Cafe Dubrovnik — premium biker cafe on the Adriatic. Coffee, food, and atmosphere for riders and friends. Get directions and hours."
  },
  "hero": {
    "headline": "RIDE IN. CHILL OUT.",
    "subheadline": "Premium biker cafe in Dubrovnik—great coffee, food, and the road in one stop.",
    "cta": { "primary": "Get Directions", "secondary": "View Gallery" },
    "video": { "src": "/media/hero-main.mp4", "posterSrc": "/media/hero-poster.jpg" }
  },
  "about": {
    "title": "Built for Riders, Open to Everyone",
    "body": "Short paragraphs in production.",
    "stats": [{ "label": "Seats", "value": "40+" }, { "label": "Since", "value": "2024" }]
  },
  "gallery": {
    "items": [{ "src": "/media/gallery/01.jpg", "alt": "Interior of Bikers Cafe Dubrovnik with motorcycles" }]
  },
  "location": {
    "address": "Street, Dubrovnik, Croatia",
    "hours": "Mon–Sun 9:00–23:00",
    "mapUrl": "https://maps.google.com/?q=..."
  },
  "reviews": {
    "items": [{ "quote": "…", "name": "Alex M.", "rating": 5, "source": "Google" }]
  },
  "footer": { "phone": "+385…" },
  "social": { "facebook": "https://facebook.com/…", "instagram": "https://instagram.com/…" }
}
```

---

## Appendix 6 — Suggested responsive breakpoints

| Name | Range | Columns (gallery) |
|------|-------|---------------------|
| sm | 0–639 | 1 |
| md | 640–1023 | 2 |
| lg | 1024–1439 | 2–3 |
| xl | 1440+ | 3–4 |

---

## Appendix 7 — Suggested animation behavior table

| Element | Enter | Hover | Reduced motion |
|---------|-------|-------|----------------|
| Hero text | Fade + Y by scroll progress | CTA glow | Static text; no scrub |
| Section headings | Fade + Y 24px, 400–600ms | — | Opacity only |
| Gallery tile | Stagger 60ms | Scale 1.02 + orange border | No scale |
| Review cards | Stagger | Subtle border glow | Instant |

---

**Logo note:** No logo file was present in the project workspace at PRD authoring time. **Design QA** must align hex values and treatments with **final approved logo exports** (SVG/PDF).

---

*End of PRD*
