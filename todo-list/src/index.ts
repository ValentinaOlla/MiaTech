import { Todo } from "./types";

const todos: Todo[] = [];

let Id = 1;

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: Id++,
        title,
        completed: false,
    };
    todos.push(newTodo);
    return newTodo;
}