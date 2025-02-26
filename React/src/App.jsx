import { useState } from "react";

const App = () => {
const [counter, setCounter] = useState(0);

const handleAddButton = () => {
  setCounter(counter + 1);
}

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={handleAddButton}>Add</button>
    </div>
  )
};

export default App;
