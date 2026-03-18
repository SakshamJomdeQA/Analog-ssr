import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h3>Product list</h3>
    <ul>
      <li><a routerLink="/products/1">Product 1</a></li>
      <li><a routerLink="/products/2">Product 2</a></li>
    </ul>
  `,
})
export default class ProductListPageComponent {}
