import { useState } from "react";

const App = () => {
const [counter, setCounter] = useState(0);

const handleAddButton = () => {
  setCounter(counter + 1);
}

const handleDecButton = () => {
  setCounter(counter - 1);
}

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={handleDecButton}>-</button>
      <button onClick={handleAddButton}>+</button>
      </div>
  )
};

export default App;
