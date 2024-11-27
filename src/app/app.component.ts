import { Component } from '@angular/core';
import { Items } from './forloop/items.component';

@Component({
  selector: 'app-root',
  template: `
  Welcome to Angular!
  For Loop
  <app-items />
`,
imports: [Items]
})
export class AppComponent {}
