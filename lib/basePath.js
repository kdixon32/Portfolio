// next/image and next/link automatically account for `basePath`, but a
// raw <img src="..."> or <video src="..."> does not. Since this site
// leans on plain <video> tags for looping clips, wrap any path into
// /public with this helper so it still resolves correctly when the
// site is deployed under a subpath (https://<user>.github.io/<repo>/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path) {
  if (!path) return path;
  return `${basePath}${path}`;
}
