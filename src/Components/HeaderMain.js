import React from "react";
import "./Css/HeaderMain.css";

export default function NavbarMain() {
  return (
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
  );
}
