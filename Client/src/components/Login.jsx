import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [data, setData] = useState({
    username: "",
    Password: "",
  });
  const handleinput = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const handleChange = async (event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:7000/api/user/login";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.message);
      }
    }
  };
  function handleLogin() {
    console.log("Register");
  }
  return (
    <div>
      <h1 className="text-center Login">Login Here</h1>
      <div className="account">
        <form className="form" onSubmit={handleChange}>
          <input
            type="text"
            placeholder="Username"
            value={data.username}
            name="username"
            onChange={handleinput}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.Password}
            name="Password"
            onChange={handleinput}
          />
          {error && <div>{error}</div>}
          <div className="button_align">
            <button className="Register" type="submit">
              Login
            </button>
          </div>
          <div className="login">
            Don't have an account?<p onClick={handleLogin}> Register</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
