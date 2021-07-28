import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
// import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetFilterTasksDto } from './dtos/get-filter-tasks.dto';

@Injectable()
export class TasksService {
  // Keeping this code just for reference when i used nestjs without database
  // private tasks: Task[] = [];
  // getAllTasks() {
  //   return this.tasks;
  // }
  // getTaskWithFilter(filterDto: GetFilterTasksDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) =>
  //       task.title.toLowerCase().includes(search.toLowerCase()) ||
  //       task.description.toLowerCase().includes(search.toLowerCase())
  //         ? true
  //         : false,
  //     );
  //   }
  //   return tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // getTaskById(id: string) {
  //   const task: Task = this.tasks.find((task) => task.id === id);
  //   if (!task) {
  //     throw new NotFoundException(`Task not found by id ${id}`);
  //   }
  //   return task;
  // }
  // deleteTaskById(id: string) {
  //   const index = this.tasks.findIndex((task) => task.id === id);
  //   if (index > -1) {
  //     this.tasks.splice(index, 1);
  //     return `Task deleted with id ${id}`;
  //   }
  //   throw new NotFoundException(`Task not found by id ${id}`);
  // }
  // updateTask(
  //   id: string,
  //   title: string,
  //   description: string,
  //   status: TaskStatus,
  // ) {
  //   if (title) {
  //     const index = this.tasks.findIndex((task) => task.id === id);
  //     this.tasks[index].title = title;
  //   }
  //   if (description) {
  //     const index = this.tasks.findIndex((task) => task.id === id);
  //     this.tasks[index].description = description;
  //   }
  //   if (status) {
  //     const index = this.tasks.findIndex((task) => task.id === id);
  //     this.tasks[index].status = status;
  //   }
  // }
}
