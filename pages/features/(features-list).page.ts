import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Analog Features</h1>
    <ul>
      <li><a routerLink="/features/ssr">SSR</a></li>
      <li><a routerLink="/features/ssg">SSG</a></li>
      <li><a routerLink="/features/api">API</a></li>
      <li><a routerLink="/features/routing">Routing</a></li>
    </ul>
  `,
})
export default class FeaturesListPageComponent {}
