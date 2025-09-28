anya’s Interactive Portfolio

A playful, single-page portfolio built with React + Vite.
It features an illustrated desk scene with hidden interactions and a Finder-style window that opens your content (About, Projects, Experience, Contact).

https://tanyas-portfolio.vercel.app/

✨ Features

Interactive desk — click objects (e.g., laptop opens the Finder).

Finder window UI — clean sections with keyboard & screen-reader support.

“Start here” hint — a star coachmark to help first-time visitors.

Light/Dark styles — polished look in both themes.

Mobile friendly — responsive layout and large tap targets.

Fun Stuff (coming soon)
A small ⭐ icon in the Finder will open a gallery of personal “extras” (builds, photos). The UI is scaffolded but disabled until content is ready.

🧱 Tech Stack

React (Vite)

CSS only (no UI frameworks)

🗂 Project Structure (simplified)
src/
  assets/                # images, icons, fonts
  components/
    Finder.jsx          # Finder window + routing between sections
    StarNote.jsx        # star hint/coachmark (open/close note)
    /* (Fun Stuff components will live here) */
  pages/
    About.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
  App.jsx
  main.jsx
  App.css
public/
  favicon.ico

▶️ Getting Started (local dev)

Requirements: Node 18+ and npm (or pnpm/yarn).

# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview

🚀 Deploying (Vercel)

Push to GitHub.

In Vercel: New Project → Import Git repo.

Framework Preset: Vite (auto-detected).

Build command: npm run build
Output dir: dist

Deploy.

Custom domain: Vercel project → Settings → Domains → Add.
Project name / URL: Vercel project → Settings → General → Name.

Note on case-sensitive imports:
If you see Could not resolve "./Desk" from "src/App.jsx", make sure the file name and import match exactly (e.g., import Desk from "./Desk.jsx" when the file is Desk.jsx). GitHub + Vercel builds are case-sensitive.
