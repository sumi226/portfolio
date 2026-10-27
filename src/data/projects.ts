import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "devstack",
    slug: "devstack",
    title: "DevStack — Developer Workflow & Task Platform",
    subtitle: "High-performance developer workspace, sprint tracker & task organization system",
    shortDescription:
      "A modern developer productivity platform featuring dynamic sprint boards, interactive task lifecycle transitions, category tags, and clean responsive UI tailored for engineering teams.",
    category: "Developer Tools & Productivity",
    featured: true,
    thumbnailType: "devstack",
    liveUrl: "https://devstack-pr.netlify.app/",
    clientRepoUrl: "https://github.com/sumi226/Assignment-05-DevStack",
    serverRepoUrl: "https://github.com/sumi226/Assignment-05-DevStack",
    isPlaceholderLink: false,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "Vite",
      "Netlify",
    ],
    techBadges: [
      { name: "React 18", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
      { name: "JavaScript", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
      { name: "Vite", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
      { name: "Netlify", color: "bg-sky-500/10 text-sky-400 border-sky-500/30" },
    ],
    overview:
      "DevStack is an interactive productivity application built to empower developers with smooth task organization, sprint visibility, and progress tracking. Engineered with clean modular React components and styled using Tailwind CSS, it offers immediate status updates, intuitive task management, and responsive layouts across all device viewports.",
    keyFeatures: [
      {
        title: "Dynamic Sprint & Kanban Workflow",
        description:
          "Organize software engineering tickets smoothly across 'To Do', 'In Progress', and 'Completed' states with animated state feedback.",
      },
      {
        title: "Priority Tagging & Category Badges",
        description:
          "Color-coded priority flags (High, Medium, Low) and technical domain tags (Frontend, Backend, DevOps, Styling) for rapid scanning.",
      },
      {
        title: "Interactive Task Creation & State Sync",
        description:
          "Instant ticket addition with input validation, title debounce, and immediate state updates without unnecessary re-renders.",
      },
      {
        title: "Fast Lightweight Vite Bundle",
        description:
          "Built using modern Vite tooling for lightning-fast sub-second development reload and optimized production asset bundles.",
      },
      {
        title: "Seamless Cloud Deployment on Netlify",
        description:
          "Configured with automated continuous deployment pipelines and optimized CDN distribution via Netlify Edge.",
      },
    ],
    myRole:
      "Frontend Architect & UI Developer. Designed the component architecture, configured the responsive Kanban layout with Tailwind CSS, implemented state management for task lifecycles, and managed the continuous deployment workflow on Netlify.",
    challenges: [
      {
        challenge: "Fluid Multi-Column Layout on Mobile",
        solution:
          "Constructed responsive flex-col and grid utilities in Tailwind CSS that gracefully shift from a 3-column sprint layout on desktop to single-column swipeable cards on mobile.",
      },
      {
        challenge: "Instant UI Responsiveness",
        solution:
          "Used optimized functional state hooks and pure sub-components to ensure instant status transitions without UI stutter.",
      },
    ],
    improvements: [
      "Add drag-and-drop ticket reordering using Pragmatic Drag and Drop or Framer Motion.",
      "Integrate GitHub webhook alerts to auto-complete tasks when commits are pushed.",
      "Add persistent user sessions with Supabase or Firebase authentication.",
    ],
    stats: [
      { label: "Deployment", value: "Netlify Edge" },
      { label: "Framework", value: "React + Vite" },
      { label: "Design", value: "100% Responsive" },
    ],
  },
  {
    id: "fitlog",
    slug: "fitlog",
    title: "FitLog — Workout Library & Routine Planner",
    subtitle: "Train with intent, log every set. Modern dark-mode gym companion & routine planner",
    shortDescription:
      "A dark-themed fitness companion and workout routine planner enabling athletes and gym-goers to browse exercises across major muscle groups, build custom daily workout plans, and track progress.",
    category: "Health & Fitness Application",
    featured: true,
    thumbnailType: "fitlog",
    liveUrl: "https://fit-log-3n3e.vercel.app",
    clientRepoUrl: "https://github.com/sumi226/Fit_log",
    serverRepoUrl: "https://github.com/sumi226/Fit_log",
    isPlaceholderLink: false,
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Geist Design System",
      "Vercel",
    ],
    techBadges: [
      { name: "Next.js", color: "bg-white/10 text-white border-white/20" },
      { name: "React 18", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
      { name: "Vercel", color: "bg-violet-500/10 text-violet-300 border-violet-500/30" },
    ],
    overview:
      "FitLog is built for dedicated fitness enthusiasts who demand an uncluttered, modern dark-themed training tracker. Built with Next.js and TypeScript, FitLog provides a curated library of lifts covering every major muscle group, quick filter sorting by duration, calories, and ratings, and an interactive daily plan builder to keep gym sessions structured and disciplined.",
    keyFeatures: [
      {
        title: "Comprehensive Exercise Library",
        description:
          "Curated catalog of fundamental multi-joint and isolation lifts targeting Chest, Legs, Back, Shoulders, and Arms with rep and set guidelines.",
      },
      {
        title: "Interactive 'My Plan' Routine Builder",
        description:
          "Select exercises directly into today's customized workout routine with real-time total sets and estimated calorie expenditure calculations.",
      },
      {
        title: "Dynamic Sorting & Filtering",
        description:
          "Instant client-side sorting by workout duration, estimated caloric burn, difficulty level, and user ratings.",
      },
      {
        title: "Purpose-Built Dark Gym Aesthetic",
        description:
          "Designed with a sleek, distraction-free charcoal and violet dark mode tailored for gym environments and low-light mobile usage.",
      },
      {
        title: "Production Next.js & Vercel Deployment",
        description:
          "Built on Next.js with Geist typography, server-side caching, and rapid continuous delivery on Vercel.",
      },
    ],
    myRole:
      "Full Stack Developer & Product Designer. Conceptualized the user experience for seamless workout logging, created TypeScript data schemas for exercises, developed responsive dark UI components, and managed deployment on Vercel.",
    challenges: [
      {
        challenge: "Intuitive Single-Tap Mobile Usability",
        solution:
          "Engineered large touch targets and instant visual feedback so users can easily add exercises and adjust plans in between heavy gym sets.",
      },
      {
        challenge: "Strict Type Safety with TypeScript",
        solution:
          "Created robust interfaces for exercises, plan state, muscle groups, and filter keys to eliminate runtime errors across the Next.js app.",
      },
    ],
    improvements: [
      "Add historical workout logs with progressive overload tracking charts.",
      "Integrate timer intervals for rest periods between sets with sound cues.",
      "Export workout summaries to Apple Health and Google Fit.",
    ],
    stats: [
      { label: "Deployment", value: "Vercel Cloud" },
      { label: "Lifts Catalog", value: "12+ Exercises" },
      { label: "Typography", value: "Geist Sans" },
    ],
  },
  {
    id: "market-price",
    slug: "market-price",
    title: "বাজার দর — Daily Commodity Price Monitor",
    subtitle: "নিত্যপণ্যের আজকের দাম, রিয়েল-টাইম মূল্য ওঠানামা ট্র্যাকিং ও স্মার্ট বাজেট ক্যালকুলেটর",
    shortDescription:
      "A real-time daily commodity and grocery price tracking web application with interactive shopping cart, category filters (Rice, Lentils, Oil, Vegetables, Fish, Meat, Eggs & Milk), and live percentage price trend indicators.",
    category: "E-Commerce & Market Intelligence",
    featured: true,
    thumbnailType: "marketPrice",
    liveUrl: "https://sumi226-market-price.vercel.app/",
    clientRepoUrl: "https://github.com/sumi226/market-price",
    serverRepoUrl: "https://github.com/sumi226/market-price",
    isPlaceholderLink: false,
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Dynamic Cart Engine",
      "Vercel",
    ],
    techBadges: [
      { name: "Next.js", color: "bg-white/10 text-white border-white/20" },
      { name: "React 18", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
      { name: "Price Analytics", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
      { name: "Bilingual UI", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
    ],
    overview:
      "Combining technical software architecture with analytical financial reasoning, বাজার দর (Market Price) brings complete price transparency to daily household groceries and essential commodities in Bangladesh. Users can monitor live daily rates across 8 essential categories (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা), track inflationary percentage movements (▲ / ▼), and simulate their total shopping budget in Bangladeshi Taka (৳) through an interactive cart.",
    keyFeatures: [
      {
        title: "Categorized Essential Commodity Catalog",
        description:
          "Daily price benchmarks for essentials including মিনিকেট চাল, স্বর্ণমাছি চাল, মসুর ডাল, খাঁটি সরিষার তেল, আলু, পেঁয়াজ, রুই মাছ, গরুর মাংস, এবং ডিম।",
      },
      {
        title: "Live Price Trend Indicators (▲ / ▼ / —)",
        description:
          "Clear visual percentage indicators showing daily market price fluctuations (e.g., পেঁয়াজ ▲ +12.5%, আলু ▼ -6.2%) for informed consumer purchasing.",
      },
      {
        title: "Dynamic Smart Shopping Cart & Budgeting",
        description:
          "Add items to the cart, adjust kilogram/liter quantities, and instantly compute the total grocery expense in Bangladeshi Taka (৳).",
      },
      {
        title: "Bilingual Bengali & English UI",
        description:
          "Culturally tailored design with authentic Bengali typography, currency symbols (৳), and intuitive category emoji iconography.",
      },
      {
        title: "High Performance Next.js on Vercel",
        description:
          "Ultra-fast loading times with optimized Next.js static generation and real-time client hydration hosted on Vercel.",
      },
    ],
    myRole:
      "Lead Developer & Business Analyst. Designed the financial data structure for daily commodity price points, implemented the dynamic shopping cart calculation algorithms, crafted the responsive bilingual UI, and deployed the production app to Vercel.",
    challenges: [
      {
        challenge: "Precise Float Arithmetic in Cart Totals",
        solution:
          "Avoided JavaScript floating-point errors by sanitizing commodity prices and keeping unit calculations normalized before formatting to Taka.",
      },
      {
        challenge: "Accessible Cultural & Linguistic UI",
        solution:
          "Curated clear Bengali typography with standard font fallbacks and high-contrast badges so prices remain legible on any mobile device.",
      },
    ],
    improvements: [
      "Historical price trajectory charts showing weekly and monthly inflation trends.",
      "Crowdsourced neighborhood market price submissions from different cities across Bangladesh.",
      "SMS or WhatsApp price drop alerts for essential staple goods.",
    ],
    stats: [
      { label: "Deployment", value: "Vercel Cloud" },
      { label: "Categories", value: "8 Segments" },
      { label: "Currency", value: "BDT (৳)" },
    ],
  },
];
