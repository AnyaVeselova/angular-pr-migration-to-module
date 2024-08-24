import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  tasks = dummyTasks;
  isAddingTask = false;

  get selectedUserTask() {
    const tasks = this.tasks.filter((task) => task.userId === this.userId);
    console.log('Filtered tasks:', tasks);
    return tasks;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddingTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    if (taskData && taskData.title && taskData.summary && taskData.dueDate) {
      this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: this.userId,
        ...taskData,
      });
      this.isAddingTask = false;
    }
  }
}
