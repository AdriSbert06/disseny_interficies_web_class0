import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  user = input<String>('user')
  username = input<String>('user')

  taskList = [
    { 
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'This is the summary of task 1',
      dueDate: '2026-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'This is the summary of task 2',
      dueDate: '2026-12-31'
    }
  ]

  isSameUser(taskUserId: string): boolean{
    return this.user() === taskUserId;
  }


  task1 = "Una task sencilla";
  task2 = "Una task compleja";
}
