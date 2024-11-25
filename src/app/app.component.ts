import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Forms part 1</h1>
    <app-user />
  </div>
`,
imports: [UserComponent]
})
export class AppComponent {}
