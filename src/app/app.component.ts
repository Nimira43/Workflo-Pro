import { Component } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { USERS } from './users'
import { TasksComponent } from './tasks/tasks.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = USERS
  selectedUserId?: string
  
  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId)
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
