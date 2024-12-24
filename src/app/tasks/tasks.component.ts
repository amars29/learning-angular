import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { type TypeNewTaskData } from '../task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NgFor, NgIf, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
