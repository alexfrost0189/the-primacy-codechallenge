export interface TaskData {
  name: string;
  status: TaskStatuses;
  department: TaskDepartments;
  date: number;
}

export interface Filters {
  name?: string
  status?: string
  dateFrom?: number | string
  dateTo?: number | string
}

export enum TaskStatuses {
  clientReview = 'clientReview',
  inReview = 'inReview',
  toDo = 'toDo',
  done = 'done',
  internalQA = 'internalQA',
  inProgress = 'inProgress',
}

export enum TaskDepartments {
  development = 'Development',
  design = 'Design',
}