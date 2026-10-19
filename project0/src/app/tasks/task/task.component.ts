import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe], // DatePipe is needed for the | date pipe in the template
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // Receives ONE task from the parent (TasksComponent) through property binding: [task]="task"
  @Input({ required: true }) task!: Task;

  // inject() asks Angular for the shared TaskService instance (the same one the parent uses)
  private tasksService = inject(TaskService);

  onDeleteTask() {
    // Removes this task from the shared list.
    // The parent list is recalculated on the next change detection, so the card disappears.
    this.tasksService.removeTask(this.task.id);
  }
}