import { Component, Input } from '@angular/core'
import { TaskComponent } from './task/task.component'
import { NewTaskComponent } from './new-task/new-task.component'
import { NewTaskData } from './task/task.model'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name!: string
  isAddingTask = false

  tasks = [
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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {}
}
