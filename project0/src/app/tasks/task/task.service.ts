import { Injectable } from '@angular/core';
import { NewTaskData, Task } from './task.model';

// providedIn: 'root' means Angular creates ONE shared instance for the whole app.
// Every component that injects TaskService works with the same list of tasks.
@Injectable({ providedIn: 'root' })
export class TaskService {
  // Starting data, used only when nothing is saved in localStorage yet.
  // Note: the task list behaves like a Java List; new tasks go to the front (unshift).
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learn components',
      summary: 'Understand how components and templates work together.',
      dueDate: '2026-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn signals',
      summary: 'Practise input() and output() with the user component.',
      dueDate: '2026-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Learn services',
      summary: 'Share data between components with an injectable service.',
      dueDate: '2026-12-31',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Learn forms',
      summary: 'Build a form with two-way binding (ngModel).',
      dueDate: '2026-12-31',
    },
  ];

  constructor() {
    // localStorage keeps data after a page refresh.
    // It only stores text, so the array was saved as JSON; JSON.parse turns it back into an array.
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  // Returns only the tasks that belong to one user.
  // filter() builds a NEW array and does not change this.tasks.
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  // unshift() adds the item at the START of the array (like addFirst() in Java).
  addTask(task: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(), // simple unique id: current time in milliseconds
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });
    this.saveTasks();
  }

  // Deletes the task with this id.
  // We filter by id (not by position) so it still works if the list order changes.
  // This creates a new array without that task, which is the same idea as remove() in Java.
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  // Saves the whole list to localStorage as a JSON string.
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}