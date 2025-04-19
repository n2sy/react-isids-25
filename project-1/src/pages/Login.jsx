import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../store/LoginContext";

function Login() {
  const [showRegister, setShowRegister] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  let navigate = useNavigate();
  let logCtx = useContext(LoginContext);

  function submitHandler(e) {
    e.preventDefault();
    if (showRegister) {
      let user = {
        email: emailValue,
        username: usernameValue,
        password: pwdValue,
      };
      axios
        .post("http://localhost:3000/auth/register", user)
        .then((res) => {
          alert("Registred ! Please log in...");
          setShowRegister(false);
          //setEmailValue("")
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let user = {
        identifiant: emailValue,
        password: pwdValue,
      };
      axios
        .post("http://localhost:3000/auth/login", user)
        .then((res) => {
          alert(res.data.message);
          logCtx.seConnecter(res.data.role);
          localStorage.setItem("token", res.data["access_token"]);
          navigate("/all");
          //setEmailValue("")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>{showRegister ? "Email" : "Login"}</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
        />
      </div>
      {showRegister && (
        <div className={classes.control}>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameValue(e.target.value);
            }}
          />
        </div>
      )}
      <div className={classes.control}>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPwdValue(e.target.value);
          }}
        />
      </div>
      <div className={classes.actions}>
        {showRegister && <button>Register</button>}
      </div>
      <div className={classes.actions}>
        {showRegister && (
          <button onClick={() => setShowRegister((previous) => !previous)}>
            Switch to Login
          </button>
        )}
      </div>
      <div className={classes.actions}>
        {!showRegister && <button>Login</button>}
      </div>
      <div className={classes.actions}>
        {!showRegister && (
          <button onClick={() => setShowRegister((previous) => !previous)}>
            Switch to Register
          </button>
        )}
      </div>
    </form>
  );
}

export default Login;
