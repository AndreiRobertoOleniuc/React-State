import React, { useState } from "react";
import "./App.css";
import Tweet from "./components/Tweet";

function App() {
  const [count, setCount] = useState(0);
  function upCount() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <p>Chick to Increse the Count</p>
      <button onClick={upCount}>Action</button>
      <p>{count}</p>
      <h4>Hello</h4>
    </div>
  );
}

export default App;
