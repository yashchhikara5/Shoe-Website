import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";
function Account() {
  const [data, setData] = useState({
    username: "",
    email: "",
    Password: "",
  });
  const handleinput = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleChange = async (event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:7000/api/user/Register";
      const { data: res } = await axios.post(url, data);
      Navigate("/Login");
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
  return (
    <div>
      <h1 className="text-center Login">Register Here</h1>
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
            type="email"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleinput}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.Password}
            name="Password"
            onChange={handleinput}
          />
          {error && <div>Error</div>}
          <div className="button_align">
            <button className="Register" type="submit">
              Register
            </button>
          </div>
          <div className="login">
            Already have an account?
            <p>
              {" "}
              <Link to="/Login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
