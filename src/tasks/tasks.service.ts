import { Injectable } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetFilterTasksDto } from './dtos/get-filter-tasks.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  deleteTaskById(id: string): Promise<void> {
    return this.tasksRepository.deleteTaskById(id);
  }

  updateTask(
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
  ): Promise<Task> {
    return this.tasksRepository.updateTask(id, title, description, status);
  }

  getAllTasks(filterDto: GetFilterTasksDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }
}
