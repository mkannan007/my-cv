// Maps skill names to local asset filenames under /public/assets/tech/.

export interface TechIcon {
  name: string;
  file: string;
  category: 'frontend' | 'backend' | 'automation' | 'language' | 'cicd' | 'database' | 'cloud' | 'ai' | 'docs';
}

export const techIcons: TechIcon[] = [
  { name: 'React', file: 'reactjs.webp', category: 'frontend' },
  { name: 'Next.js', file: 'nextjs.webp', category: 'frontend' },
  { name: 'Tailwind CSS', file: 'tailwindcss.webp', category: 'frontend' },
  // { name: 'Figma', file: 'figma.webp', category: 'frontend' },

  { name: 'Node.js', file: 'nodejs.webp', category: 'backend' },
  { name: 'Express', file: 'expressjs.webp', category: 'backend' },

  { name: 'Playwright', file: 'playwright.webp', category: 'automation' },
  { name: 'WebDriverIO', file: 'webdriverio.webp', category: 'automation' },
  { name: 'Cypress', file: 'cypress.webp', category: 'automation' },
  { name: 'Vitest', file: 'vitest.webp', category: 'automation' },

  { name: 'TypeScript', file: 'typescript.webp', category: 'language' },
  { name: 'JavaScript', file: 'javascript.webp', category: 'language' },

  { name: 'GitLab', file: 'gitlab.webp', category: 'cicd' },
  { name: 'GitHub', file: 'github.webp', category: 'cicd' },
  { name: 'Azure DevOps', file: 'azuredevops.webp', category: 'cicd' },

  { name: 'MongoDB', file: 'mongodb.webp', category: 'database' },
  { name: 'PostgreSQL', file: 'postgresql.webp', category: 'database' },

  { name: 'AWS', file: 'aws.webp', category: 'cloud' },
  { name: 'Azure', file: 'azure.webp', category: 'cloud' },
  { name: 'Docker', file: 'docker.webp', category: 'cloud' },

  { name: 'GitHub Copilot', file: 'githubcopilot.webp', category: 'ai' },
  { name: 'AWS-Q Developer', file: 'aws-q-developer.webp', category: 'ai' },
  { name: 'Claude', file: 'claude.webp', category: 'ai' },
  { name: 'Gemini', file: 'gemini.webp', category: 'ai' },

  { name: 'Jira', file: 'jira.webp', category: 'docs' },
  { name: 'Confluence', file: 'confluence.webp', category: 'docs' },
  { name: 'X-Ray', file: 'xray.webp', category: 'docs' },
];
