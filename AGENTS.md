# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + TanStack Start React/TypeScript showcase for SECRO-FILL.

- `src/routes/` contains file-based routes: `index.tsx` (`/`), `about.tsx`, `services.tsx`, and `contact.tsx`; `__root.tsx` is the shared app shell.
- `src/components/site/` holds branded layout components such as `Header`, `Footer`, `PageShell`, and the language switcher. Reusable Radix-based primitives live in `src/components/ui/`.
- `src/lib/` contains utilities, i18n, and error handling; `src/hooks/` contains React hooks.
- `src/assets/` contains product and portfolio imagery. Keep `src/routeTree.gen.ts` generated—never edit it manually.

## Build, Test, and Development Commands

Run `npm i` after cloning, then use:

- `npm run dev` — start the local Vite development server.
- `npm run build` — create the production TanStack Start/Nitro build.
- `npm run build:dev` — build with development settings.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint and Prettier checks through the configured ESLint integration.
- `npm run format` — format the repository with Prettier.

There is currently no automated test script or test suite in this repository. Verify UI changes manually at desktop and mobile widths, and run `npm run lint` plus `npm run build` before submitting.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, double quotes, and trailing commas as enforced by Prettier. Name React components and component files in PascalCase (`PageShell.tsx`); use camelCase for functions, hooks, and variables (`useMobile`). Use the `@/*` alias for imports from `src`, and prefer existing `cn`/utility helpers and shared site components over duplicating styles. Follow TanStack file-based route naming; preserve the existing RTL/i18n behavior for Arabic and LTR behavior for English and German.

## Commit & Pull Request Guidelines

Recent history uses short, imperative descriptions such as `Add project README` and `Changes`; keep commits similarly brief and specific (for example, `Add RTL contact form`). Do not rewrite published history because this project is connected to Lovable. PRs should explain the user-visible change, list validation commands, link related issues when applicable, and include before/after screenshots for visual work. Keep each PR focused and confirm responsive behavior.

## Configuration & Asset Tips

Do not add duplicate Vite plugins; `vite.config.ts` delegates to the Lovable TanStack configuration. Keep secrets out of source control and use `VITE_*` variables for client-exposed configuration. Optimize new images and provide descriptive alt text.
