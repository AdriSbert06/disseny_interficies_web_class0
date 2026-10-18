import { NewTaskData } from './../task/task.model';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task/tasks.service';
@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  //Envío de datos al componente padre
  @Output() closeDialog = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  //inyectar el servicio de tareas "instanciar"
  private tasksService = inject(TaskService);
  isclosedDialog(){
    this.closeDialog.emit();
  }

  onCancel(){
    this.closeDialog.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId)
    this.closeDialog.emit();
  }
}
