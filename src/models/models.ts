

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
  }

  export enum TaskStatus {
    Pending = 'pending',
    Completed = 'completed',
  }