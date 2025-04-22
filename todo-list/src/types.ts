export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
  metadata?: any;
  status?: TodoStatus;
}

export interface TodoWithMetadata extends Todo {
  metadata: any;
}

export enum TodoStatus {
  Pending,
  InPogress,
  Completed
}

export interface User {
  id: number;
  name: string;
  email?: string;
  readonly todos: ReadonlyArray<Todo>;
}

export interface Project {
  name: string;
  users: User[];
  todos: Todo[];
}

