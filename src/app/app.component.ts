import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { TypeUser } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: TypeUser;
  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id)!;
  }
}
