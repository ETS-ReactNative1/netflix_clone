import React, { useEffect } from "react";
import "./Css/Question.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Qus = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1100,
      easing: "ease-in-out",
      mirror: true
    });
  }, []);
  return (
      <section className="Qus">
        <div className="info">
          <h1 data-uia="faq-title" data-aos="zoom-in">Frequently Asked Questions</h1>
          <ul>
          {/* first */}
            <li>
              <p onClick={props.Modebtn1} data-aos="zoom-in">
                What is Netflix? <img src={props.icon1} alt="plus" className="icon" />
              </p>
              <ul id={props.mode1}>
                <li>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. <br /> <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </li>
              </ul>
            </li>
            {/* second */}
            <li>
            <p onClick={props.Modebtn2} data-aos="zoom-in">
                How much does Netflix cost?
                <img src={props.icon2} alt="plus" className="icon" />
              </p>
              <ul id={props.mode2}>
                <li>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </li>
              </ul>
            </li>
            {/* Third */}
            <li>
            <p onClick={props.Modebtn3} data-aos="zoom-in">
                Where can I watch?
                <img src={props.icon3} alt="plus" className="icon" />
              </p>
              <ul id={props.mode3}>
                <li>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. <br /> <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </li>
              </ul>
            </li>
            {/* Forth */}
            <li>
            <p onClick={props.Modebtn4} data-aos="zoom-in">
                How do I cancel? <img src={props.icon4} alt="plus" className="icon" />
              </p>
              <ul id={props.mode4}>
                <li>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </li>
              </ul>
            </li>
            {/* Fiveth */}
            <li>
            <p onClick={props.Modebtn5} data-aos="zoom-in">
                What can I watch on Netflix?
                <img src={props.icon5} alt="plus" className="icon" />
              </p>
              <ul id={props.mode5}>
                <li>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </li>
              </ul>
            </li>
            {/* Sixth */}
            <li>
            <p onClick={props.Modebtn6} data-aos="zoom-in">
                Is Netflix good for kids?
                <img src={props.icon6} alt="plus" className="icon" />
              </p>
              <ul id={props.mode6}>
                <li>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see. <br />
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </li>
              </ul>
            </li>
          </ul>
          <h3 data-aos="zoom-in">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <span className="email_con" data-aos="zoom-in">
            <input type="text" id="email" placeholder="Email address" />
            <span className="btn">Get Started &#62; </span>
          </span>
        </div>
      </section>
  )
}

export default Qus
