import { useFetch } from "./hooks/useFetch"


export const ToDoList = () => {
    const { data: todos, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");

    if(loading) return <p>Caricamento dati...</p>
    if(error) return <p>Si è verificato un errore: { error }</p>

    return (
        <>
        <h2>Lista To-Do</h2>
        <ul>
            {todos.map((todo) => (
                <li key={ todo.id }>{ todo.title } { todo.completed ? "V" : "X" }</li>
            ))}
        </ul>
        </>
    );
}