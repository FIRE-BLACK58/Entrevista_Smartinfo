/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Task extends Document {
  id?: number;
  title: string;
  description: string;
  done: boolean;
}
