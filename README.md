# Kielan Dixon — Portfolio

A Next.js portfolio site, set up to build as static files and deploy to
GitHub Pages automatically on every push to `main`.

## Running it locally

You need [Node.js](https://nodejs.org/) (v18 or later) installed. Then,
from this folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the page hot-reloads
as you edit files.

## Project structure

```
app/            Page shell and global styles (Next.js App Router)
components/     One file per section (Hero, ProjectGrid, About, etc.)
data/           Project content lives in data/projects.js — edit this
                to add/change projects without touching component code
public/         Static files (videos, images) — see public/projects/README.md
lib/            Small shared helpers
```

**To add or edit a project:** open `data/projects.js` and edit the
array — no component code needs to change. To add media, see
`public/projects/README.md`.

**To change colors/fonts:** `tailwind.config.js` has the color and
font tokens; `app/globals.css` has the page background and global
rules.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**, and under "Build and
   deployment", set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` will
   build the site and publish it automatically — check the **Actions**
   tab for progress. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/` for a normal
     repo, or
   - `https://<your-username>.github.io/` if the repo is named exactly
     `<your-username>.github.io`

   Either way, the workflow figures out the right URL path
   automatically — you don't need to edit `next.config.js` yourself.

### Using a custom domain instead

If you later want a custom domain (e.g. `kielandixon.com`) rather than
the `github.io` URL, add a `public/CNAME` file containing just your
domain name, and point your domain's DNS at GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
With a custom domain at the root, you'd also remove the basePath logic
in `next.config.js` since the site would no longer be under a subpath.

## Adding an interactive piece later

This starter is deliberately video/image-first, since that's the
highest-value, lowest-effort content you already have. When you're
ready to add a live interactive demo (e.g. a small Three.js shader
scene), the cleanest approach is to build it as its own component and
drop it into a project's detail view — it doesn't need to touch the
rest of the site's structure.
