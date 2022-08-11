import React from "react"

import { STRINGS } from "../scripts/constants"

function Footer() {
  return (
    <div className="footer">
      <div>
        <h1 style={{ paddingTop: "10px" }}>{STRINGS.shoeWear}</h1>
      </div>
      <div className="footer__item">Contact Us</div>
      <div className="footer__item">About</div>
      <div className="footer__item">
        Follow us on:
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  )
}
export default Footer
