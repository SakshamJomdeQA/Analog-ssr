/// <reference types="vite/client" />
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectResponse } from '@analogjs/router/tokens';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'Page Not Found',
  canActivate: [
    () => {
      const response = injectResponse();
      if (typeof import.meta !== 'undefined' && (import.meta as { env?: { SSR?: boolean } }).env?.SSR && response) {
        response.statusCode = 404;
      }
      return true;
    },
  ],
};

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Page Not Found</h2>
    <a routerLink="/">Go back home</a>
  `,
})
export default class NotFoundComponent {}
