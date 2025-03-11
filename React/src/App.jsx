import { ToDoList } from "./ToDoList";
import TodoProvider from "./TodoProvider";

export const App = () => {
  
    return (
      <TodoProvider>
          <ToDoList />
      </TodoProvider>
        
    );
  }