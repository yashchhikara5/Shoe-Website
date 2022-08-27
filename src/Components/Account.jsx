import React from "react";
var userIsRegistered = false;
function Account() {
  return (
    <div className="account">
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!userIsRegistered && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <div className="button_align">
          <button type="submit">
            {userIsRegistered ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Account;
