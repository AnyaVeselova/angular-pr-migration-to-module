import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  tasks = dummyTasks;

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddButtonClick(userId: string) {
    this.tasks.push({
      id: 't' + (this.tasks.length + 1),
      userId,
      title: 'New Task',
      summary: 'New Task Summary',
      dueDate: '2025-12-31',
    });
  }
}
