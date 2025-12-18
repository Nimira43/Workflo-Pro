import { Injectable } from '@angular/core'
import { type NewTaskData } from './task/task.model'

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'user-1',
      title: 'Learn Svelte JS',
      summary: 'Know how to create applications in Svelte using Svelte Kit.',
      dueDate: '2025-11-17'
    },
    {
      id: 't2',
      userId: 'user-5',
      title: 'Learn Mongo DB',
      summary: 'Know how to integrate Mongo DB into different full stack applications.',
      dueDate: '2026-03-02'
    },
    {
      id: 't3',
      userId: 'user-4',
      title: 'Learn Nest JS',
      summary: 'Create a full API application using Nest JS.',
      dueDate: '2026-04-26'
    },
    {
      id: 't4',
      userId: 'user-2',
      title: 'Learn Tailwind 4',
      summary: 'Develop a full understanding of Tailwind 4 for use in Frontend development.',
      dueDate: '2025-09-22'
    }
  ]

  constructor() { 
    const tasks = localStorage.getItem('tasks')

    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getuserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)
  } 

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,  
    })
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}