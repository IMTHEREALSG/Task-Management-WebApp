import { Component, input, output, signal } from '@angular/core';
import { NewTaskData } from '../../models/NewTask.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent {
  userId = input<string>();
  cancel = output<void>();
  add = output<NewTaskData>();

  t = signal<string>('');
  s = signal<string>('');
  d = signal<string>('');

  onCancel() {
    this.cancel.emit();
  }

  onAddTask(){
    if(!this.t().trim() || !this.s().trim() || !this.d().trim()){
      alert('Please fill in all fields.');
      return;
    }

    this.add.emit({
      title: this.t(),
      summary: this.s(),
      dueDate: this.d()
    });
  }
}
