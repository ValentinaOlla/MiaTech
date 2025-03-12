import { ToDoList } from "../ToDoList";
import TodoProvider from "../TodoProvider";

const Home = () => {

  return (
    <TodoProvider>
          <ToDoList />
      </TodoProvider>
  )
}

export default Home
