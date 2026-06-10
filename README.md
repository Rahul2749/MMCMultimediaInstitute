# MMC Multimedia Institute

Marketing & admissions website for **MMC Multimedia Institute** — a career-focused AVGC-XR
(Animation, VFX, Gaming, Comics, XR) training institute.

The content/information-architecture is modeled on [arena-multimedia.com](https://www.arena-multimedia.com/)
(hero + stats, why-choose-us, course catalog, recruiters, alumni "superstars", testimonials,
events, awards, enquiry), styled with the **"Studio Grade"** design system — a dark, technical
post-production aesthetic (`#131313` base, `#cc003c` crimson accent, Hanken Grotesk / Inter /
JetBrains Mono).

## Tech stack

- React 19 + React Router 7
- Vite 8
- Tailwind CSS 3 (custom Studio Grade theme in `tailwind.config.js` + `src/index.css`)
- GSAP (ScrollTrigger) scroll reveals

## Project structure

```
src/
  components/        Navbar, Footer, Layout, EnquiryForm, CourseTemplate
  data/site.js       Centralized content (stats, courses, why-choose, recruiters, etc.)
  pages/             Home + course/curriculum & application-flow pages
```

Course content is centralized in `src/data/site.js`. The Gaming and Broadcast course pages are
rendered from `COURSE_DETAILS` via the reusable `CourseTemplate` component.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the build
```
