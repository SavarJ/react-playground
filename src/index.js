import React from "react";
import ReactDOM from "react-dom";

// * Change this line below to view a different project
// import App from "./emojipedia/components/App";
// import App from "./login/components/App";
// import App from "./clock/components/App";
import App from "./todolist/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
