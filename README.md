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

## Requirements

- **Node.js**: v24.12.0

## Architectural Decisions

- **Framework: Vue 3 (Composition API)** Chosen for its clarity, scalability, and strong ecosystem. The Composition API allows composable, reusable logic (e.g., device detection, genre grouping) and keeps components clean and maintainable.
- **TypeScript** Ensures type safety, readability, and explicitness in both components and unit tests. This avoids unsafe casts (`as any`) and improves developer confidence.
- **CSS Architecture** Scoped styles with variables and responsive layouts. Flex and grid are used strategically: grid for desktop alignment (logo | search | toggle), flex for mobile (logo left, menu toggle right).
- **Accessibility & Semantics** Semantic HTML tags (`nav`, `header`, `main`) and ARIA labels are used to improve screen reader support.
- **Performance** Lazy loading and responsive image handling are applied to optimize Lighthouse scores.

### Composables & Utilities

- `useGenres` for genre-based filtering logic
- `useDeviceType` for responsive device-aware rendering
- `useShows` for API integration and loading state

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

### Pages

- `Dashboard` — Present list of TV shows based on their genre and sorted by rating
- `Details` — Present information related to specific TV show
- `Genre` — Present a list of TV shows from one specfic genre

## Unit Test Coverage

We chose to cover the following key parts of the application:

**GenreList**  
Critical for grouping shows by genre and rendering them correctly. Ensures the grouping and sorting logic is validated.

**SearchBar**  
Central to user interaction. Tested to confirm search input and emitted events work as expected.

**ShowCard**  
The primary UI element for displaying show details. Tested to ensure props render correctly and accessibility attributes are present.

**useGenres composable**  
Core business logic for grouping and sorting shows. Tested to verify correctness of genre extraction, grouping, and rating‑based sorting.
