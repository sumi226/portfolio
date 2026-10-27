# Fatema Akter — Full Stack Developer Portfolio Website

A modern, responsive, and high-performance developer portfolio website designed for **Fatema Akter**, Full Stack Web Developer. Crafted with a premium dark navy aesthetic, electric blue and cyan accents, glassmorphic UI elements, and dedicated project detail routes.

---

## 🌟 Key Features

- **Modern Dark Navy & Charcoal Theme**: Tailored color palette (`#070a13`, `#0f172a`, `#15203b`) with electric blue (`#38bdf8`), cyan (`#06b6d4`), and violet (`#8b5cf6`) accents.
- **Sticky Blur Navigation**: Sticky header with dynamic glassmorphism on scroll, active section indicator, mobile drawer menu, and direct resume download.
- **Hero Section**: Introduces Fatema Akter, title, headline, status pill, avatar, dual call-to-actions, and social links.
- **About Me Section**: Deep narrative outlining journey from business/finance analysis to full-stack engineering, project passions, problem-solving mindset, and career goals.
- **Skills Directory**: Categorized into **Frontend**, **Backend**, **Database**, and **Tools & Platforms**. Filtering by domain, key capabilities, and zero arbitrary percentage bars.
- **Educational Timeline**: Professional desktop timeline & stacked mobile cards featuring:
  1. **MBA in Finance & Banking** (IIUC, Chittagong) — CGPA 3.65
  2. **MBS in Management** (National University) — 2nd Division
  3. **Honours in Management** (National University) — 1st Division
- **Projects Section & Interactive Live Demos**:
  1. **DevStack**: High-performance developer workspace, sprint tracker & task organization system (React, Tailwind CSS, JavaScript, Vite, Netlify).
  2. **FitLog**: Dark-mode gym companion, exercise catalog & daily routine planner (Next.js, TypeScript, Tailwind CSS, Vercel).
  3. **বাজার দর (Market Price)**: Real-time essential commodity price monitor with price trend indicators and dynamic shopping cart budgeter (Next.js, TypeScript, Tailwind CSS, Vercel).
- **Dedicated Project Detail Pages (`/projects/:id`)**:
  - Routes: `/projects/devstack`, `/projects/fitlog`, `/projects/market-price`
  - Deep-dive sections: Overview, Key Features, Technical Challenges & Solutions, Architectural Role, Future Roadmap, and interactive live previews.
- **Resume Section**: Dedicated CV viewer with tabs (Summary, Education, Skills, Projects) and downloadable PDF served from `public/resume.pdf`.
- **Contact Section**:
  - Email (`fsumi226@gmail.com`) with 1-click clipboard copy
  - Phone (`+880167971447`) with 1-click clipboard copy
  - WhatsApp (`+880167597147`) direct chat link
  - Location: Chittagong, Bangladesh
  - Interactive contact form with real-time validation, spam honeypot, loading spinner, and graceful fallback to direct mailto.
- **Custom 404 Route (`app/not-found.tsx`)**: Friendly fallback for non-existent URLs.
- **Optional Express Backend**: Lightweight Node.js & Express server in `server/index.ts` for handling contact submissions.

---

## 🛠️ Technology Stack

| Domain | Technology |
|---|---|
| **Language** | TypeScript (Strict Typing with `tsconfig.json`) |
| **Framework & Build** | Next.js 15 App Router with React 18 |
| **Styling** | Tailwind CSS v3 & PostCSS |
| **Icons** | Lucide React |
| **Animations & Transitions** | Framer Motion & CSS Utilities |
| **Routing** | Next.js App Router |
| **Optional Backend** | Node.js & Express.js |
| **Database Support** | MongoDB & MySQL (Optional) |

---

## 📂 Project Architecture

