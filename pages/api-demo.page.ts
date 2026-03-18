import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>API Demo</h1>
    <p>Fetching from Analog API routes:</p>
    <pre>{{ response$ | async }}</pre>
  `,
})
export default class ApiDemoPageComponent {
  response$ = this.http.get<{ message: string }>('/api/hello');
  constructor(private http: HttpClient) {}
}
