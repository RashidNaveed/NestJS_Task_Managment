import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetFilterTasksDto } from './dtos/get-filter-tasks.dto';
import { TaskStatus } from './tasks-status.enum';
import { Task } from './tasks.entity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async getTasks(filterDto: GetFilterTasksDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (search) {
      query.andWhere(
        'LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)',
        {
          search: `%${search}%`,
        },
      );
    }

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    const tasks = query.getMany();
    return tasks;
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task not found by id ${id}`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }

  async deleteTaskById(id: string): Promise<void> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task by ID ${id} not found.`);
    }
  }

  async updateTask(
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
  ): Promise<Task> {
    const task = await this.getTaskById(id);
    if (title) {
      task.title = title;
    }
    if (description) {
      task.description = description;
    }
    if (status) {
      task.status = status;
    }
    await this.save(task);
    return task;
  }
}
