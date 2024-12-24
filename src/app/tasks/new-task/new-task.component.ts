import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TypeNewTaskData } from 'src/app/task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<TypeNewTaskData>();

  // enteredTitle = '';
  enteredTitle = signal('');
  enteredSummary = '';
  enteredDate = '';

  onCloseDialog() {
    this.cancel.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
