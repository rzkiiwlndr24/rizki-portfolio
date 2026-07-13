export interface IKPI {
  label: string;
  value: string;
  change: string;
}

export interface IBeforeAfter {
  metric: string;
  before: string;
  after: string;
}

export interface IWorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface IProject {
  id: string;
  slug: string;
  title: string;
  category: "Data Entry" | "Data Cleaning" | "Dashboard Reporting" | "Automation" | "Document Management";
  summary: string;
  overview: string;
  problem: string;
  objective: string;
  responsibilities: string[];
  workflow: IWorkflowStep[];
  toolsUsed: string[];
  kpis: IKPI[];
  beforeAfter: IBeforeAfter[];
  result: string;
  lessonsLearned: string[];
  featured: boolean;
  date: string;
}

export interface ICertificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: "Microsoft Office" | "Google Workspace" | "Data Governance" | "Administration";
  credentialId: string;
  verifyUrl: string;
  description: string;
}

export interface IArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  content: string[];
}

export interface IExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}