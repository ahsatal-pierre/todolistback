import { RowDataPacket } from "mysql2";


export interface Task extends RowDataPacket {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
  }

  export enum TaskStatus {
    Pending = 'pending',
    Completed = 'completed',
  }