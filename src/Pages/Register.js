import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import { handleErrors } from "./Login";
import axios from "../API/axios";


const REGISTER_URL = '/api/v1/auth/register';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate('');

  const register = async (e) => {
    e.preventDefault();
    // fetch(`http://localhost:3000/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    //   .then(handleErrors)
    //   .then(() => {
    //     //setCredentials
    //     setUsername({
    //       username,
    //       password,
    //     });
    //     history.push("/");
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   });


    try {
      const response = await axios.post(
        REGISTER_URL,
        { email: username, password: password },
        {
          headers: { "Content-Type": "application/json" },

        }
      );
      localStorage.setItem("token", response.data.token.accessToken);
      navigate('/');

      setUsername('');
      setPassword('');
      setError('');

    } catch (err) {
    }
  };

  // const history = useNavigate();

  return (
    <div>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={register}>
        <div className="top">
          <p className="proname">Todos</p>
        </div>
        <div className="container">
          <div className="content">
            <div className="topic">
              <lable id="title"><strong>Register for free</strong></lable>
              <div id="main" align="center">
                <input id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="username"
                />
                <input id="pass"
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="password"
                />
                <input
                  type="password"
                  onChange={(e) => setError(e.target.value)}
                  value={error}
                  placeholder="Confirm password"
                />
                <div>
                  <button id="button" type="submit"><b>Register</b></button>
                </div>
                <div className="direct">
                  <NavLink to={"/"}>Have an account?Login now </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}