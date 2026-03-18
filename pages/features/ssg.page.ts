import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>SSG Demo</h1>
    <p>
      This page is statically generated. It's in the prerender routes list, so
      it becomes a static HTML file in <code>dist/analog/public</code> when you
      run a static build.
    </p>
  `,
})
export default class SsgPageComponent {}
