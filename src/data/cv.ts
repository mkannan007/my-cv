// Typed CV data. All site content is sourced from this file.

export interface Role {
  company: string;
  title: string;
  location: string;
  type: 'Permanent' | 'Contract';
  start: string;
  end: string;
  bullets?: string[];
}

export interface ClientProject {
  client: string;
  location: string;
  via?: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ResponsibilityGroup {
  area: string;
  bullets: string[];
}

export const person = {
  name: 'KANNAN MUTHU MANICKAM',
  title: 'AI SOFTWARE ENGINEER',
  tagline: 'Full Stack — Developer | Tester',
  location: 'Birmingham, England, UK',
  phone: '+44 075030 44414',
  email: 'mkannan007@outlook.com',
  website: 'https://mkannan007.dev/',
  linkedin: 'https://linkedin.com/in/mkannan007',
} as const;

// Verbatim header block from the CV
export const headerBlock =
  'KANNAN MUTHU MANICKAM — AI SOFTWARE ENGINEER — Full Stack — Birmingham, England, UK — +44 075030 44414 — mkannan007@outlook.com';

// Verbatim About sentence from the CV
export const aboutSentence =
  'Strategic Software Engineer with 12+ years of IT experience, pivoting into Al-driven full stack WebApp development using (React JS & Next JS) with expertise in E2E test automation skills using TypeScript, and CI/CD workflows, with a strong track record in agile delivery with high-quality solutions.';

export const coreSkills: SkillGroup[] = [
  { label: 'Front-End', items: ['React JS', 'Next JS', 'Tailwind CSS', 'Figma (Basics)'] },
  { label: 'Back-End', items: ['Next JS API', 'Express-JS (Rest-API)', 'NodeJS'] },
  { label: 'Automation', items: ['Playwright', 'WebDriver-IO', 'Cypress', 'Vitest (RTL)'] },
  { label: 'Languages', items: ['TypeScript', 'JavaScript'] },
  { label: 'CI/CD', items: ['GitLab', 'GitHub Actions', 'Azure DevOps'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL (Basics)'] },
  { label: 'Cloud & Containers', items: ['AWS', 'Azure', 'Docker (Basics)'] },
];

export const aiTools = ['GitHub Copilot', 'AWS-Q Developer', 'Claude', 'Gemini', 'Copilot'];
export const documentTools = ['Jira', 'Confluence', 'X-Ray'];
export const businessDomains = ['Telecom', 'E-Commerce', 'Banking', 'Logistics', 'Insurance'];

export const education = [
  { degree: 'MCA', institution: 'Hindustan University, Chennai' },
  { degree: 'BSc Mathematics', institution: 'University of Madras' },
];

export const certifications = ['ISTQB Certified Tester – Foundation Level'];

export const roles: Role[] = [
  {
    company: 'BRITISH TELECOM GROUP PLC',
    title: 'AI Software Engineer & Test Automation (React)',
    location: 'Birmingham & London, UK',
    type: 'Permanent',
    start: 'Sep 2024',
    end: 'Present',
  },
  {
    company: 'MATCHES FASHION LTD',
    title: 'Software Engineer & Test Automation',
    location: 'London, UK',
    type: 'Permanent',
    start: 'Mar 2020',
    end: 'Mar 2024',
  },
  {
    company: 'PUBLICIS SAPIENT LTD',
    title: 'Test Automation Specialist',
    location: 'London & Swindon, UK',
    type: 'Contract',
    start: 'Jan 2019',
    end: 'Feb 2020',
  },
  {
    company: 'RENAULT NISSAN TECH',
    title: 'Senior Engineer',
    location: 'Chennai, India',
    type: 'Permanent',
    start: 'Oct 2017',
    end: 'Sep 2018',
  },
  {
    company: 'SQS INDIA BFSI LTD (Now EXPLEO)',
    title: 'Test Automation Engineer',
    location: 'London, UK & Chennai',
    type: 'Permanent',
    start: 'Jan 2014',
    end: 'Oct 2017',
  },
];

export const clientsAndServices: ClientProject[] = [
  {
    client: 'BRITISH TELECOM GROUP PLC',
    location: 'Birmingham & London, UK',
    description:
      'Built React reusable components and automated the tests – web design system.',
  },
  {
    client: 'MATCHES FASHION LTD',
    location: 'London, UK',
    description:
      'Led test automation and build software for e-commerce and internal applications.',
  },
  {
    client: 'NATIONWIDE BUILDING SOCIETY',
    location: 'Swindon, UK',
    via: 'via Publicis Sapient',
    description:
      'Delivered Test Automated services for credit card workflows application.',
  },
  {
    client: 'RENAULT',
    location: 'Paris, France',
    via: 'via Renault Nissan Tech',
    description:
      'Delivered Automation testing services for vehicle fleet logistics application.',
  },
  {
    client: 'HISCOX',
    location: 'London, UK',
    via: 'via SQS BFSI Ltd',
    description:
      'Delivered Automation testing services for Home and Business Insurance platforms.',
  },
];

export const responsibilities: ResponsibilityGroup[] = [
  {
    area: 'Front-End Development',
    bullets: [
      'Developed production ready React applications using Next.js with SSR.',
      'Resolved UI bugs and maintained consistent styling using Tailwind CSS.',
      'Boosted unit test coverage using Jest and React Testing Library.',
      'Publish and maintain NPM packages with reusable functions.',
    ],
  },
  {
    area: 'Back-End Development',
    bullets: [
      'Built RESTful APIs using Next.js API Routes and Express.js.',
      'Designed DB schemas using MongoDB and Supabase (PostgreSQL).',
      'Implemented server-side logic including authentication, middleware, and data validation for secure and reliable endpoints.',
    ],
  },
  {
    area: 'CI/CD & Monitoring',
    bullets: [
      'Configured and maintained automated pipelines using GitLab CI, GitHub Actions, and Azure DevOps.',
      'Set up self-hosted runners to reduce cloud compute costs and improve pipeline control.',
      'Monitored test health and stability through Jenkins, scheduled cron jobs, and remote test suite execution.',
      'Architected scalable test suites adhering to clean code principles.',
    ],
  },
  {
    area: 'Test Automation',
    bullets: [
      'Developed full-stack automation frameworks (UI/API/mobile) using Playwright, Cypress, WebDriver IO, Appium, and TypeScript.',
      'Authored E2E and BDD-Cucumber, Mocha based tests using JavaScript, TypeScript. Also experienced in Java and C# based tests.',
      'Enhanced UI testability with data-test-id; executed API and cross-platform tests via Postman and Browser Stack, Sauce Labs for mobile.',
    ],
  },
  {
    area: 'Defect Management',
    bullets: [
      'Logged & triaged defects using JIRA in collaboration with Agile teams till the closure and help in fixing the frontend bugs.',
    ],
  },
  {
    area: 'Agile Collaboration',
    bullets: [
      'Key member in Scrum ceremonies, Sprint demos for feedback cycles.',
      'Mentored junior engineers and evaluated emerging tools and technologies through guild participation.',
    ],
  },
  {
    area: 'Documentation',
    bullets: [
      'Create and Maintained JIRA dashboards and documented project strategies, reports, and best practices in Confluence.',
    ],
  },
];
