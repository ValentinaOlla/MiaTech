import { useParams } from "react-router"
import { useFetch } from "./hooks/useFetch";


const Details = () => {
    const { id } = useParams();
    const { data: todo } = useFetch(id ? `https://jsonplaceholder.typicode.com/todos/${id}` : null);
    
    if(!todo) {
        return <p>Loading</p>;
    }

    return (
        <>
            <h1>Todos Details</h1>
                <div>
                    <strong>ID:</strong> { todo.id } <br />
                    <strong>Title:</strong> { todo.title } <br />
                    <strong>Completed:</strong> { todo.completed ? "Yes" : "No" }
                </div>
        </>
    )
}

export default Details