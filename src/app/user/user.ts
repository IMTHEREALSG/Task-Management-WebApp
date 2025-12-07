import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
}
