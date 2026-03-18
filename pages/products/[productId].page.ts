import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h3>Product {{ productId }}</h3>
    <p>Dynamic route param: <code>productId = {{ productId }}</code></p>
  `,
})
export default class ProductDetailPageComponent {
  @Input() productId!: string;
}
