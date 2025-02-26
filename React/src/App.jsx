import { useState, useEffect } from "react";

const App = () => {
const [counter, setCounter] = useState(0);

const handleAddButton = () => {
  setCounter(counter + 1);
}

const handleDecButton = () => {
  setCounter(counter - 1);
}

const handleResetButton = () => {
  setCounter(0);
}

useEffect(() => {
  document.title = `${counter}`;
}, [counter]);

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={handleDecButton}>-</button>
      <button onClick={handleAddButton}>+</button>
      <button onClick={handleResetButton}>Reset</button>
      </div>
  )
};

export default App;
