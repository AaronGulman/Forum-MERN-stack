import React, { useState } from "react";
import style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const REGISTRATION = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/test-db", { username, password ,email })
      .then(
	(res) =>{ 
	console.log("Success");
	navigate("/dashboard");
	})
      .catch((error) => {
        setError("Username already exist! Please choose another username");
      });
  };

  return (
    <form onSubmit={REGISTRATION} className={style.regForm}>
      <h1>Registration</h1>
      <input
        type="text"
        name="login"
        id="login"
        placeholder="Username..."
        value={username}
	onChange={(e) => setUsername(e.target.value)}
      />
        <input
        type="email"
        name="email"
        id="email"
        placeholder="Email..."
        value={email}
	onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password..."
        value={password}
	onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Register" />
      {error && <p>{error}</p>}
    </form>
  );
}

export default SignUp;
