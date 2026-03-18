import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Hello Analog</h1>
    <p>This is a prerendered blog-style page. It's included in the SSG routes list.</p>
    <p><a routerLink="/blog">Back to blog</a></p>
  `,
})
export default class BlogPostHelloAnalogComponent {}
