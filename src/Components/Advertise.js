import React from "react";
// images
// import Tv from "./images/tv.png";
// import Mobile from "./images/mobile.jpg";
// import Device from "./images/device.png";
// import Chillden from "./images/childen.png";
// CSS
import "./Css/Main.css";
import "./Css/First.css";
import "./Css/Second.css";

const Advertise = ({ questionApi }) => {
  return (
    <>
        {questionApi.map((curElem) => {
          console.log(curElem)
          return (
            <>
              <section className={curElem.class}>
                <div className="advertise">
                  <section className="text">
                    <h1>{curElem.title}</h1>
                    <h2>
                    {curElem.Description}
                    </h2>
                  </section>
                  <img src={curElem.image} alt={curElem.alt} className="img1" />
                </div>
              </section>
            </>
          );
        })}
    </>
  );
};

export default Advertise;
