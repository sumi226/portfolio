import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: "mba",
    degree: "MBA (Master of Business Administration)",
    major: "Finance & Banking",
    institution: "International Islamic University, Chittagong (IIUC)",
    institutionShort: "IIUC, Chittagong",
    // Clearly marked editable placeholder for passing year
    passingYear: "2016",
    result: "CGPA 3.65 / 4.00",
    resultBadge: "CGPA 3.65",
    resultType: "cgpa",
    status: "Completed",
    description:
      "Advanced postgraduate specialization focusing on financial analytics, banking systems, corporate financial strategy, quantitative research, and decision-support information systems.",
    highlights: [
      "Financial Analysis & Modeling",
      "Banking Systems & Risk Management",
      "Quantitative Business Research",
      "Academic Excellence (CGPA 3.65)",
    ],
  },
  {
    id: "mbs",
    degree: "MBS (Master of Business Studies)",
    major: "Management",
    institution: "National University",
    institutionShort: "National University",
    passingYear: "2015",
    result: "2nd Division",
    resultBadge: "2nd Division",
    resultType: "division",
    status: "Completed",
    description:
      "In-depth curriculum in organizational behavior, operations leadership, strategic planning, human capital management, and project coordination frameworks.",
    highlights: [
      "Strategic Management Principles",
      "Organizational Decision Systems",
      "Business Operations & Logistics",
      "Project Lifecycle Coordination",
    ],
  },
  {
    id: "honours",
    degree: "Honours (Bachelor of Business Studies)",
    major: "Management",
    institution: "National University",
    institutionShort: "National University",
    passingYear: "2014 [Editable Year]",
    result: "1st Division",
    resultBadge: "1st Division",
    resultType: "division",
    status: "Completed",
    description:
      "Comprehensive four-year undergraduate foundation in core business disciplines, analytical statistics, managerial economics, organizational hierarchy, and business communications.",
    highlights: [
      "First Division Honors Standing",
      "Managerial Economics & Analytics",
      "Business Communications & Reporting",
      "Core Foundations in Systems & Management",
    ],
  },
];
