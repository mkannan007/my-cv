/** @type {import('next').NextConfig} */
const repoName = process.env.REPO_NAME || '';

module.exports = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: repoName ? `/${repoName}/` : '',
  basePath: repoName ? `/${repoName}` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName ? `/${repoName}` : '',
  },
};
