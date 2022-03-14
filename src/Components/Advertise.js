import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// CSS
import "./Css/Main.css";
import "./Css/First.css";
import "./Css/Second.css";

const Advertise = ({ questionApi }) => {
  useEffect(() => {
    Aos.init({
      duration: 1100,
      easing: "ease-in-out",
      mirror: true
    });
  }, []);
  return (
    <>
      {questionApi.map((curElem) => {
        console.log(curElem);
        return (
          <>
            <section className={curElem.class}>
              <div className="advertise">
                <section className="text" data-aos={curElem.Animation}>
                  <h1>{curElem.title}</h1>
                  <h2>{curElem.Description}</h2>
                </section>
                <img
                  src={curElem.image}
                  alt={curElem.alt}
                  className={curElem.class2}
                  data-aos={curElem.Animation2}
                />
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Advertise;
