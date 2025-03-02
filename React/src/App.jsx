import { useState, useEffect } from "react";

const App = () => {
const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Count:{counter}</p>
      </div>
  )
};

export default App;
