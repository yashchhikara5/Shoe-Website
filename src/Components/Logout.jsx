import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
function Logout() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  function LoggedOff(event) {
    event.preventDefault();
    dispatch(logout());
  }
  <div>
    <h1>
      Welcome<span>{user.name}</span>
    </h1>
    <button onClick={LoggedOff}>Logout</button>
  </div>;
}
export default Logout;
