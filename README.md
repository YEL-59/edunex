# Edunex - Education LMS & Online Course Next.js Template

Edunex is a modern, high-performance, and pixel-perfect Education LMS & Online Course template built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It follows standard **ThemeForest** code and folder structure guidelines.

---

## 🚀 Features

- **Pixel-Perfect Conversion**: 100% same-to-same design, animations, typography, spacing, and content converted from the original HTML template.
- **Next.js App Router & TypeScript**: Built on the latest Next.js with strong typing and optimized server/client components.
- **Tailwind CSS + Modular Theme Styles**: Full Tailwind CSS integration alongside authentic Edunex theme styles and CSS variables.
- **Original Custom Icon Font**: Integrated `edunex-icons` font with all `tji-*` icons working out of the box.
- **Google Fonts Integration**: Zero-layout-shift typography with `Manrope` (body) and `Urbanist` (headings) via `next/font/google`.
- **Interactive Features**:
  - Topbar Real-Time Countdown Timer with close toggle.
  - Sticky Navbar appearing smoothly on scroll.
  - Offcanvas Mobile Hamburger Menu with expandable accordion submenus.
  - Hero Section with 80% Animated Circular Progress & Floating Course Card.
  - Infinite Seamless Marquee of trusted client logos.
  - Category Cards with signature hover flip buttons.
  - Filterable Course Grid (All, Design, Development, Business, AI & ML, Data science) with interactive wishlist toggling.
  - Animated Count-Up Stats in Counter Section (8,000+ Students, 300+ Courses, etc.).
  - Responsive Swiper Carousel for Testimonials with fractional rating stars.
  - Responsive Swiper Carousel for Expert Instructors.
  - Interactive Event Cards & Structured Career Path connector arrows.
  - Interactive Blog section & Complete Footer with Newsletter subscription.
  - Back-to-Top Button with smooth scrolling.

---

## 📁 ThemeForest Folder Structure

```
edunex/
├── public/
│   ├── assets/
│   │   ├── fonts/           # Custom edunex-icons (.woff, .ttf)
│   │   └── images/          # All organized images (hero, courses, users, etc.)
│   └── favicon.png
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts, metadata, Preloader & BackToTop
│   │   ├── page.tsx         # Assembled Home Page
│   │   └── globals.css      # Tailwind v4, Edunex theme CSS & animations
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── Preloader.tsx
│   │   │   ├── BackToTop.tsx
│   │   │   ├── FlipButton.tsx       # 3D text flip button effect
│   │   │   ├── RatingStars.tsx      # Fractional rating stars
│   │   │   └── CircularProgress.tsx # 80% animated circle
│   │   ├── layout/          # Header, Footer, and navigation drawers
│   │   │   ├── TopBarCountdown.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── StickyHeader.tsx
│   │   │   ├── HamburgerMenu.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/        # Modular page sections
│   │       ├── HeroBanner.tsx
│   │       ├── ClientMarquee.tsx
│   │       ├── CategoriesSection.tsx
│   │       ├── CoursesSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── CounterSection.tsx
│   │       ├── TestimonialSection.tsx
│   │       ├── EventSection.tsx
│   │       ├── InstructorSection.tsx
│   │       ├── CareerPathSection.tsx
│   │       └── BlogSection.tsx
│   ├── data/                # Data files for easy customization
│   │   ├── navigation.ts
│   │   ├── clients.ts
│   │   ├── categories.ts
│   │   ├── courses.ts
│   │   ├── counters.ts
│   │   ├── testimonials.ts
│   │   ├── events.ts
│   │   ├── instructors.ts
│   │   ├── careerPaths.ts
│   │   └── blogs.ts
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts
│   └── styles/              # Global stylesheets & icon fonts
│       ├── bootstrap.min.css
│       ├── edunex-icons.css
│       └── main.css
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the assigned port) to view it in the browser.

### 3. Production Build
```bash
npm run build
npm run start
```
