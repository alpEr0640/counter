import { useState } from "react";
import CounterValue from "./components/counterValue";
import CounterButtons from "./components/CounterButtons";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CounterValue count={count} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}

export default App;
