import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Tasks';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

  /*async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }*/
  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel({
      _id: task._id,
      title: task.title,
      description: task.description,
      done: task.done,
    });
    return await newTask.save();
  }

  async updateTask(id: string, task: UpdateTaskDto) {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, task, {
      new: true,
    });
    return updatedTask;
  }

  async deleteTask(id: string) {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    return deletedTask;
  }
}
