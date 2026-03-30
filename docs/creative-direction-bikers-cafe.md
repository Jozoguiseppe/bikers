# Creative Direction — Bikers Cafe Dubrovnik

**Document type:** Brand & creative reference (companion to PRD)  
**Project:** Bikers Cafe Dubrovnik  
**Brand line:** Best Place for Bikers in Dubrovnik  
**Version:** 1.0  
**Last updated:** 2026-03-30  
**Status:** Working reference for design, motion, and build

---

## 1. Visual identity summary

Bikers Cafe Dubrovnik should read as a **premium motorcycle garage meets cinematic lounge**—not a generic restaurant template. The identity is **dark, mechanical, and confident**: black matte as the dominant surface, **burnt orange** as the single accent (signal, glow, mechanical “hot” detail), and **off-white** for high-contrast typography and clarity. Everything should feel **intentionally crafted**: metal edges, neon-adjacent orange lines, deep shadows, and selective highlights—never loud for its own sake.

**Logo color lock:** Creative work must stay within **black, orange, and white** only. No teal, purple gradients, or rainbow accents. Secondary neutrals (if any) come from **tinting black** or **tinting white** within the same family—not new hues.

---

## 2. Color palette (from logo)

| Token | Role | Suggested hex | Usage |
|-------|------|---------------|--------|
| **Ink Black** | Primary base | `#0A0A0C` | Page background, hero void, footer |
| **Charcoal** | Elevated surfaces | `#12121A` | Cards, panels, sticky nav (if used) |
| **Burnt Orange** | Accent | `#E67A2E` | CTAs, key icons, focus, mechanical highlights |
| **Orange Glow** | Emissive read | `#FF9A4A` at low opacity | Glows, hover rims, signal lines (never full rainbow) |
| **Paper White** | Primary text | `#F5F5F5` | Headlines, primary body on dark |
| **Muted White** | Secondary text | `rgba(245,245,245,0.72)` | Supporting copy, meta labels |

**Design QA:** Match final hex to **approved vector/logo exports** under real lighting (P3/sRGB); orange may shift slightly—**consistency with logo** wins over arbitrary “punchier” orange.

---

## 3. UI moodboard (in words)

- **Space:** Low-lit garage opening onto a coastal road—black steel, brushed aluminum, a single orange running light.
- **Texture:** Matte black paint, fine metal grain, subtle brushed streaks (very restrained—no noisy grunge overlays).
- **Light:** One strong key (orange edge/rim), soft fill from white typography, deep falloff into black.
- **Objects:** Engine parts implied by **lines and bolts**—suggested, not illustrated literally everywhere.
- **Mood:** Calm power. Tourists feel “this is a **destination**”; locals feel “this is **our** spot.”

---

## 4. Motion direction

- **Story-first:** Motion explains hierarchy and sequence—hero video drives time; scroll drives **chapter changes**.
- **Ease, not bounce:** Prefer **cubic-bezier** curves that feel **damped mechanical** (slow in, confident settle)—avoid playful elastic UI.
- **Orange as signal:** Thin lines **draw on**, glows **intensify on hover**, section transitions **wipe or fade with depth**—not random parallax on every element.
- **Performance:** Prefer **transform/opacity**; cap simultaneous blurs; **respect `prefers-reduced-motion`**.

---

## 5. 3D direction

- **Depth is layered, not a toy box:** Subtle **Z-separation** (foreground text, mid UI, background video), occasional **camera drift** on hero only (2–4% scale/translate max).
- **Materials read as physical:** Glass panels = **dark tinted glass** with thin orange edge light; metal = **cool gray-black** with specular hits **only** where light justifies them.
- **No clutter:** One focal 3D moment (hero); below the fold, **flat depth** with occasional parallax on section breaks.

---

## 6. Typography direction

