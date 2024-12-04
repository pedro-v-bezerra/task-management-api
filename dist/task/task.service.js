'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaskService = void 0;
const common_1 = require('@nestjs/common');
let TaskService = class TaskService {
  constructor() {
    this.tasks = [];
  }
  create(task) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
  findById(id) {
    const foundTask = this.tasks.filter((t) => t.id === id);
    if (foundTask.length) {
      return foundTask[0];
    }
    throw new common_1.HttpException(
      `Task with id ${id} not found`,
      common_1.HttpStatus.NOT_FOUND,
    );
  }
  findAll(params) {
    return this.tasks.filter((t) => {
      let match = true;
      if (params.title != undefined && !t.title.includes(params.title)) {
        match = false;
      }
      if (params.status != undefined && !t.status.includes(params.status)) {
        match = false;
      }
      return match;
    });
  }
  update(task) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex >= 0) {
      this.tasks[taskIndex] = task;
      return;
    }
    throw new common_1.HttpException(
      `Task with id ${task.id} not found`,
      common_1.HttpStatus.BAD_REQUEST,
    );
  }
  remove(id) {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
      return;
    }
    throw new common_1.HttpException(
      `Task with id ${id} not found`,
      common_1.HttpStatus.BAD_REQUEST,
    );
  }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate(
  [(0, common_1.Injectable)()],
  TaskService,
);
//# sourceMappingURL=task.service.js.map
