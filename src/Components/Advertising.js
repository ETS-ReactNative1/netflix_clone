import React from "react";
import Tv from "./images/tv.png";
import Mobile from "./images/mobile.jpg";
import "./Css/Advertising.css";

export default function Advertising() {
  return (
    <section className="Advertising">
      {/* first */}
      <section className="first">
        <div className="container">
          <section className="text">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </section>
          <img src={Tv} alt="Tv" className="Tv" />
        </div>
      </section>
      {/* second */}
      <section className="second">
        <div className="container">
          <section className="text">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </section>
          <img src={Mobile} alt="Tv" className="Mobile" />
        </div>
      </section>
      {/* <section className="third">
        <div>d</div>
      </section>
      <section className="fourth">
        <div>f</div>
      </section> */}
    </section>
  );
}
