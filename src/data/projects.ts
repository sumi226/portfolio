import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-Commerce Web Application",
    subtitle: "Modern storefront with dynamic cart, search filters & checkout flow",
    shortDescription:
      "A responsive e-commerce web application featuring real-time product filtering, interactive product detail modals, persistent cart state, and an intuitive checkout flow.",
    category: "Full Stack Web Application",
    featured: true,
    thumbnailType: "ecommerce",
    liveUrl: "https://sumi226.github.io/ecommerce-store-sample",
    clientRepoUrl: "https://github.com/sumi226/ecommerce-web-app",
    serverRepoUrl: "https://github.com/sumi226/ecommerce-api",
    isPlaceholderLink: true,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    techBadges: [
      { name: "React 18", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
      { name: "Node.js", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
      { name: "Express.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/30" },
      { name: "MongoDB", color: "bg-green-500/10 text-green-400 border-green-500/30" },
    ],
    overview:
      "This E-Commerce Web Application is designed to deliver a seamless online shopping experience for both consumers and store administrators. Built using a decoupled client-server architecture, it emphasizes fast page load speeds, clean typography, responsive mobile grids, and an intuitive checkout experience.",
    keyFeatures: [
      {
        title: "Dynamic Product Listing & Categorization",
        description:
          "Instant client-side multi-filter by category, price range, stock availability, and keyword search with debounce.",
      },
      {
        title: "Interactive Product Details",
        description:
          "High-resolution image gallery preview, variant selector (size, color), specifications tab, and customer reviews.",
      },
      {
        title: "Persistent Shopping Cart",
        description:
          "Client-side cart synchronized with localStorage and backend sessions, supporting real-time quantity adjustments and coupon calculations.",
      },
      {
        title: "Responsive & Intuitive Checkout",
        description:
          "Multi-step billing and shipping address validation, order summary verification, and simulated payment gateway confirmation.",
      },
      {
        title: "Admin Product Management (MERN)",
        description:
          "RESTful endpoints for creating, editing, and archiving product inventory with schema validation via Mongoose.",
      },
    ],
    myRole:
      "Frontend & Backend Developer [Editable Contribution]. Responsible for architecting the React component hierarchy, designing responsive Tailwind UI components, configuring cart context state management, and developing RESTful product endpoints in Express.js.",
    challenges: [
      {
        challenge: "Cart State Synchronization",
        solution:
          "Implemented a centralized React Context with localStorage hydration to prevent state loss during page refreshes and route transitions.",
      },
      {
        challenge: "Product Filter Performance",
        solution:
          "Utilized useMemo hooks and debounced search inputs to maintain 60fps responsiveness during high-volume catalog filtering.",
      },
      {
        challenge: "Responsive Checkout Form Usability",
        solution:
          "Structured a multi-step progressive disclosure form with instant inline validation to reduce form fatigue on mobile devices.",
      },
    ],
    improvements: [
      "Integration with Stripe or SSLCommerz payment gateway APIs.",
      "User authentication with JWT (JSON Web Tokens) and social OAuth.",
      "Customer wishlist and order tracking history dashboard.",
      "Server-side pagination and full-text search with MongoDB Atlas Search.",
    ],
    stats: [
      { label: "Core Screens", value: "6+ Pages" },
      { label: "Filter Latency", value: "< 50ms" },
      { label: "Design", value: "100% Responsive" },
    ],
  },
  {
    id: "task-management",
    slug: "task-management",
    title: "Task Management Application",
    subtitle: "Agile task organization with status workflows & priority analytics",
    shortDescription:
      "A productivity web application for organizing daily tasks, managing project milestones across status columns, tracking deadlines, and visualizing completion progress.",
    category: "Productivity & Workflow Tool",
    featured: true,
    thumbnailType: "taskManagement",
    liveUrl: "https://sumi226.github.io/task-manager-sample",
    clientRepoUrl: "https://github.com/sumi226/task-management-app",
    serverRepoUrl: "https://github.com/sumi226/task-management-api",
    isPlaceholderLink: true,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
      "LocalStorage / NoSQL",
      "Framer Motion",
    ],
    techBadges: [
      { name: "React 18", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
      { name: "REST APIs", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30" },
      { name: "Framer Motion", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
      { name: "NoSQL Data", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
    ],
    overview:
      "The Task Management Application is built to simplify task prioritization and tracking for individual developers and collaborative teams. It combines an intuitive card-based Kanban board with a structured tabular view, offering quick status updates, deadline alerts, and productivity metrics.",
    keyFeatures: [
      {
        title: "Full CRUD Task Lifecycle",
        description:
          "Create, read, update, and delete tasks with custom tags, due dates, priority levels (Low, Medium, High), and detailed descriptions.",
      },
      {
        title: "Dynamic Status Management",
        description:
          "Easily transition tasks across 'To Do', 'In Progress', and 'Completed' states with animated visual feedback.",
      },
      {
        title: "Organized Dashboard & Filters",
        description:
          "Dashboard view providing instant summaries of pending versus finished tasks, overdue alerts, and filter pills.",
      },
      {
        title: "Search & Priority Tagging",
        description:
          "Real-time instant task searching by keyword and color-coded priority categorization for fast scanning.",
      },
      {
        title: "Fluid Mobile Experience",
        description:
          "Mobile-optimized touch controls, bottom sheet editors, and responsive drawer navigation.",
      },
    ],
    myRole:
      "Full Stack Developer [Editable Contribution]. Designed the board workflow, built the animated task cards using Framer Motion, structured client data persistence, and created mock REST API endpoints for task synchronization.",
    challenges: [
      {
        challenge: "Real-time Status Transitions",
        solution:
          "Created optimistic UI updates to instantly re-render moved cards before waiting for backend confirmation.",
      },
      {
        challenge: "Organizing High Volume Tasks",
        solution:
          "Built composable filter hooks to split tasks by status, priority, and date range without duplicate loops.",
      },
      {
        challenge: "Accessible Drag-and-Drop / Button Controls",
        solution:
          "Provided keyboard-accessible status change dropdowns alongside drag gestures so all users can manage tasks easily.",
      },
    ],
    improvements: [
      "Team workspace collaboration with real-time WebSockets (Socket.io).",
      "Subtasks, checklist items, and file attachment uploads.",
      "Email or push notifications for upcoming due dates.",
      "Export tasks to CSV, PDF, or sync with Google Calendar.",
    ],
    stats: [
      { label: "Task Views", value: "Board & List" },
      { label: "Status Cycles", value: "3 Workflows" },
      { label: "Persistence", value: "Local & Cloud" },
    ],
  },
  {
    id: "finance-dashboard",
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    subtitle: "Interactive financial visualizer with expense tracking & budget analytics",
    shortDescription:
      "An analytical personal finance dashboard enabling users to track expenditures, visualize budget allocations through dynamic SVG charts, and monitor monthly savings.",
    category: "Financial Analytics & Data Visualization",
    featured: true,
    thumbnailType: "financeDashboard",
    liveUrl: "https://sumi226.github.io/finance-dashboard-sample",
    clientRepoUrl: "https://github.com/sumi226/finance-dashboard-app",
    serverRepoUrl: "https://github.com/sumi226/finance-dashboard-api",
    isPlaceholderLink: true,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Data Visuals / SVG",
      "MySQL / MongoDB",
    ],
    techBadges: [
      { name: "React 18", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
      { name: "Data Visuals", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
      { name: "Express.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/30" },
      { name: "Financial Analytics", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
    ],
    overview:
      "Leveraging my background in MBA Finance & Banking, this project merges technical software engineering with rigorous financial logic. The Personal Finance Dashboard gives individuals immediate clarity over their income streams, expense allocations, and progress toward savings goals through responsive summary cards and data charts.",
    keyFeatures: [
      {
        title: "Financial Data Visualization",
        description:
          "Dynamic bar, line, and doughnut representations of monthly cash flow, category breakdowns, and savings trajectories.",
      },
      {
        title: "Expense & Income Tracking Interface",
        description:
          "Fast transaction entry form with category tags (Housing, Food, Tech, Utilities), timestamps, and receipt notes.",
      },
      {
        title: "Executive Summary Cards",
        description:
          "Highlighting Net Balance, Total Monthly Inflow, Total Outflow, and Savings Rate with period-over-period percentage indicators.",
      },
      {
        title: "Budget Threshold Alerts",
        description:
          "Visual warning indicators when spending in any category nears or exceeds user-defined budget thresholds.",
      },
      {
        title: "Transaction Search & Export",
        description:
          "Instant search, date filtering, and quick download/print summaries for monthly accounting reviews.",
      },
    ],
    myRole:
      "Lead Developer & Finance Specialist [Editable Contribution]. Formulated the financial analytical algorithms, designed the dark-theme financial dashboard metrics, created custom SVG chart components, and structured database schema for ledger transactions.",
    challenges: [
      {
        challenge: "Accurate Precision in Currency Calculations",
        solution:
          "Avoided floating point rounding errors by storing and computing values in integer cents before converting for display.",
      },
      {
        challenge: "Responsive Chart Layouts",
        solution:
          "Constructed scalable vector SVG chart visualizations that resize dynamically across smartphone, tablet, and widescreen monitors.",
      },
      {
        challenge: "Performance with Multi-year Transaction Histories",
        solution:
          "Created aggregated summary rollups and indexed queries to ensure instant dashboard rendering without UI lag.",
      },
    ],
    improvements: [
      "Bank feed synchronization via Plaid or Open Banking APIs.",
      "Automated recurring subscription detector and bill payment reminders.",
      "Multi-currency support with live exchange rate converters.",
      "Predictive cash flow forecasting powered by basic statistical regression.",
    ],
    stats: [
      { label: "Metrics Tracked", value: "12+ KPIs" },
      { label: "Chart Types", value: "Bar, Donut, Line" },
      { label: "Accuracy", value: "Precision Int" },
    ],
  },
];
