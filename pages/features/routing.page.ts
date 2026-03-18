import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>File-based Routing</h1>
    <p>Routes are defined by files under <code>src/app/pages/</code>:</p>
    <ul>
      <li><code>(home).page.ts</code> → /</li>
      <li><code>about.page.ts</code> → /about</li>
      <li><code>features/ssr.page.ts</code> → /features/ssr</li>
      <li><code>products/[id].page.ts</code> → /products/:id</li>
      <li><code>[...not-found].page.ts</code> → 404</li>
    </ul>
    <p><a routerLink="/products/1">Example dynamic route: /products/1</a></p>
  `,
})
export default class RoutingPageComponent {}