import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <h2>Features</h2>
    <router-outlet />
  `,
})
export default class FeaturesLayoutComponent {}
