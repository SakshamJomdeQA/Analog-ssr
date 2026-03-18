import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/(home).page').then((m) => m.default),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.page').then((m) => m.default),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features.page').then((m) => m.default),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/features/(features-list).page').then((m) => m.default),
      },
      {
        path: 'ssr',
        loadComponent: () =>
          import('./pages/features/ssr.page').then((m) => m.default),
      },
      {
        path: 'ssg',
        loadComponent: () =>
          import('./pages/features/ssg.page').then((m) => m.default),
      },
      {
        path: 'api',
        loadComponent: () =>
          import('./pages/features/api.page').then((m) => m.default),
      },
      {
        path: 'routing',
        loadComponent: () =>
          import('./pages/features/routing.page').then((m) => m.default),
      },
    ],
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog.page').then((m) => m.default),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/blog/(blog-index).page').then((m) => m.default),
      },
      {
        path: 'hello-analog',
        loadComponent: () =>
          import('./pages/blog/hello-analog.page').then((m) => m.default),
      },
      {
        path: 'launch-deploy',
        loadComponent: () =>
          import('./pages/blog/launch-deploy.page').then((m) => m.default),
      },
    ],
  },
  {
    path: 'demo-api',
    loadComponent: () =>
      import('./pages/api-demo.page').then((m) => m.default),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products.page').then((m) => m.default),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/products/(product-list).page').then((m) => m.default),
      },
      {
        path: ':productId',
        loadComponent: () =>
          import('./pages/products/[productId].page').then((m) => m.default),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/[...not-found].page').then((m) => m.default),
  },
];
