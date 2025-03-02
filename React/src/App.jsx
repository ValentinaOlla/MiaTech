import { useState } from "react";

const App = () => {
const [counter, setCounter] = useState(0);

function increment() {
  setCounter((_counter) => {
    return _counter + 1;
  })
}

function decrement() {
  setCounter((_counter) => {
    return _counter - 1;
  })
}

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      </div>
  )
};

export default App;
