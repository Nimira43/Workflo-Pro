import { Component, computed, signal } from '@angular/core'
import { USERS } from '../users'

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = signal(USERS[randomIndex]) 
  imagePath = computed(() => 'assets/users/' + this.selectedUser().image)

  onSelectUser() {
    
  }
}