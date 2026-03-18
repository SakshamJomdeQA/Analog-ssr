import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Blog</h1>
    <p>Static content can be Markdown files in <code>src/content</code> or prerendered pages.</p>
    <ul>
      <li><a routerLink="/blog/hello-analog">Hello Analog</a></li>
      <li><a routerLink="/blog/launch-deploy">Launch Deploy Guide</a></li>
    </ul>
  `,
})
export default class BlogIndexPageComponent {}
