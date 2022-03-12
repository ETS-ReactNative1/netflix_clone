import React from "react";
import logo from "./images/logo.png";
import language from "./images/lang1.svg";
import HeaderMain from "./HeaderMain";
import "./Css/Header.css";

export default function Header() {
  return (
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
      <HeaderMain />
    </header>
  );
}
