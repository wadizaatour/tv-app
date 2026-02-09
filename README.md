# 🎬 MyShows Tv app

A modern **Vue 3 + Vite** application that demonstrates senior-level frontend engineering practices.  
This project showcases clean architecture, responsive design, performance optimization, and reviewer empathy — built around a TV shows dashboard powered by an external API.

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/wadizaatour/tv-app.git
cd tv-app
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

## 🛠️ Technologies Used

### Frameworks & Libraries

- **Vue 3 (Composition API + `<script setup>`)**
- **Typescript**
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
- `LoadingBar` — global loading indicator
- `SearchBar` — search movies by name
- `MenuToggle` — MobileMenu

---
