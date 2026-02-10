# 🎬 MyShows Tv app

A modern **Vue 3 + Vite** application that demonstrates senior-level frontend engineering practices.  
This project showcases clean architecture, responsive design, performance optimization, and reviewer empathy — built around a TV shows dashboard powered by an external API.

---
<img width="3276" height="1608" alt="image" src="https://github.com/user-attachments/assets/51c5ed24-defc-43a2-b003-c25949089a0c" />

<img width="660" height="1434" alt="image" src="https://github.com/user-attachments/assets/6281c912-66e1-4e99-9338-9cc9c309bbe6" />

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

## 🏗️ Architectural Decisions

- **Vue 3 (Composition API)** — chosen for scalability, clarity, and reusable logic.
- **TypeScript** — ensures type safety and readable, explicit code.
- **CSS Architecture** — scoped styles with variables; grid for desktop alignment, flex for mobile layouts.
- **Accessibility** — semantic HTML and ARIA labels for screen reader support.
- **Performance** — lazy loading and responsive images for Lighthouse optimization.
- **State Management (Pinia)** — caching API responses to avoid redundant calls and deliver a snappy UI.

---

## ⚙️ Core Features

### Composables

- `useGenres` — genre‑based filtering and sorting
- `useDeviceType` — responsive device detection
- `useShows` — API integration and loading state

### Components

- **ShowCard** — reusable card for show details
- **GenreList** — interactive genre filter
- **SearchBar** — search shows by name
- **ThemeToggle** — light/dark mode switch with localStorage persistence
- **MenuToggle** — mobile navigation
- **Skeletons & LoadingBar** — shimmer placeholders and global loading indicator

### Pages

- **Dashboard** — shows grouped by genre, sorted by rating
- **Details** — show information page
- **Genre** — list of shows from a specific genre

---

## 🧪 Unit Test Coverage

We focused testing on the most impactful areas:

- **GenreList** — validates grouping and sorting logic
- **SearchBar** — ensures search input and events work correctly
- **ShowCard** — verifies props rendering and accessibility attributes
- **useGenres composable** — tests genre extraction, grouping, and rating‑based sorting

---

## 📦 State Management

Pinia store (`useShowsStore`) improves navigation and responsiveness:

- **Single Source of Truth** — central store for all show data
- **Avoids Redundant API Calls** — skips fetch if data already exists
- **Snappy UI** — cached data enables instant navigation
- **Loading State** — provides feedback only when fetching initially

**Example Behavior**

- First visit: `loadShows()` fetches data and stores it in `shows`.
- Subsequent navigations: store detects cached data and skips API call.
- Result: fast transitions and a smooth user experience.

---

## 🎨 UI & Theme Toggle

- **ThemeToggle Component** — allows switching between light and dark modes.
- **LocalStorage Persistence** — remembers user preference across sessions.
- **UI Placement**
  - Desktop: top‑right in the header
  - Mobile: bottom‑right in the menu footer
- **Icons** — sun for light mode, moon for dark mode.
- **Benefits** — consistent look across pages, improved user experience, and immediate theme application on reload.
