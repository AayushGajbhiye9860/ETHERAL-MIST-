# 🌿 Ethereal Mist — Luxury Expedition Travel Website

> *A high-end, editorial-style travel platform built with React, Vite, and Framer Motion — designed for immersive nature expeditions and curated wilderness journeys.*

---

## ✨ Overview

**Ethereal Mist** is a luxury eco-travel website that presents curated wilderness expeditions — from Patagonia and Borneo to Iceland and the Arctic. The project features a refined "Forest & Gold" design system, cinematic animations, and a full booking flow, built entirely as a modern React SPA.

---

## 🖼️ Pages & Features

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, Stats, Journeys preview, Philosophy, Testimonials, CTA |
| `/journeys` | Journeys | Filterable expedition catalog (Wildlife, Culture, Polar, Jungle, Desert) |
| `/booking` | Booking | Multi-step flight search and booking flow with mock airline data |
| `/story` | Our Story | Brand history with parallax scroll chapters and full-bleed imagery |
| `/gallery` | Gallery | 3D dome-style interactive photo gallery |
| `/contact` | Contact | Contact form and details |
| `/login` | Login | Authentication page with video background |

---

## 🎨 Design System — Forest & Gold

The project uses a custom CSS variable–based design system with the following theme:

- **Mood:** Earthy · Luxury · Editorial · Organic
- **Primary Palette:** Deep forest greens (`#1A4020`), warm gold (`#C09818`), and organic off-white backgrounds (`#F2F5F0`)
- **Typography:**
  - Headings: `Fraunces` / `Playfair Display` (serif, editorial)
  - Body: `Jost` / `Cormorant Garamond` (clean & elegant)
- **Letter Spacing:** Custom eyebrow (`0.38em`), nav (`0.22em`), and button (`0.28em`) tokens

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 + Vite 8 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 + custom CSS variables |
| Animations | Framer Motion v12 + GSAP v3 |
| Gestures | `@use-gesture/react` |
| Auth & DB | Supabase (with mock fallback for local dev) |
| Icons | Lucide React |
| Linting | ESLint 9 |

---

## 📁 Project Structure

```
ETHERAL-MIST-/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Images, videos, story photos
│   ├── components/
│   │   ├── Hero.jsx         # Full-bleed hero with parallax image
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Journeys.jsx     # Journey cards & data
│   │   ├── BookingPage.jsx  # Multi-step booking flow
│   │   ├── Login.jsx        # Auth with video background
│   │   ├── DomeGallery/     # 3D interactive gallery
│   │   ├── SplitText/       # Animated text reveal component
│   │   ├── Testimonials.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Stats.jsx
│   │   ├── CTABanner.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── JourneysPage.jsx
│   │   ├── StoryPage.jsx
│   │   ├── GalleryPage.jsx
│   │   └── ContactPage.jsx
│   ├── lib/
│   │   └── supabase.js      # Supabase client with mock fallback
│   ├── styles/              # Page-specific CSS
│   ├── App.jsx              # Route definitions
│   └── main.jsx             # Entry point
├── theme_text.txt           # Full design system reference
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AayushGajbhiye9860/ETHERAL-MIST-.git
cd ETHERAL-MIST-

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note:** If these variables are omitted, the app runs with a built-in mock Supabase client — perfect for local development and demos.

### Running the Dev Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 🌍 Key Highlights

- **Cinematic Hero:** Full-screen forest imagery with a scale-in entrance animation and decorative gold bracket overlays
- **SplitText Component:** Custom character-by-character animated text reveals across all major headings
- **Dome Gallery:** An immersive 3D-style gallery component for expedition photography
- **Multi-Step Booking:** Flight search → results → passenger details → payment confirmation flow
- **Story Page:** Parallax scroll chapters with full-bleed expedition photography and brand timeline
- **Responsive Design:** Fluid type sizing with `clamp()` and mobile-first layouts

---

## 👨‍💻 Author

**Aayush Gajbhiye**  
First-year Engineering Student — AISSMS College of Engineering, Pune  
[GitHub](https://github.com/AayushGajbhiye9860)

---

## 📄 License

This project is for educational and portfolio purposes.
