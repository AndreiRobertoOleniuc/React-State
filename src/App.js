import React, { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);

  function addPerson() {
    setPerson(...person, "Andrei");
  }
  return (
    <div className="App">
      <button onClick={addPerson}>Dies sind alle Personen {person}</button>
    </div>
  );
}

export default App;
