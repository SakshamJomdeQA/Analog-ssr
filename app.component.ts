import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'analog-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="app">
      <nav class="nav">
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/features">Features</a>
        <a routerLink="/blog">Blog</a>
        <a routerLink="/demo-api">API Demo</a>
        <a routerLink="/products">Products</a>
      </nav>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      .app {
        min-height: 100vh;
        font-family: system-ui, sans-serif;
      }
      .nav {
        display: flex;
        gap: 1rem;
        padding: 1rem 2rem;
        background: #1a1a2e;
        color: #eee;
      }
      .nav a {
        color: #eee;
        text-decoration: none;
      }
      .nav a:hover {
        text-decoration: underline;
      }
      main {
        padding: 2rem;
        max-width: 900px;
        margin: 0 auto;
      }
    `,
  ],
})
export class AppComponent {}
