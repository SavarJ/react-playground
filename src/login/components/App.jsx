import React from "react";
import Form from "./Form";

let userIsRegisterd = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegisterd={userIsRegisterd} />
    </div>
  );
}

export default App;
