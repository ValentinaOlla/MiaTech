import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";


export const ToDoList = () => {
    const { data: todos, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();
    
    console.log("Sono TodoList e ricevo: ", { todos, error, loading })

    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        return todos.filter(todo => 
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);

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
    if(!todos || todos.length === 0) return <p>Non ci sono todo da mostrare.</p>

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