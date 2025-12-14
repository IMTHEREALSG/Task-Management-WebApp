import { Component,computed,signal,Input, output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../models/user.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  imports: [NgClass]
})
export class UserComponent {

  @Input({required : true}) user !: User;
  @Input({ required: true }) selected: boolean = false;

  select = output<string>();

  ImagePath = computed(() => {
    return this.user.avatar;
  });

  onSelectUser() {
   this.select.emit(this.user.id);
  }

}


