import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>API Routes</h1>
    <p>Analog serves API routes from <code>src/server/routes/api/</code>.</p>
    <ul>
      <li><a href="/api/hello" target="_blank">GET /api/hello</a></li>
      <li><a href="/api/time" target="_blank">GET /api/time</a></li>
      <li><a href="/api/v1/hello/Analog" target="_blank">GET /api/v1/hello/Analog</a></li>
    </ul>
    <p><a routerLink="/demo-api">Try the API demo page</a> that fetches from these endpoints.</p>
  `,
})
export default class ApiPageComponent {}
