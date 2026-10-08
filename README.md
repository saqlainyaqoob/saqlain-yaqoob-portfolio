# Developer Portfolio — React + Vite + Tailwind CSS

A componentized portfolio based on the supplied design, rebuilt for a normal Vite + React project.

## Features

- React + Vite
- Tailwind CSS with the Vite plugin
- Dark/light theme
- Theme preference persisted in `localStorage`
- Responsive mobile navigation
- Reusable section components
- Separate data files for projects, skills and experience
- Static resume download
- GitHub + LinkedIn links
- Lightweight CSS animations
- Scroll reveal animations using `IntersectionObserver`
- `prefers-reduced-motion` support
- Lucide icons

## Install

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Personalize

Edit:

```text
src/data/site.js
```

Change:

- name
- role
- email
- GitHub URL
- LinkedIn URL

Also edit:

```text
src/data/projects.js
src/data/skills.js
src/data/experience.js
```

## Resume

Replace:

```text
public/resume.pdf
```

with your actual PDF resume.

The Hero download button points to `/resume.pdf`.

## Build for production

```bash
npm run build
npm run preview
```

## Notes

The original generated code used `window.storage` for resume persistence. That API is not a standard browser API, so this version intentionally does not use it.

For a real admin-uploadable resume later, add authentication plus a backend/cloud storage service. For a personal portfolio, keeping the resume as `public/resume.pdf` is simpler and safer.
