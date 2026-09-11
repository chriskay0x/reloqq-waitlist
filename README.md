# Reloqq - Waitlist Landing Page

> **Nigeria's first secure, fully verified real estate marketplace.**
> Built to eliminate scam risk and information asymmetry from the rental experience - permanently.

---

## Overview

This repository contains the **pre-launch waitlist landing page** for Reloqq — a secure real estate marketplace enabling verified landlords and property managers to list residential and commercial properties, while renters relocating across Nigerian cities can search, evaluate, and secure homes remotely with confidence.

The page is designed as a high-conversion, premium dark-mode experience — built to communicate trust, credibility, and urgency before the platform goes live.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React](https://react.dev) (Vite) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://motion.dev) via `motion/react` |
| Icons | [Lucide React](https://lucide.dev) |
| Typography | Utendo (custom font via `@font-face`) |
| Language | JavaScript (JSX) |

---

## Project Structure

```
src/
├── assets/
│   └── reloqq-logo.png          # Brand logo (white variant, transparent bg)
├── components/
│   ├── Navbar.jsx                # Sticky glassmorphic navigation
│   ├── HeroSection.jsx           # Full-bleed hero with waitlist form
│   ├── ProblemSection.jsx        # "The Nigerian Rental Crisis" bento grid
│   ├── FeaturesSection.jsx       # Platform features — promise banner + 6 cards
│   ├── HowItWorksSection.jsx     # Tabbed Renter / Landlord flow (4 steps each)
│   ├── WaitlistCTASection.jsx    # Closing full-width CTA with dual-field form
│   └── Footer.jsx                # Brand footer with nav, socials, legal
├── App.jsx                       # Page assembly
├── index.css                     # Global styles + Utendo font-face
└── main.jsx                      # Entry point
```

---

## Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/reloqq-waitlist.git
cd reloqq-waitlist

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

### Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Primary Dark | `#031F1D` | Page background, hero, alternating sections |
| Primary Mid | `#0B2A24` | Alternate section background, card fills |
| Accent Mint | `#D2E7D6` | CTAs, highlights, gradient starts, icons |
| Accent Green | `#8cbf96` | Gradient ends, secondary accents |

### Glassmorphism Pattern

All bento cards follow a consistent glass treatment:

```jsx
className="rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md"
```

Interactive cards add:

```jsx
className="transition-all duration-300 hover:-translate-y-1 hover:border-[#D2E7D6]/15 hover:bg-white/[0.06]"
```

### Typography

The entire page uses **Utendo** — loaded via `@font-face` in `index.css`. Applied inline via:

```jsx
style={{ fontFamily: "'Utendo', sans-serif" }}
```

### Animation Convention

All section-level animations use `whileInView` (triggers on scroll) with `once: true` to avoid re-triggering. A shared `fadeUp` utility is defined in each component:

```js
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});
```

Hero section animations use `animate` (on page load) instead of `whileInView`.

---

## Component Reference

### `Navbar`
- Transparent on load, transitions to `backdrop-blur-xl` glass on scroll
- Mobile drawer with `AnimatePresence` fade-down
- Logo via `<img>` with `brightness-0 invert` for white rendering on dark backgrounds

### `HeroSection`
- Layered `radial-gradient` background glows + subtle grid overlay
- Email capture form with loading spinner and success state swap
- Three glassmorphic stat cards with staggered entrance animations

### `ProblemSection`
- Asymmetric bento: 2 pain point cards left + stat card stacked with third pain card right
- Warm accent palette (rose / amber / orange) — deliberately contrasts the cool mint of solution sections
- `₦4.2B+` fraud stat as the visual anchor

### `FeaturesSection`
- Full-width "Our Commitment" promise banner replaces specific feature detail cards
- Six equal-weight feature cards in a `3×2` grid
- Hover corner glow on each card via `group-hover` + `radial-gradient`

### `HowItWorksSection`
- Framer Motion `layoutId` spring-physics tab switcher (Renter / Landlord)
- `AnimatePresence mode="wait"` for clean tab content transitions
- Ghost step numbers (`text-white/[0.06]`) as spatial depth element

### `WaitlistCTASection`
- Full-bleed radial glow treatment
- Ghost logo watermark (`w-[110vw] opacity-[0.04]`) behind all content
- Role selector (Renter / Landlord) pre-segments the waitlist
- Pulsing live dot in "Waitlist Now Open" badge via `animate-ping`
- Dual-field form (name + email) with inline validation and success state

### `Footer`
- Two-column: brand identity left, navigation + contact right
- Social icons via inline SVG (Lucide removed brand icons in `v0.394+`)
- `© {new Date().getFullYear()}` — always current

---

## Form Submission

All forms currently use a `setTimeout` mock. Replace with your preferred service:

```js
// WaitlistCTASection.jsx & HeroSection.jsx
// Replace the setTimeout block with your actual endpoint:

// Option A — Supabase
await supabase.from("waitlist").insert({ name, email, role });

// Option B — Resend / Mailchimp via API route
await fetch("/api/waitlist", {
  method: "POST",
  body: JSON.stringify({ name, email, role }),
});

// Option C — Formspark
await fetch("https://submit-form.com/YOUR_FORM_ID", {
  method: "POST",
  body: JSON.stringify({ name, email, role }),
});
```

---

## Environment Variables

Create a `.env` file at the project root if connecting a live form endpoint:

```env
VITE_FORM_ENDPOINT=your_endpoint_here
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Access in code via `import.meta.env.VITE_YOUR_KEY`.

---

## Known Considerations

- **Lucide brand icons** (`Twitter`, `Instagram`, `LinkedIn`) were removed in Lucide `v0.394+`. Social icons in `Footer.jsx` use inline SVGs as a replacement.
- **Utendo font** is loaded from the Pixvia CDN reference. For production, self-host the `.woff2` file in `src/assets/fonts/` and update the `@font-face` `src` accordingly.
- **`overflow-x: hidden`** is set on `html` and `body` in `index.css` to prevent ambient glows causing horizontal scroll on mobile.


## License

Private and proprietary. All rights reserved © 2026 Reloqq.

---

*Built with intention. Designed for trust.*
