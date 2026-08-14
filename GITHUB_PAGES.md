# GitHub Pages Deployment

This repository is configured for free GitHub Pages hosting through GitHub Actions. The expected repository name is `noel-amorcillo-portfolio`.

## One-time GitHub setup

After pushing the repository to GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` will build the Vite application and publish `dist/public` whenever changes are pushed to the `main` branch.

The expected site address is:

```text
https://noelamorcillojr-create.github.io/noel-amorcillo-portfolio/
```

The first deployment may take a few minutes after the workflow starts. Subsequent pushes to `main` will trigger new deployments automatically.

## Local verification

To reproduce the GitHub Pages build locally, run:

```bash
GITHUB_PAGES=true pnpm install
GITHUB_PAGES=true pnpm run build
```

The generated static site is placed in `dist/public`.

## If the repository name changes

The Vite configuration currently uses the repository base path `/noel-amorcillo-portfolio/`. If the repository is renamed, update the `base` value in `vite.config.ts` and revise the expected URL in this file. A user-site repository named `<username>.github.io` should use `/` as its base path instead.

## What is intentionally excluded

Manus-only analytics, debug collector scripts, and storage-proxy references are excluded from the GitHub Pages build so that the exported site remains self-contained. The portfolio does not require a backend, database, or server runtime for the current feature set.
