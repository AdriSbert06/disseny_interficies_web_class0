import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  task1 = "Una task sencilla";
  task2 = "Una task compleja";
}
