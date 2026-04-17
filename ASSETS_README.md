# Tech Asset Sources

All files under `public/assets/tech/` are currently **branded placeholder SVGs**.
Before publishing, replace each one with the official logo from the source URL
below. Most vendors permit unmodified use of their brand marks for identifying
the product; check each license before redistribution.

After replacing, run `svgo public/assets/tech/*.svg` to optimize.

| File                 | Tech             | Official source                                                                       | License / notes                                |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `react.svg`          | React            | https://react.dev/                                                                     | MIT; React logo © Meta (brand guidelines)     |
| `nextjs.svg`         | Next.js          | https://nextjs.org/                                                                    | © Vercel — brand usage guidelines             |
| `tailwindcss.svg`    | Tailwind CSS     | https://tailwindcss.com/brand                                                          | © Tailwind Labs — brand guidelines            |
| `figma.svg`          | Figma            | https://www.figma.com/community/file/1035203688168086460                               | © Figma — brand guidelines                    |
| `nodejs.svg`         | Node.js          | https://nodejs.org/en/about/branding                                                   | © OpenJS Foundation — trademark policy        |
| `express.svg`        | Express          | https://expressjs.com/                                                                 | MIT                                            |
| `playwright.svg`     | Playwright       | https://playwright.dev/                                                                | Apache 2.0                                     |
| `webdriverio.svg`    | WebdriverIO      | https://webdriver.io/                                                                  | MIT                                            |
| `cypress.svg`        | Cypress          | https://www.cypress.io/                                                                | © Cypress.io — brand guidelines               |
| `vitest.svg`         | Vitest           | https://vitest.dev/                                                                    | MIT                                            |
| `typescript.svg`     | TypeScript       | https://www.typescriptlang.org/branding/                                               | © Microsoft — brand guidelines                |
| `javascript.svg`     | JavaScript       | https://github.com/voodootikigod/logo.js                                               | Public domain                                  |
| `gitlab.svg`         | GitLab           | https://about.gitlab.com/press/press-kit/                                              | © GitLab B.V. — press kit terms               |
| `githubactions.svg`  | GitHub Actions   | https://github.com/logos                                                               | © GitHub — logo usage policy                  |
| `azuredevops.svg`    | Azure DevOps     | https://learn.microsoft.com/azure/devops/                                              | © Microsoft — trademark guidelines            |
| `mongodb.svg`        | MongoDB          | https://www.mongodb.com/brand-resources                                                | © MongoDB — brand guidelines                  |
| `postgresql.svg`     | PostgreSQL       | https://www.postgresql.org/about/policies/trademark-policy/                            | PostgreSQL trademark policy                    |
| `aws.svg`            | AWS              | https://aws.amazon.com/architecture/icons/                                             | © Amazon — asset package terms                |
| `azure.svg`          | Azure            | https://learn.microsoft.com/azure/architecture/icons/                                  | © Microsoft — icon usage terms                |
| `docker.svg`         | Docker           | https://www.docker.com/company/newsroom/media-resources/                               | © Docker — media kit terms                    |
| `githubcopilot.svg`  | GitHub Copilot   | https://github.com/logos                                                               | © GitHub — logo usage policy                  |
| `claude.svg`         | Claude           | https://www.anthropic.com/                                                             | © Anthropic — brand guidelines                |
| `gemini.svg`         | Gemini           | https://gemini.google.com/                                                             | © Google — brand guidelines                   |
| `jira.svg`           | Jira             | https://atlassian.design/resources/logo-library                                        | © Atlassian — brand guidelines                |
| `confluence.svg`     | Confluence       | https://atlassian.design/resources/logo-library                                        | © Atlassian — brand guidelines                |
| `xray.svg`           | X-Ray            | https://www.getxray.app/                                                               | © Xblend / Xpand IT — brand guidelines        |

## Optimization

```bash
npx svgo public/assets/tech/*.svg
```
