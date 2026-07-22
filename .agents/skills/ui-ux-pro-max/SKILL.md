---
name: ui-ux-pro-max
description: UI/UX Pro Max design intelligence skill for modern aesthetic UI/UX, responsive layouts, color systems, glassmorphism, animations, and accessibility best practices.
---

# UI/UX Pro Max Design System & Intelligence

This skill provides comprehensive UI/UX guidelines, design systems, color schemes, modern typography, animations, responsive layouts, and accessibility standards for building top-tier web applications.

---

## Design System Architecture

### 1. Color Palette & Dark Mode Strategy
- **Backgrounds**: Deep space gradient (`#060814` to `#0d1127` with cosmic purple `#190d35` accents)
- **Surfaces / Cards**: Glassmorphism with frosted blur (`background: rgba(15, 23, 42, 0.65)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255, 255, 255, 0.1)`)
- **Primary Accents**: Electric Cyan (`#00f2fe`), Cosmic Purple (`#7928ca`), Mars Red/Amber (`#ff4e50` / `#f9d423`)
- **Text Hierarchy**:
  - Primary: `#ffffff` (High contrast, WCAG AAA)
  - Secondary: `rgba(255, 255, 255, 0.7)`
  - Muted/Caption: `rgba(255, 255, 255, 0.45)`

### 2. Modern Typography
- **Headings**: 'Outfit' / 'Space Grotesk' / 'Inter' — crisp, geometric sans-serif
- **Body**: 'Inter' — highly legible at all sizes
- **Monospace / Technical Data**: 'JetBrains Mono' / 'Fira Code'

### 3. Motion & Micro-Animations
- **Keyframe Choreography**:
  - `twinkle`: Star field twinkle effect with staggered animation delay
  - `shimmer`: Text gradient shimmer effect across titles
  - `float`: Subtle 3D floating animation for space cards & imagery
  - `pulseGlow`: Neomorphic/glow pulse on primary call-to-action buttons
  - `staggerIn`: Staggered entrance animations (`translateY(20px)` → `translateY(0)` with opacity fade)
- **Transition Standards**: Fast, responsive easing (`cubic-bezier(0.16, 1, 0.3, 1)`) between 150ms and 350ms.

### 4. Layout & Responsive Design
- **Container Bounds**: Max 1280px centered container with responsive padding (`1.5rem` mobile, `3rem` desktop)
- **Grid Systems**: Auto-fit CSS Grid with `minmax()` boundaries for card galleries
- **Touch Targets**: Minimum 44x44px interactive areas for mobile accessibility
- **Z-Index Hierarchy**:
  - Background Star field: `-1`
  - Content Cards: `1`
  - Navigation Bar / Headers: `10`
  - Modals / Lightbox overlays: `100`

### 5. Interaction & Feedback
- Interactive card hover state: subtle `translateY(-6px)` + glowing border `box-shadow: 0 12px 40px rgba(121, 40, 202, 0.25)`
- Pressed states: `scale(0.98)` feedback
- Instant accessibility labels (`aria-label`) and visible focus outlines

---

## Page-by-Page Redesign Directives

### 1. Homepage (`index.ejs`)
- Animated space hero section with particle starfield & shimmering gradient title
- Glassmorphism search form with custom styled dropdowns & date pickers
- Staggered entrance animations for all elements
- Inline validation error alerts with slide-down animation

### 2. Photos Gallery (`photos.ejs`)
- Modern gallery grid layout replacing legacy CSS quad
- Filter bar (filter by Camera type: FHAZ, RHAZ, NAVCAM, MAST, etc.)
- Fullscreen Lightbox Modal with zoom, image metadata (Earth Date, Sol, Camera, Rover), and close button
- Smooth image lazy-loading placeholders with skeleton shimmer

### 3. Rover & Camera Support (`camrover.ejs`)
- Futuristic data table with sticky glass header, subtle row hover highlights, camera badges, and camera search filter
- Responsive card view fallback on mobile viewports

### 4. About Us (`about.ejs`)
- Immersive storytelling page with Mission, Vision, and Mars Rover history cards
- Interactive image hover cards with glowing borders
- Counter stats (e.g., Millions of Photos, Active Rovers, Days on Mars)

### 5. Contact Us (`contact.ejs`)
- Styled glass contact form (Name, Email, Message) with real-time validation styling
- Mars Headquarters info card with interactive map placeholder / cosmic graphic
- Responsive layout supporting desktop and mobile viewports

### 6. Custom Error Page (`error.ejs`)
- Styled 404 / 500 error page with cosmic "Lost in Space" theme and "Return to Base" navigation button
