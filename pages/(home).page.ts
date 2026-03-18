import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Analog Launch Demo</h1>
    <p>
      This app demonstrates Analog.js features for deployment on
      <strong>Contentstack Launch</strong>.
    </p>
    <ul>
      <li><a routerLink="/features/ssr">SSR (Server-Side Rendering)</a></li>
      <li><a routerLink="/features/ssg">SSG (Static Site Generation)</a></li>
      <li><a routerLink="/features/api">API routes</a></li>
      <li><a routerLink="/features/routing">File-based routing</a></li>
      <li><a routerLink="/blog">Markdown content (blog)</a></li>
      <li><a routerLink="/products">Dynamic routes (products)</a></li>
    </ul>
    <p>Use the nav above to explore. Deploy to Launch using the guide in the README.</p>
  `,
})
export default class HomePageComponent {}
