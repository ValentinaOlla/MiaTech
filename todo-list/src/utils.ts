import { Todo } from "./types";

export function filterTodos(todos: Todo[], filter: (todo: Todo) => boolean): Todo[] {
    return todos.filter(filter);
}