import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Deploying to Contentstack Launch</h1>
    <p>Use the README in this repo for SSR or SSG deployment steps on Launch.</p>
    <p><a routerLink="/blog">Back to blog</a></p>
  `,
})
export default class BlogPostLaunchDeployComponent {}
