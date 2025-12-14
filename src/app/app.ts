import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from "./Components/user/user";
import { DUMMY_USERS } from './dummy-users';
import { DUMMY_TASKS } from './dummy-tasks';
import { CardComponent } from "./Components/card/card.component";
import { NewTaskData } from './models/NewTask.model';
import { NewTaskComponent } from "./Components/New-task/new-task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, CardComponent, NewTaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  tasks = signal(DUMMY_TASKS);
  selectedUserId = signal('u1');
  isAddingTask = signal(false);

  selectedUserTasks = computed(() =>
    this.tasks().filter(task => task.userId === this.selectedUserId())
  );

  selectedUserName = computed(() =>
    this.users.find(user => user.id === this.selectedUserId())?.name ?? 'Unknown User'
  );

  onSelectUser(id: string){
    this.selectedUserId.set(id);
  }

  onDeleteTask(tid: string){
    this.tasks.update(currentTasks => currentTasks.filter(task => task.id !== tid));
  }

  onStartAddTask(){
    this.isAddingTask.set(true);
  }

  onCloseAddTask(){
    this.isAddingTask.set(false);
  }

  onAddTask(data: NewTaskData){
    const newTask = {
      id : (this.tasks().length + 1).toString(),
      userId : this.selectedUserId(),
      title : data.title,
      summary : data.summary,
      dueDate : data.dueDate
    };

    this.tasks.update(currenttasks => [...currenttasks, newTask]);

    this.isAddingTask.set(false);
  }
}
