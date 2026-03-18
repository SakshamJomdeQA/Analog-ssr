import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'public',
  build: {
    target: ['es2020'],
  },
  plugins: [
    analog({
      sourceRoot: '.',
      entryServer: 'main.server.ts',
      ssr: true,
      static: mode === 'static',
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/features',
          '/features/ssr',
          '/features/ssg',
          '/features/api',
          '/features/routing',
          '/blog',
          '/blog/hello-analog',
          '/blog/launch-deploy',
          '/demo-api',
          '/404.html',
        ],
        sitemap: {
          host: 'https://your-launch-url.contentstack.com',
        },
      },
      nitro: {
        routeRules: {
          '/404.html': { ssr: false },
        },
      },
    }),
  ],
}));
