/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Body,
  Param,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';

import { TasksService } from './tasks.service';

import { Task } from './interfaces/Tasks';

import { UpdateTaskDto } from './dto/UpdateTaskDto';

/*@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTasks(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTasks(@Body() task: CreateTaskDto, @Param('id') id): string {
    return 'actualizando tareas';
  }

  @Delete(':id')
  deleteTasks(@Param('id') id): string {
    return 'eliminando tarea numero: ' + id;
  }
}*/
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTasks(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTasks(
    @Body() task: UpdateTaskDto,
    @Param('id') id: string,
  ): Promise<Task> {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTasks(@Param('id') id: string): Promise<Task> {
    return this.taskService.deleteTask(id);
  }
}
