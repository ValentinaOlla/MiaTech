import { Todo, UserInt, Project, TodoStatus, PartialTodo } from "./types";
import { User } from "./User";

const todos: Todo[] = [];
const users: UserInt[] = [];

let Id = 1;

function addTodo(title: string, metadata?: string | object): Todo {
    const newTodo: Todo = {
        id: Id++,
        title,
        completed: false,
        status: TodoStatus.Pending,
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

function updateTodo(id: number, update: Partial<Todo>): void {
    const todo = todos.find(t => t.id === id);

    if(!todo) {
        console.warn("Todo non trovato");
        return;
    }
    Object.assign(todo, update);
}

function updatePartialTodo(todoId: number, updates: PartialTodo): void {
    const todo = todos.find(t => t.id === todoId);

    if(!todo) {
        console.warn("Todo non trovato");
        return;
    }
    Object.assign(todo, updates);
}

function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed];
}

function createProject(name: string, users: UserInt[], todos: Todo[]): Project {
    return {
        name,
        users,
        todos,
    };
}

function updateTodoStatus(todoId: number, status: TodoStatus): void {
const todo = todos.find(t => t.id === todoId);

if(!todo) {
    console.warn("Todo non trovato");
    return;
}

todo.status = status;
}

const user1 = new User(1, "Alice");
const user2 = new User(2, "Mario");
const todo1 = addTodo("Prenotare il biglietto per il concerto di Caparezza");
const todo2 = addTodo("Fare passeggiata di 30 minuti");
const todo3 = addTodo("Pulire la libreria (pure le parti alte!)");

user1.addTodo(todo1);
user1.addTodo(todo3);
user2.addTodo(todo2);

users.push(user1, user2);
