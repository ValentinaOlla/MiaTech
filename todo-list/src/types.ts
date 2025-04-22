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

export type PartialTodo = {
  [K in keyof Todo]?: Todo[K];
}

export enum TodoStatus {
  Pending,
  InPogress,
  Completed
}

export interface UserInt {
  id: number;
  name: string;
  email?: string;
  readonly todos: ReadonlyArray<Todo>;
}

export interface Project {
  name: string;
  users: UserInt[];
  todos: Todo[];
}

export type TodoRecord = {
  [id: number]: Todo;
}

