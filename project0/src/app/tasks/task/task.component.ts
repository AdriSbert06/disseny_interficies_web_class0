import { TaskService } from './tasks.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private tasksComponent = inject(TaskService);

  onCompleteTask(){
    this.tasksComponent.removeTask(this.task.id);
  }
}