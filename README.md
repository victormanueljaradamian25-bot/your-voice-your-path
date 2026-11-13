# Your Voice, Your Path 🏠

Interactive web app for the **Literature in Action** performance task (English B HL, Group 2) on the second half of *The House on Mango Street* by Sandra Cisneros. Slogan: *Tu voz importa. Tus decisiones moldean tu camino.*

## Features
| Page | What it does |
|---|---|
| Home | Hero, progress dashboard and literary context |
| My Voice | Writing prompts, vignette journal, search, word count, `.txt` export |
| My Path | Aspirations with area, supporter and next step; winding progress trail with filters |
| El Coro Esperanza | 4 scenes (15 min), cast rotation, flip keyword cards, scene timer, rehearsal tracker |
| Campaign | Editable slogan / audience / message / call to action, live poster, print, pledge wall |
| Reading Check | 6-question quiz with feedback and best score |

All data is stored in `localStorage` (keys prefixed `yvyp:`). No backend, no tracking.

## Literary connection
Born Bad (keep writing) → Four Skinny Trees / Minerva (resilience and support) → Sally chapters (agency, handled by suggestion) → A House of My Own / Mango Says Goodbye Sometimes (aspiration and returning for others).

## Run
```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
npm run preview  # serve the build
```

## Deploy
Static output with relative paths and hash routing: upload `dist/` to GitHub Pages, Netlify or Vercel.

## Stack
React 18 · Vite 5 · plain CSS (responsive, dark mode, print styles, keyboard-accessible).
