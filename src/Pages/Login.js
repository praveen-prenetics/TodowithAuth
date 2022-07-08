import React, { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom'
import axios from "../API/axios";


const LOGIN_URL = '/api/v1/auth/login';

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [setUserError] = useState('');
  const navigate = useNavigate('');
  const [setPwdError] = useState('');



  const submit = async (e) => {
    e.preventDefault('');
    if (!username) {
      setUserError("Please add your username")
      return;
    } else if (!password) {
      setPwdError("Please add your password")
      return;
    }


    try {

      const response = await axios.post(
        LOGIN_URL,
        { email: username, password: password },
        {
          headers: { "Content-Type": "application/json" },

        }
      );
      localStorage.setItem("token", response.data.token.accessToken);
      // navigate('/todo');
      setUsername('');
      setPassword('');
      navigate('/Main')
    } catch (err) {


    }
  }

  return (
    <div>
      <form onClick={ submit }>
        <div className="top">
          <div><p className="proname">Todos</p></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="topic">
              <lable id="title"><strong>Sign in</strong></lable>
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
                <div>
                  <button type="submit" id="button"><b>Sign in</b></button>
                </div>
                <div className="direct">
                  <NavLink to={"/register"}>New here? Register now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

}









  // const login = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3000/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password, 
  //     }),
  //   })
  // };
