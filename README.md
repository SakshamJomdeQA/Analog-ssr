# Analog Launch Demo

A feature-complete **Analog.js** app to test SSR, SSG, file-based routing, API routes, and content, then deploy to **Contentstack Launch**.

## Features Demonstrated

| Feature | Where to test |
|--------|----------------|
| **SSR** (Server-Side Rendering) | [/features/ssr](/features/ssr) |
| **SSG** (Static Site Generation) | Prerendered routes; use `npm run build:static` |
| **File-based routing** | [/features/routing](/features/routing), [/products/1](/products/1) |
| **API routes** | [/api/hello](/api/hello), [/api/time](/api/time), [/demo-api](/demo-api) |
| **Layout routes** | [/features](/features), [/products](/products), [/blog](/blog) |
| **Dynamic routes** | [/products/:id](/products/1) |
| **404 / catch-all** | Any unknown URL |
| **Sitemap** | Generated at build time when using prerender |

## Quick start

```bash
npm install
npm run start
```

Open [http://localhost:5173](http://localhost:5173).

## Builds

- **SSR (default)** – Node server for Launch “Other” / SSR hosting:
  ```bash
  npm run build
  npm run serve   # node dist/analog/server/index.mjs (uses PORT)
  ```
- **SSG (static)** – Static files only for Launch static hosting:
  ```bash
  npm run build:static
  ```
  Output: `dist/analog/public/`

---

## Deploy to Contentstack Launch

You can deploy this repo as either **SSR** or **static (SSG)** on Launch.

### Option A: SSR on Launch (recommended for full Analog features)

Launch can run the Analog Node server using **Other** framework.

1. **Import project**
   - In Launch: **+ New Project** → **Import from a Git Repository**
   - Connect GitHub and select this repo (push the code first).
   - Branch: e.g. `main`.

2. **Build and output**
   - **Framework Preset:** **Other**
   - **Build Command:** `npm ci && npm run build`
   - **Output Directory:** `dist/analog`
   - **Server Command:** `node dist/analog/server/index.mjs`
   - Launch uses the `PORT` environment variable; Analog’s Nitro server respects it.

3. **Deploy**
   - Save and deploy. Your site will be served by the Node server (SSR + API routes).

### Option B: Static site (SSG) on Launch

Use this if you only need prerendered pages and no server/API at runtime.

1. **Import project**
   - Same as above (GitHub → this repo).

2. **Build and output**
   - **Framework Preset:** **Other** (or “Static” if your Launch UI has it).
   - **Build Command:** `npm ci && npm run build:static`
   - **Output Directory:** `dist/analog/public`
   - **Server Command:** leave empty (static site).

3. **Deploy**
   - Launch will serve the contents of `dist/analog/public` as a static site.

### After deployment

- Replace `https://your-launch-url.contentstack.com` in `vite.config.ts` (inside `prerender.sitemap.host`) with your real Launch URL, then rebuild and redeploy.
- For SSR, you can use [Launch’s cache revalidation](https://www.contentstack.com/docs/developers/launch/revalidate-cdn-cache) to refresh content.

---

## Launch: Cloud Functions, Rewrites & Redirects

The repo is set up to use **Launch Cloud Functions**, **Edge URL Rewrites**, and **Edge URL Redirects** via `launch.json` and the `/functions` folder.

### Cloud Functions (`/functions`)

- **Path:** JavaScript files in `/functions`; the path relative to `/functions` becomes the URL path.
- **Example:** `functions/hello.js` → `/hello`, `functions/user/[name].js` → `/user/:name`.
- **Handler:** Each function file must export: `export default function handler(request, response)`.
- **Docs:** [Cloud Functions](https://www.contentstack.com/docs/developers/launch/cloud-functions).

**Important:** When you deploy with a **Server Command** (SSR), Launch **disables Cloud Functions** for that project. So with the current SSR setup, `/hello` and `/user/:name` will not run as Cloud Functions; they are in the repo for when you use a static-only deploy or a separate functions-only project. For API logic with SSR, use the app’s API routes under `server/routes/api/` instead.

To run functions locally: `npx @contentstack/cli-launch launch:functions` (see [CLI for Launch](https://www.contentstack.com/docs/developers/cli/cli-for-launch)).

### Edge Function (`[proxy].edge.js`)

- **File:** `functions/[proxy].edge.js` (exact name required).
- Runs at the edge before each request; can log, modify, or proxy the request.
- This repo’s handler logs `method`, `pathname`, `url`, `clientIp`, and `timestamp`, then proxies to the origin with `return fetch(request)`.
- **View logs:** Launch dashboard → your project → **Server Logs** (console output appears there; retained 24 hours, max 5000 entries).
- **Docs:** [Edge Functions](https://www.contentstack.com/docs/developers/launch/edge-functions). Note: `launch.json` rewrites/redirects take precedence over the Edge Function.

### Edge URL Rewrites (`launch.json` → `rewrites`)

Rewrites serve content from a different URL without changing the address in the browser.

| Source | Destination | Purpose |
|--------|-------------|--------|
| `/api/:path(.*)` | `/api/:path` | Send `/api/*` to your Node app (so API routes work when CDN would otherwise 404). |
| `/products` | `/` | SPA fallback: serve app shell so Angular Router can show `/products`. |
| `/products/:id` | `/` | SPA fallback for dynamic product URLs. |

[Edge URL Rewrites](https://www.contentstack.com/docs/developers/launch/edge-url-rewrites)

### Edge URL Redirects (`launch.json` → `redirects`)

Redirects send the user to a new URL (browser address changes).

| Source | Destination | Status | Purpose |
|--------|-------------|--------|--------|
| `/old-demo` | `/demo-api` | 308 | Permanent redirect from old path to API demo page. |
| `/home` | `/` | 301 | Redirect `/home` to homepage. |

- **301** – permanent redirect; **302/307** – temporary; **308** – permanent (preserves method).
- [Edge URL Redirects](https://www.contentstack.com/docs/developers/launch/edge-url-redirects)

Commit and push `launch.json` and `/functions`; after the next deploy, Launch will apply rewrites and redirects. Cloud Functions will only be active if the project is deployed **without** a Server Command.

## Routing

This app uses **page routing only**: all routes are defined in `app.routes.ts` with an explicit `Routes` array and lazy-loaded via `loadComponent`. Page components live under `pages/`. There is no `src` folder.

## Project structure

No `src` folder. App and pages live at project root:

```
  app.component.ts   # Root component
  app.config.ts      # App providers (router, http, etc.)
  app.config.server.ts
  app.routes.ts      # Page routing (explicit Routes array)
  main.ts
  main.server.ts
  index.html
  pages/             # Route components (lazy-loaded from app.routes.ts)
  public/            # Static assets
  server/
    routes/
      api/           # Analog/Nitro API routes (/api/*)
  functions/         # Launch Cloud Functions + [proxy].edge.js (Edge Function)
  launch.json        # Launch Edge rewrites & redirects
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run start` | Dev server (Vite) |
| `npm run build` | Production build (SSR) |
| `npm run build:static` | Static build (SSG only) |
| `npm run serve` | Run built SSR server (uses `PORT`) |
| `npm run preview` | Preview production build |

## Links

- [Analog](https://analogjs.org/)
- [Contentstack Launch – Other frameworks](https://www.contentstack.com/docs/developers/launch/other-frameworks-on-launch)
- [Contentstack Launch – Host static site](https://www.contentstack.com/docs/developers/launch/host-a-static-site)
