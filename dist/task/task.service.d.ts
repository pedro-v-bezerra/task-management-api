import { FindAllParameters, TaskDto } from './task.dto';
export declare class TaskService {
  private tasks;
  create(task: TaskDto): void;
  findById(id: string): TaskDto;
  findAll(params: FindAllParameters): TaskDto[];
  update(task: TaskDto): void;
  remove(id: string): TaskDto;
}
