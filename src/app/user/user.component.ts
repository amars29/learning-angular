import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
  <section>
    <p>Username: {{ username }}</p>
    <p>{{username}}'s favorite framework is {{favoriteFramework}}
    <div >
    <label for="framework">
    
      Favorite Framework:
      <input id="framework" [type]="inputType" [(ngModel)]="favoriteFramework" />
    </label>
    </div> 
  </section> 
  `,
  imports: [FormsModule],
})
export class UserComponent {
  username = 'youngTech';
  favoriteFramework = ''; // Used for two-way binding
  inputType = 'text'; // used for propertyBinding
}
