import { useState, useEffect } from "react";

const App = () => {
const [counter, setCounter] = useState(0);

function increment() {
  setCounter((_counter) => {
    return _counter + 1;
  })
}

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={increment}>Click here</button>
      </div>
  )
};

export default App;
