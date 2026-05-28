# Travel Idea React

Travel Idea has been rebuilt as a React + Vite travel discovery app. The new version keeps the original destination media and improves the experience with data-driven destination cards, live filters, saved favorites, a trip estimate planner, route ideas, checklist state, and a responsive contact form.

## Features

- React single-page interface with reusable components.
- Destination search by country, highlight, continent, style, season, and budget.
- Detail modal for highlights, route ideas, practical notes, and budget levels.
- Trip planner with destination, days, travelers, comfort tier, and estimated cost.
- Saved destinations and checklist progress stored in `localStorage`.
- Existing images and video served through Vite from `Travel Idea Website/images`.

## Tech Stack

- React 18
- Vite
- Lucide React icons
- Plain CSS with responsive grid layouts

## Project Structure

```text
Travel-Idea-Website-main/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── data/
│       └── destinations.js
├── Travel Idea Website/
│   ├── images/
│   └── legacy static pages
└── assets/
    └── js/
```

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

## Production Build

```bash
npm run build
```

The built site is written to `dist/`.

## Notes

The legacy HTML pages are still present as source/reference content. The React app now uses `index.html` as the main entry point, and Vite copies the existing `Travel Idea Website` assets during build.
