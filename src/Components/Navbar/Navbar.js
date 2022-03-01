import React from "react";
import logo from "./images/logo.png";
import language from "./images/language.png";
import Line from "../line/Line.js";
import "./Navbar.css";

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
      <main>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <span className="email_con">
          <input type="text" id="email" placeholder="Email address" />
          <span className="btn">Get Started &#62; </span>
        </span>
      </main>
    </header>
    <Line />
    </>
  );
}
