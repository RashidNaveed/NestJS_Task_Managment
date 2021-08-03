import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToMany((_type) => User, (user) => user.tasks, { eager: false })
  user: User;
}
