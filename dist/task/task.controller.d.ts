import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
  private readonly taskService;
  constructor(taskService: TaskService);
  create(task: TaskDto): void;
  findById(id: string): TaskDto;
  findAll(params: FindAllParameters): TaskDto[];
  update(task: TaskDto): void;
  remove(id: string): TaskDto;
}
