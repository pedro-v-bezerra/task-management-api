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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaskController = void 0;
const common_1 = require('@nestjs/common');
const task_dto_1 = require('./task.dto');
const task_service_1 = require('./task.service');
let TaskController = class TaskController {
  constructor(taskService) {
    this.taskService = taskService;
  }
  create(task) {
    this.taskService.create(task);
  }
  findById(id) {
    return this.taskService.findById(id);
  }
  findAll(params) {
    return this.taskService.findAll(params);
  }
  update(task) {
    this.taskService.update(task);
  }
  remove(id) {
    return this.taskService.remove(id);
  }
};
exports.TaskController = TaskController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [task_dto_1.TaskDto]),
    __metadata('design:returntype', void 0),
  ],
  TaskController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', task_dto_1.TaskDto),
  ],
  TaskController.prototype,
  'findById',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Array),
  ],
  TaskController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [task_dto_1.TaskDto]),
    __metadata('design:returntype', void 0),
  ],
  TaskController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', task_dto_1.TaskDto),
  ],
  TaskController.prototype,
  'remove',
  null,
);
exports.TaskController = TaskController = __decorate(
  [
    (0, common_1.Controller)('task'),
    __metadata('design:paramtypes', [task_service_1.TaskService]),
  ],
  TaskController,
);
//# sourceMappingURL=task.controller.js.map
