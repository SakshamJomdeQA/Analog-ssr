import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>SSR Demo</h1>
    <p>
      This page is server-side rendered. The HTML is generated on the server
      (or at build time if prerendered).
    </p>
    <p>Rendered at: {{ now }}</p>
  `,
})
export default class SsrPageComponent {
  now = new Date().toISOString();
}
