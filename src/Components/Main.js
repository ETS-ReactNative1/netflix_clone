import React from "react";
// images
import Tv from "./images/tv.png";
import Mobile from "./images/mobile.jpg";
import Device from "./images/device.png";
import Chillden from "./images/childen.png";
import plus from "./images/plus.svg";
// css
import "./Css/Main.css";
import "./Css/First.css";
import "./Css/Second.css";
import "./Css/Question.css";

export default function Main() {
  return (
    <section className="Advertising">
      {/* first */}
      <section className="first">
        <div className="advertise">
          <section className="text">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </section>
          <img src={Tv} alt="Tv" className="img1" />
        </div>
      </section>
      {/* second */}
      <section className="second">
        <div className="advertise">
          <section className="text">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </section>
          <img src={Mobile} alt="Tv" className="img2" />
        </div>
      </section>
      {/* third */}
      <section className="first">
        <div className="advertise">
          <section className="text">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </section>
          <img src={Device} alt="Tv" className="img1" />
        </div>
      </section>
      {/* fourth */}
      <section className="second">
        <div className="advertise">
          <section className="text">
            <h1>Create profiles for children.</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </section>
          <img src={Chillden} alt="Tv" className="img2" />
        </div>
      </section>
      {/* Questions */}
      <section className="Qus">
        <div className="info">
          <h1 data-uia="faq-title">Frequently Asked Questions</h1>
          <ul>
            <li>
              What is Netflix? <img src={plus} alt="plus" className="icon" />
            </li>
            <li>
              How much does Netflix cost?
              <img src={plus} alt="plus" className="icon" />
            </li>
            <li>
              Where can I watch? <img src={plus} alt="plus" className="icon" />
            </li>
            <li>
              How do I cancel? <img src={plus} alt="plus" className="icon" />
            </li>
            <li>
              What can I watch on Netflix?
              <img src={plus} alt="plus" className="icon" />
            </li>
            <li>
              Is Netflix good for kids?
              <img src={plus} alt="plus" className="icon" />
            </li>
          </ul>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <span className="email_con">
            <input type="text" id="email" placeholder="Email address" />
            <span className="btn">Get Started &#62; </span>
          </span>
        </div>
      </section>
    </section>
  );
}
