import { useCallback, useRef, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "./store/slices/textSlices";


export const ToDoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const [searchParams, setSearchParams] = useSearchParams();
    const inputRef = useRef();
    const searchTerm = searchParams.get("search") || "";

    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        return todos.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);

    useEffect(() => {
        if (filteredTodos.length > 0) {
            inputRef.current.focus();
        }
    }, [filteredTodos]);

    const handleSearchChanges = useCallback((event) => {
        setSearchParams({ search: event.target.value });
    }, [setSearchParams]);

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    if (!todos || todos.length === 0) return <p>Non ci sono todo da mostrare.</p>

    return (
        <>
            <h2>Lista To-Do</h2>
            <input
            type="text"
            ref={inputRef}
            placeholder="Cerca..."
            value={searchTerm}
            onChange={handleSearchChanges}
            />
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}{""}
                        <button onClick={() => handleToggle(todo.id)}>
                            {todo.completed ? "V" : "X"}
                        </button>
                        <Link to={`/details/${todo.id}`}> Info </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}