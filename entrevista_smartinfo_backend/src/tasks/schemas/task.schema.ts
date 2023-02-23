/* eslint-disable prettier/prettier */
import { Schema, Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  //done: boolean;
}

export const TaskSchema = new Schema(
  {
    /*_id: {
      type: String,
      //required: true,
    },*/
    title: {
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    /*done: {
      type: Boolean,
      default: false,
    },*/
  },
  
);
