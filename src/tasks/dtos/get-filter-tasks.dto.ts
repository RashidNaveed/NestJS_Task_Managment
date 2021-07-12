import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class GetFilterTasksDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
