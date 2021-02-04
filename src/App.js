import React from "react";
import "./style.css";

function App() {
  function Login() {
    return <h2>Welcome to Login</h2>;
  }

  function Employee() {
    return <h2>Inside Employee</h2>;
  }

  return <div><Login/>< Employee/></div>;
}

export default App;
