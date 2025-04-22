import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

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

function assignTodoToUser(todoId: number, userId: number): void {
    const todo = todos.find(t => t.id === todoId);
    const user = users.find(u => u.id === userId);

    if(todo && user) {
        todo.userId = userId;
    } else {
        console.warn("Todo o user non trovato");
    }
}

function getUserTodos(userId: number): Todo[] {
    return todos.filter(todo => todo.userId === userId);
}

const throwError = (message?: string): never => {
    throw new Error(message);
}