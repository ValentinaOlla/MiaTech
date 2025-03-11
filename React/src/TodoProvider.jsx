import { createContext, useContext, } from "react";
import { useFetch } from "./hooks/useFetch";

export const TodoContext = createContext(null);

export const useTodos = () => {
    return useContext(TodoContext);
}

const TodoProvider = ({ children }) => {
    const { data: todos, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <TodoContext.Provider value={{ todos, error, loading }}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoProvider