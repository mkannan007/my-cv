/** @type {import('next').NextConfig} */
// Set REPO_NAME env var when hosting under https://<user>.github.io/<repo>/
const repoName = process.env.REPO_NAME || '';

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: repoName ? `/${repoName}/` : '',
  basePath: repoName ? `/${repoName}` : '',
};
