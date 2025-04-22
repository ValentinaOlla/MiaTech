import { Todo, TodoRecord } from "./types";

export function filterTodos(todos: Todo[], filter: (todo: Todo) => boolean): Todo[] {
    return todos.filter(filter);
}

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
    const record: TodoRecord = {};

    for(const todo of todos) {
        record[todo.id] = todo;
    }

    return record;
}