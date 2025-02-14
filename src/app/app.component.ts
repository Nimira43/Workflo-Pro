import { Component } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { USERS } from './users'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent],
})
export class AppComponent {
  users = USERS

  onSelectUser(id: string) {
    console.log('Selected User ID: ' + id)
  }
}
