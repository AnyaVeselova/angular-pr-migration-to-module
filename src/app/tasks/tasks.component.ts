import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
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
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddingTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
