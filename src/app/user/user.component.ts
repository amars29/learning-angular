import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <section>
      <div>Username: {{ username }}</div>
      <p> My Favorite framework is {{favoriteFramework}} </p>
      <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework"/>
      </label>
    </section>
  `,
  imports: [FormsModule]
})
export class UserComponent {
  username = 'youngTech';
  favoriteFramework= '';
}
