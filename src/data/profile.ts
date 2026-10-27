import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Fatema Akter",
  preferredName: "Fatema",
  title: "Full Stack Developer",
  status: "Available for Roles & Freelance Opportunities",
  headline: "Building Modern, Responsive & Scalable Web Applications",
  shortIntro:
    "I am a passionate Full Stack Developer who enjoys building user-friendly web applications, solving problems, and continuously learning new technologies.",
  
  // Real local PDF file served from public/resume.pdf
  resumePath: "/resume.pdf",
  resumeFileName: "Fatema_Akter_Resume.pdf",

  // Profile image: using the uploaded high-resolution portrait in public/profile.png
  avatarUrl: "/profile.png",

  about: {
    journey:
      "My journey into programming began with an analytical mindset honed through advanced studies in business, management, and financial analysis. Discovering the creative and problem-solving power of code transformed my curiosity into a dedicated career path in full-stack web development. I bridge business logic and user-centric software design.",
    passion:
      "I am deeply passionate about modern JavaScript & TypeScript ecosystems—from crafting intuitive, accessible interfaces in React and Tailwind CSS to architecting resilient, RESTful backends with Node.js, Express, and MongoDB. I thrive on bringing complex workflows into simple, elegant digital experiences.",
    projectsEnjoyed:
      "I enjoy building dynamic, interactive web applications such as responsive e-commerce storefronts, real-time collaboration dashboards, productivity systems, and data-driven analytical platforms that deliver tangible value to end users.",
    problemSolving:
      "Problem-solving is at the heart of everything I do. Whether optimizing component render performance, designing normalized database schemas, or debugging asynchronous API flows, I approach engineering hurdles with systematic curiosity and persistence.",
    hobbies:
      "Outside of programming, I enjoy exploring UI/UX design trends, reading tech blogs and financial markets research, mentoring peers, and spending quality time with family. Exploring modern design patterns often inspires fresh ideas for my development projects.",
    careerGoals:
      "My career goal is to join a progressive, forward-thinking engineering team as a Full Stack Developer where I can contribute to mission-critical products, write clean scalable code, and continuously evolve into engineering leadership.",
  },

  highlights: [
    {
      label: "Modern Stack",
      value: "MERN Stack",
      description: "React, Node.js, Express & MongoDB",
    },
    {
      label: "Architecture",
      value: "Full-Stack",
      description: "Clean RESTful APIs & modular UI",
    },
    {
      label: "Design Focus",
      value: "Responsive",
      description: "Mobile-first, accessible & fluid",
    },
    {
      label: "Commitment",
      value: "Continuous",
      description: "Lifelong learning & problem solving",
    },
  ],
};
