import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
     
      <a routerLink="/" routerLinkActive="active" >Home</a>
      |
      <a routerLink="/user">User</a>
      |
      
      
    </nav>
    <router-outlet></router-outlet>
  `,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
})
export class AppComponent {}
