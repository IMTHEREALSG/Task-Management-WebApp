import { Component, Input, output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input({required : true}) name !: string;
  @Input({required : true}) task !: Task[];

  delete = output<string>();

  onDeleteTask(tid: string) {
    this.delete.emit(tid);
  }

}
