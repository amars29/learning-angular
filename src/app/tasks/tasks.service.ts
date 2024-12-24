import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { TypeNewTaskData } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskdata: TypeNewTaskData, userId: string) {
    this.tasks.push({
      id: 't' + new Date().getTime().toString(),
      userId: userId,
      title: taskdata.title,
      summary: taskdata.summary,
      dueDate: taskdata.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
