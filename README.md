# 🎬 MyShows Tv app

A modern **Vue 3 + Vite** application that demonstrates senior-level frontend engineering practices.  
This project showcases clean architecture, responsive design, performance optimization, and reviewer empathy — built around a TV shows dashboard powered by an external API.

---

## 📖 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Architecture Decisions](#-architecture-decisions)
- [Setup & Installation](#-setup--installation)
- [Running Locally](#-running-locally)
- [Running Tests](#-running-tests)
- [Use Case Diagram](#-use-case-diagram)
- [Sequence Diagram](#-sequence-diagram)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 🚀 Features

### Core Functionality

- **Dynamic TV Shows Dashboard**
  - Fetches 200+ shows from an API and organizes them by genre.
  - Genre-based filtering with toggle behavior.
  - Horizontal scroll lists for shows, optimized for smooth UX.

- **Show Details Page**
  - Individual show cards with image, title, and premiere year.
  - Router-based navigation with clean URL encoding.

### User Experience Enhancements

- **Skeleton Loading States**
  - Full-page `DashboardSkeleton` with header, genre titles, and card placeholders.
  - Per-card `SkeletonCard` shimmer effect for perceived performance.
  - Seamless swap between skeletons and real content.

- **Responsive Design**
  - Mobile-first layout with adaptive spacing and typography.
  - Tablet and desktop breakpoints for consistent UX.
  - Smooth horizontal scrolling with hidden scrollbars.

- **Theme Toggle**
  - Light/dark mode support with CSS variables.
  - Global theme management via a reusable component.

- **Breadcrumb Navigation**
  - Context-aware breadcrumb bar (hidden on mobile).
  - Enhances navigation clarity for larger devices.

### Performance Optimizations

- **Largest Contentful Paint (LCP) Improvements**
  - `fetchpriority="high"` applied to above-the-fold images.
  - Avoid lazy-loading for critical images.
  - Explicit width/height attributes to prevent CLS.

- **Skeleton-first Rendering**
  - `loading` state starts as `true` to ensure skeletons show on initial page load.
  - Cached data prevents skeleton flashes on navigation.

- **Modern Image Handling**
  - Support for `srcset` and `sizes` for responsive images.
  - Ready for WebP/AVIF formats if API/CDN supports them.

---

## 🛠️ Technologies Used

### Frameworks & Libraries

- **Vue 3 (Composition API + `<script setup>`)**
- **Pinia** for state management
- **Vue Router** for navigation
- **Vite** for fast bundling and dev server
- **Vitest** for unit testing

### Styling & Architecture

- **Scoped CSS** with modern architecture
- **CSS Variables** for theme management
- **Responsive Layouts** with flexbox and media queries
- **Shimmer Skeletons** using CSS animations

### Composables & Utilities

- `useGenres` for genre-based filtering logic
- `useDeviceType` for responsive device-aware rendering
- `useShowsStore` (Pinia) for API integration and loading state

### Components

- `ShowCard` — reusable card for show details
- `SkeletonCard` — shimmer placeholder for show cards
- `DashboardSkeleton` — full-page skeleton layout
- `GenreList` — interactive genre filter
- `ThemeToggle` — light/dark mode switch
- `Breadcrumb` — navigation helper
- `LoadingBar` — global loading indicator

---

## 📐 Architecture Decisions

- **Reviewer Empathy**: Explicit imports, clear prop typing, and composable logic for maintainability.
- **Minimalism vs Professionalism**: Avoid over-engineering while demonstrating best practices.
- **UX Polish**: Smooth scrolling, fade gradients, skeleton loaders, and responsive spacing.
- **Performance Awareness**: LCP optimization, preload hints, and skeleton-first rendering.

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/myshows-dashboard.git
cd myshows-dashboard
```

### 2. Install dependencies

```
npm install
```

### 3. Running locally

```
npm run dev
```

### 4. Production build

```
npm run build
npm run preview
```

### 4. Running tests

```
npm run test
```
