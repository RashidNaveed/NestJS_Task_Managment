import { IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class UpdateTaskStatusDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