```
fatema-portfolio/
├── package.json                 # Project dependencies & npm scripts
├── next.config.ts               # Next.js configuration & Express API proxy
├── tailwind.config.ts           # Custom theme colors, glows, animations
├── postcss.config.js            # PostCSS plugins
├── .env.example                 # Environment variable templates
├── app/
│   ├── layout.tsx               # Root layout, SEO metadata & shared navigation
│   ├── page.tsx                 # Homepage route
│   ├── not-found.tsx            # Custom 404 route
│   └── projects/[id]/page.tsx   # Dynamic project detail route
├── public/
│   ├── favicon.svg
│   ├── profile.png
│   └── resume.pdf               # Actual resume PDF document
├── scripts/
│   └── generateResumePdf.ts     # Script to generate/rebuild the PDF
├── server/
│   └── index.ts                 # Optional Node/Express contact API server
└── src/
    ├── assets/                  # Local static media & visual assets
    ├── data/                    # Centralized, easily editable data files
    │   ├── profile.ts           # Personal bio, title, headline, about details
    │   ├── skills.ts             # Categorized technical skills
    │   ├── education.ts          # Degree records, institutions, CGPAs
    │   ├── projects.ts           # Project details, features, challenges, roadmap
    │   └── socialLinks.ts        # GitHub, LinkedIn, WhatsApp, email, phone
    ├── components/              # Reusable TypeScript React components
    ├── types/                   # Shared TypeScript types
    └── views/                   # Homepage, project details & 404 page content
└── app/globals.css              # Tailwind directives & global UI utilities
```

---

## 🚀 Quick Start Guide

### 1. Installation

Clone or open the repository folder, then install dependencies:

```bash
cd fatema-portfolio
npm install
```

### 2. Start the Frontend Development Server

```bash
npm run dev
```

The portfolio will be live at:
👉 **`http://localhost:3000`**

### 3. (Optional) Run the Backend Contact API

Copy `.env.example` to `.env` and set your SMTP credentials and destination email. Keep the frontend `PORT` and Express `API_PORT` separate. For Gmail, use the 16-character Google App Password (not your regular account password):

```env
PORT=3000
API_PORT=5000
API_URL=http://127.0.0.1:5000
CONTACT_EMAIL=recipient@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-account@gmail.com
SMTP_PASS=your-google-app-password
SMTP_FROM=your-account@gmail.com
```

Keep `.env` private and never commit real credentials. Start the API server (alongside the Next.js app) to enable contact-form email forwarding:

```bash
npm run server
```

The API server listens on `API_PORT` (defaults to `5000`):
👉 **`http://localhost:5000`**

The Next.js server forwards `/api/*` requests to `API_URL` (defaults to `http://127.0.0.1:5000`). Keep the Express API port separate from the Next.js `PORT`; set `API_URL` to your deployed API address when hosting the API elsewhere.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

To regenerate the resume PDF:

```bash
npx tsx scripts/generateResumePdf.ts
```

---

## ✏️ How to Customize & Replace Content

All personal data, links, and text are centralized inside the `src/data/` folder so you can update them in seconds without touching component JSX:

### 1. Profile & Bio (`src/data/profile.ts`)
- Edit your preferred name, headline, title, and status text.
- Modify the narrative paragraphs for Journey, Passion, What You Enjoy Building, and Career Goals.
- To display a personal photo, place your picture into `public/profile.jpg` and set `avatarUrl: "/profile.jpg"`.

### 2. Contact Information & Socials (`src/data/socialLinks.ts`)
- Update GitHub, LinkedIn, WhatsApp, Email, and Phone number.
- WhatsApp automatically formats direct links (`https://wa.me/880167597147`).

### 3. Technical Skills (`src/data/skills.ts`)
- Add or remove technologies from the `skillsData` array.
- Categorize by `frontend`, `backend`, `database`, or `tools`.
- Each skill features an array of focus capabilities (no arbitrary percentages).

### 4. Educational Qualifications (`src/data/education.ts`)
- Edit passing years (currently labeled `[Editable Year]`).
- Update degrees, institutions, results, and curriculum highlights.

### 5. Projects & Case Studies (`src/data/projects.ts`)
- Add or modify projects, live URLs, GitHub repositories, features, challenges, and future roadmap items.
- Live demo links and repo links are configured with `isPlaceholderLink: true` until you add your real deployed URLs.

### 6. Updating Your Resume PDF
- Replace `public/resume.pdf` with your actual compiled PDF file at any time.
- The website automatically serves it at `/resume.pdf` with a download trigger.

---

## 🚢 Deployment Options

- **Vercel**: Connect the repository for a managed Next.js deployment.
- **Self-hosted Node.js**: Run `npm run build` followed by `npm run start`. Deploy the Express API separately if needed and configure `API_URL` on the Next.js server.

---

© 2026 Fatema Akter. Built with Next.js, React, Tailwind CSS, and Node.js.
