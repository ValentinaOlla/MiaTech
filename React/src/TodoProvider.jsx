import { useFetch } from "./hooks/useFetch";
import { TodoContext } from "./TodoContext"; 

export const TodoProvider = ({ children }) => {
    const { data: todos, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <TodoContext.Provider value={ { todos, loading, error, reload } }>
            { children }
        </TodoContext.Provider>
    )
}
