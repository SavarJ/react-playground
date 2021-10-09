import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  function getDate() {
    setTime(new Date().toLocaleDateString());
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getDate}>Get Date</button>
    </div>
  );
}

export default App;
