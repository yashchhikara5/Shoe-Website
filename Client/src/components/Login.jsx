import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [data, setData] = useState({
    username: "",
    Password: "",
  });
  const Navigate = useNavigate();
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
    console.log("Heelo")
    Navigate("/");
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
            <button className="Register" type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="login">
            Don't have an account?
            <p onClick={handleLogin}>
              <Link to="/account" style={{ textDecoration: "none" }}>
                Register
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
