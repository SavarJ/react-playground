import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.userIsRegisterd && (
        <Input type="password" placeholder="Re Enter Password" />
      )}
      <button type="submit">
        {props.userIsRegisterd ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;
