import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"

import { ROUTES, STRINGS } from "../scripts/constants"

function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" id="my-navbar" to={ROUTES.home.path}>
          <Typewriter typeSpeed={150} words={[STRINGS.shoeWear]} />
        </Link>
        {/* <span className="navbar-brand" href="#" id="my-navbar">
        </span> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === ROUTES.products.path ? "active" : ""
                }`}
                to={ROUTES.products.path}
              >
                {ROUTES.products.title}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === ROUTES.cart.path ? "active" : ""
                }`}
                to={ROUTES.cart.path}
              >
                {ROUTES.cart.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
