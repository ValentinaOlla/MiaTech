import { useState, useEffect } from "react";

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

function reset() {
  setCounter(0);
}

useEffect(() => {
  document.title = `Count: ${counter}`;
}, [counter]);

  return (
    <>
      <div>Count:{counter}</div>
      <div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      </div>
    </>
  )
};

export default App;
