/**
 * Static export config for GitHub Pages.
 *
 * If you deploy to a PROJECT page (https://<user>.github.io/<repo>/),
 * GitHub serves the site from a subpath, so Next needs to know that
 * subpath ahead of time. The GitHub Actions workflow in
 * .github/workflows/deploy.yml sets NEXT_PUBLIC_BASE_PATH to "/<repo>"
 * automatically at build time — you don't need to edit anything here.
 *
 * If you deploy to a USER page (a repo literally named
 * <user>.github.io), the site is served from the root, so basePath
 * should stay empty. The workflow detects this automatically too.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // GitHub Pages has no image-optimization server, so we export
    // plain <img> tags instead of relying on next/image's server step.
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
