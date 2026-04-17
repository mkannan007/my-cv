# CV Site — Kannan Muthu Manickam

Static Next.js (pages router) + TypeScript + Tailwind CSS portfolio/CV site.
Exportable via `next export` to a fully static `out/` folder suitable for GitHub Pages.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & static export

```bash
npm run build
npm run export
# produces ./out
```

Serve locally:

```bash
npx serve out
```

## Hosting on GitHub Pages (subpath)

If the site is hosted at `https://<user>.github.io/<repo>/`, the asset URLs need
to be prefixed with `/<repo>`. Set the `REPO_NAME` env var before building:

```bash
REPO_NAME=<repo> npm run build && REPO_NAME=<repo> npm run export
```

In CI, set a repository **variable** named `REPO_NAME` (Settings → Secrets and
variables → Actions → Variables). The workflow reads `vars.REPO_NAME` and
forwards it to Next.js via `next.config.js` (`basePath` + `assetPrefix`).

If it is a user/organization site (`https://<user>.github.io/`), leave
`REPO_NAME` unset.

After the first deploy, enable GitHub Pages in **Settings → Pages** with source
`gh-pages` branch and root `/`.

## Playwright smoke test

Start the dev server in one terminal:

```bash
npm run dev
```

Then in another terminal:

```bash
npx playwright install --with-deps   # first run only
npm run test:e2e
```

The test (`playwright/tests/home.spec.ts`) verifies the header contact block
renders verbatim and that nav links to `/about`, `/skills`, `/experience`,
`/projects`, `/contact`, `/resume` exist.

## Content

All CV content lives in [`src/data/cv.ts`](src/data/cv.ts). Edit that single
file to update the entire site.

## Resume PDF

`public/resume.pdf` is a placeholder. **Replace it with your real CV PDF**
before deploying — it is served directly from the download button on
`/contact` and `/resume`.

## Tech logos

All vendor logos under `public/assets/tech/` are currently branded
placeholders. See [`ASSETS_README.md`](ASSETS_README.md) for the list of
official download URLs and license notes. After replacing, optimize with:

```bash
npx svgo public/assets/tech/*.svg
```

## Deploy via GitHub Actions

`.github/workflows/deploy.yml` runs on every push to `main`:

1. `npm ci`
2. `npm run build`
3. `npm run export`
4. Publishes `out/` to the `gh-pages` branch using
   `peaceiris/actions-gh-pages@v3` with `GITHUB_TOKEN`.

No additional secrets required. Only set the `REPO_NAME` variable if hosting
under a repo subpath.

## Manual deploy

```bash
npm run build && npm run export
npx gh-pages -d out -b gh-pages
```

## Project structure

```
public/assets/tech/        vendor logos (placeholder SVGs)
public/resume.pdf          downloadable CV (replace!)
src/components/            Header, Footer, Hero, Timeline, SkillGrid, Icon, Seo
src/pages/                 index, about, skills, experience, projects,
                           test-automation, contact, resume
src/data/cv.ts             all CV content (typed exports)
src/data/skills.ts         skill → icon file mapping
playwright/                Playwright smoke test
.github/workflows/         GitHub Pages deploy workflow
```

## Recommended commit sequence

1. `chore: initial Next.js + TypeScript + Tailwind scaffold`
2. `feat: add CV data, pages, components, and assets`
3. `chore: add Playwright test and GitHub Actions deploy workflow`
4. `feat: static Next.js CV site ready for GitHub Pages deploy`
