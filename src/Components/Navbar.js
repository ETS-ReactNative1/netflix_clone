import React from "react";
import logo from "./images/logo.png";
import language from "./images/language.png";
import Line from "./Line";
import NavbarMain from "./NavbarMain";
import "./Css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="logo" className="logo" />
          <span className="right">
            <span className="btn1">
              <img src={language} alt="language" className="language_icon" />
              <select name="language" className="language_text">
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </span>
            <input type="button" value="Sign in" className="btn2" />
          </span>
        </nav>
        <NavbarMain />
      </header>
      <Line />/
    </>
  );
}
