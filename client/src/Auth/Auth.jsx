import React, { useState, useEffect } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const REGISTRATION = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/register", { username, password })
      .then((res) => console.log("Success"), navigate("/dashboard"))
      .catch((error) => {
        setError("Username already exist! Please choose another username");
      });
  };

  return (
    <form action={REGISTRATION} className={style.regForm}>
      <h1>Registration</h1>
      <input
        type="text"
        name="login"
        id="login"
        placeholder="Username..."
        value={username}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password..."
        value={password}
      />
      <input type="submit" value="Register" />
    </form>
  );
}

export default Auth;
