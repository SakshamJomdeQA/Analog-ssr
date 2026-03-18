import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <h2>Products</h2>
    <p><a routerLink="/products">List</a> | <a routerLink="/products/1">Product 1</a> | <a routerLink="/products/2">Product 2</a></p>
    <router-outlet />
  `,
})
export default class ProductsLayoutComponent {}
