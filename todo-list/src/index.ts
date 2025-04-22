import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

let Id = 1;

function addTodo(title: string, metadata?: string | object): Todo {
    const newTodo: Todo = {
        id: Id++,
        title,
        completed: false,
    };

    if(metadata !== undefined) {
        newTodo.metadata = metadata;
    }
    
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

function parseInput(input: unknown): string {
    if(typeof input === "string") {
        return input;
    } else if(typeof input === "number") {
        return input.toString();
    } else {
        return throwError("Questo tipo di input non è valido");
    }
}