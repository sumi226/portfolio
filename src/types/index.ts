export interface ProfileHighlight {
  label: string;
  value: string;
  description: string;
}

export interface ProfileAbout {
  journey: string;
  passion: string;
  projectsEnjoyed: string;
  problemSolving: string;
  hobbies: string;
  careerGoals: string;
}

export interface ProfileData {
  name: string;
  preferredName: string;
  title: string;
  status: string;
  headline: string;
  shortIntro: string;
  resumePath: string;
  resumeFileName: string;
  avatarUrl: string | null;
  about: ProfileAbout;
  highlights: ProfileHighlight[];
}

export interface SkillCategory {
  id: string;
  label: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  tagline: string;
  focus: string[];
  accentColor: string;
  badgeBg: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  institutionShort: string;
  passingYear: string;
  result: string;
  resultBadge: string;
  resultType: 'cgpa' | 'division';
  status: string;
  description: string;
  highlights: string[];
}

export interface TechBadge {
  name: string;
  color: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  thumbnailType: 'ecommerce' | 'taskManagement' | 'financeDashboard' | 'devstack' | 'fitlog' | 'marketPrice' | string;
  liveUrl?: string;
  clientRepoUrl?: string;
  serverRepoUrl?: string;
  isPlaceholderLink?: boolean;
  technologies: string[];
  techBadges: TechBadge[];
  overview: string;
  keyFeatures: ProjectFeature[];
  myRole: string;
  challenges: ProjectChallenge[];
  improvements: string[];
  stats?: ProjectStat[];
}

export interface SocialLinkItem {
  label: string;
  url?: string;
  username?: string;
  number?: string;
  address?: string;
  mailto?: string;
  tel?: string;
  city?: string;
  country?: string;
  formatted?: string;
}

export interface SocialLinks {
  github: SocialLinkItem;
  linkedin: SocialLinkItem;
  whatsapp: SocialLinkItem;
  email: SocialLinkItem;
  phone: SocialLinkItem;
  location: SocialLinkItem;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type ContactStatus = 'idle' | 'loading' | 'success' | 'fallback' | 'error';
