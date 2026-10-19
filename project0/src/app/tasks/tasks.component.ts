import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // Values sent by the parent (AppComponent): [name]="..." and [userId]="..."
  // "required: true" means Angular shows an error if the parent forgets to pass them.
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId!: string;

  // The shared TaskService is injected through the constructor (same instance as in TaskComponent)
  constructor(private tasksService: TaskService) {}

  // A getter is re-run every time Angular checks the template.
  // So when a task is removed from the service, this list is recalculated and the screen updates.
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}