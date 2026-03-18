import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>About</h1>
    <p>
      This is a static route. It can be prerendered (SSG) at build time when
      listed in <code>vite.config.ts</code> prerender.routes.
    </p>
  `,
})
export default class AboutPageComponent {}
