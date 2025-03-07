import { useState, useCallback, useRef, useEffect } from "react";
import { useFetch } from "./hooks/useFetch"
import { useFilteredTodos } from "./hooks/useFilteredTodos";


export const ToDoList = () => {
    const { data: todos, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(todos, searchTerm);
    const inputRef = useRef();

    useEffect(() => {
        if(filteredTodos.length > 0 ) {
            inputRef.current.focus();
        }
    }, [filteredTodos]);
    
    const handleSearchChanges = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    if(loading) return <p>Caricamento dati...</p>
    if(error) return <p>Si è verificato un errore: { error }</p>

    return (
        <>
        <h2>Lista To-Do</h2>
        <input type="text" ref={ inputRef } placeholder="Cerca..." value={ searchTerm } onChange={ handleSearchChanges }/>
        <ul>
            {filteredTodos.map((todo) => (
                <li key={ todo.id }>{ todo.title } { todo.completed ? "V" : "X" }</li>
            ))}
        </ul>
        </>
    );
}