- **Display / headlines:** Condensed or strong grotesk / industrial sans—**high weight, tight tracking**, generous line-height only where readability demands it.
- **Body:** Neutral grotesk, slightly open for international tourists reading English.
- **Hierarchy:** Size jumps are **clear**; avoid five similar weights. Use **color** (white vs muted) and **spacing** before adding new font families.
- **Case:** H1/H2 often **ALL CAPS** or **Title Case** for impact; body **sentence case** for clarity.

---

## 7. Material references

- **Black matte paint** (primary surfaces).
- **Brushed aluminum** (dividers, thin frames, icon containers).
- **Tinted glass** (cards, optional overlays)—**dark**, not frosted white.
- **Orange neon “signal”** (thin rules, not full neon signs everywhere).

---

## 8. Lighting direction

- **Single-direction rim light** metaphor: orange accents behave like light hitting an edge.
- **Shadows are deep and soft-edged**—avoid muddy gray mid-tones as “background color”; use **true black** with subtle gradients.
- **Text always wins:** No orange body text on black at small sizes; orange is for **accent, not long-form reading**.

---

## 9. Photography direction

- **Subject:** Real cafe, real bikes, real people (with releases). Hero may be **cinematic b-roll**; gallery = **high-res**, consistent color grade (warm highlights, controlled shadows).
- **Avoid:** Stock “generic biker” clichés, oversaturated HDR, cluttered backgrounds.
- **Composition:** Strong leading lines, **negative space** for type overlays, **consistent aspect** where possible for grid harmony.

---

## 10. Icon direction

- **Stroke icons** or **minimal filled** with **orange accent** on active/hover.
- **Weight:** Match typography—medium stroke, geometric, not playful rounded.
- **Footer social:** Recognizable brand marks **in monochrome white** with orange hover ring/glow—not multicolor brand logos fighting the palette.

---

## 11. Homepage art direction

- **Hero:** Full-bleed darkness + **scroll-scrubbed cinematic motorcycle video**; headline **large, white**, subcopy **muted**; optional thin orange **horizon line** or frame.
- **Transition:** As hero completes, **fade/slide** into About with **increased readability** (slightly brighter elevated surfaces).
- **Rhythm:** **Dark → slightly lifted panel → dark**—breathing room between sections; avoid same-density blocks stacked infinitely.

---

## 12. Section-by-section visual style notes

| Section | Visual feel | Notes |
|---------|-------------|--------|
| **Hero** | Cinematic, immersive, highest contrast | Video is the “engine”; UI overlays minimal and legible |
| **About** | Editorial, grounded, trustworthy | Typography-led; optional stat row as **mechanical modules** |
| **Gallery** | Premium grid or stacked “film strips” | Hover = scale + orange edge; lightbox = dark chrome UI |
| **Location** | Clear, utilitarian, “get here” | Map + address as **precision**—no decorative confusion |
| **Reviews** | Human, warm within dark UI | Cards with structure; quotes feel **real**, not marketing fluff |
| **Footer** | Solid, anchored, quiet power | Logo, line of copy, icons—**no visual noise** |

---

## 13. Do and do not (premium + brand-consistent)

### Do

- Use **black/orange/white** only for brand color decisions.
- Let **video + scroll** be the signature hero experience on desktop.
- Prioritize **readability** and **tap targets** on mobile.
- Use **orange** sparingly for **maximum impact** (CTAs, key lines, active states).
- Align spacing to a **4px or 8px grid**; keep section padding generous.

### Do not

- Introduce **extra brand colors** or gradients unrelated to logo orange.
- Cover the hero with **dense text** or competing CTAs.
- Use **parallax on every element**—causes motion sickness and cheapens the brand.
- Rely on **low-contrast gray-on-black** body copy.
- Default to **generic “AI startup”** aesthetics (Inter-only, purple gradients, glassmorphism without darkness).

---

**Handoff:** This document should be used alongside `/docs/PRD-bikers-cafe-dubrovnik.md` for visual QA, motion design, and frontend implementation.
