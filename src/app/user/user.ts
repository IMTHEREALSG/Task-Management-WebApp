import { Component,computed,signal,Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html'
})
export class UserComponent {

  
onSelectUser() {
throw new Error('Method not implemented.');
}
  @Input() avatar!:string ;
  @Input() name!:string ;

  get ImagePath(){
    return `${this.avatar}`;
  }

}


