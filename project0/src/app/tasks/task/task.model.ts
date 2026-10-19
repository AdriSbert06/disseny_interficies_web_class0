// Shape of one task, as stored in TaskService and shown by TaskComponent
export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// Data coming from the "Add Task" form (used in the next step)
export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}