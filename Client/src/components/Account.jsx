import React, { useState, useEffect } from "react";
import axios from "axios";
function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  function changeName(event) {
    setName(event.target.value);
  }
  function changeEmail(event) {
    setEmail(event.target.value);
  }
  function changePassword(event) {
    setPassword(event.target.value);
  }
  function handleChange(event) {
    event.preventDefault();
  }
  const handleClick = async () => {
    const getback = await axios.get("/register");
    console.log("hello");
  };
  function handleLogin() {
    console.log("login");
  }
  return (
    <div>
      <h1 className="text-center Login">Register Here</h1>
      <div className="account">
        <form className="form" onSubmit={handleChange}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={changeName}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={changePassword}
          />
          <div className="button_align">
            <button className="Register" type="submit" onClick={handleClick}>
              Register
            </button>
          </div>
          <div className="login">
            Already have an account?<p onClick={handleLogin}> Login</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Account;
