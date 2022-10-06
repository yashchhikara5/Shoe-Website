import React, { useState } from "react";
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
  return (
    <div>
      <h1 className="text-center Login">Login Here</h1>
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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Account;
