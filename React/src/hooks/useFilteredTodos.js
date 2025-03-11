import { useState, useEffect } from "react"

export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if(!todos) return;

        if(!searchTerm || searchTerm.trim() === "") {
            setFilteredTodos(todos);
            return;
        }

        const filtered = todos.filter((todo) =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );

        setFilteredTodos(filtered);
    }, [todos, searchTerm]);

    return filteredTodos;
}