import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import Typed from "react-typed";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="my-navbar">
          <Typewriter typeSpeed={150} words={["Shoewear"]} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <Typewriter typeSpeed={150} words={["Account"]} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                {/* <Link activeClass="active" smooth spy to="Items"> */}
                <Typewriter typeSpeed={150} words={["Items"]} />
                {/* </Link> */}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {/* <Link activeClass="active" smooth spy to="Cart"> */}
                <Typewriter typeSpeed={150} words={["Cart"]} />
                {/* </Link>{" "} */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
