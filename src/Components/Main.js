import React, { useState } from 'react';
// Component
import Advertise from "./Advertise";
import Qus from "./Qus";
import Footer from "./Footer";
// Image
import plus from "./images/plus.svg";
import cross from "./images/x.svg";


export default function Main() {
  const [icon1, seticon1] = useState(plus);
  const [icon2, seticon2] = useState(plus);
  const [icon3, seticon3] = useState(plus);
  const [icon4, seticon4] = useState(plus);
  const [icon5, seticon5] = useState(plus);
  const [icon6, seticon6] = useState(plus);
  const [mode1, setMode1] = useState("hide");
  const [mode2, setMode2] = useState("hide");
  const [mode3, setMode3] = useState("hide");
  const [mode4, setMode4] = useState("hide");
  const [mode5, setMode5] = useState("hide");
  const [mode6, setMode6] = useState("hide");
  const Modebtn1 = () => {
    if (mode1 === "show1") {
      seticon1(plus);
      setMode1("hide");
    } else {
      seticon1(cross);
      seticon6(plus);
      seticon2(plus);
      seticon3(plus);
      seticon4(plus);
      seticon5(plus);
      setMode1("show1");
      setMode2("hide");
      setMode3("hide");
      setMode4("hide");
      setMode5("hide");
      setMode6("hide");
    }
  };
  const Modebtn2 = () => {
    if (mode2 === "show2") {
      seticon2(plus);
      setMode2("hide");
    } else {
      seticon2(cross);
      seticon6(plus);
      seticon1(plus);
      seticon3(plus);
      seticon4(plus);
      seticon5(plus);
      setMode2("show2");
      setMode1("hide");
      setMode3("hide");
      setMode4("hide");
      setMode5("hide");
      setMode6("hide");
    }
  };
  const Modebtn3 = () => {
    if (mode3 === "show3") {
      seticon3(plus);
      setMode3("hide");
    } else {
      seticon3(cross);
      seticon6(plus);
      seticon1(plus);
      seticon2(plus);
      seticon4(plus);
      seticon5(plus);
      setMode3("show3");
      setMode2("hide");
      setMode1("hide");
      setMode4("hide");
      setMode5("hide");
      setMode6("hide");
    }
  };
  const Modebtn4 = () => {
    if (mode4 === "show4") {
      seticon4(plus);
      setMode4("hide");
    } else {
      seticon4(cross);
      seticon6(plus);
      seticon1(plus);
      seticon2(plus);
      seticon3(plus);
      seticon5(plus);
      setMode4("show4");
      setMode2("hide");
      setMode3("hide");
      setMode1("hide");
      setMode5("hide");
      setMode6("hide");
    }
  };
  const Modebtn5 = () => {
    if (mode5 === "show5") {
      seticon5(plus);
      setMode5("hide");
    } else {
      seticon5(cross);
      seticon6(plus);
      seticon1(plus);
      seticon2(plus);
      seticon3(plus);
      seticon4(plus);
      setMode5("show5");
      setMode2("hide");
      setMode3("hide");
      setMode4("hide");
      setMode1("hide");
      setMode6("hide");
    }
  };
  const Modebtn6 = () => {
    if (mode6 === "show6") {
      seticon6(plus);
      setMode6("hide");
    } else {
      seticon6(cross);
      seticon1(plus);
      seticon2(plus);
      seticon3(plus);
      seticon4(plus);
      seticon5(plus);
      setMode6("show6");
      setMode2("hide");
      setMode3("hide");
      setMode4("hide");
      setMode5("hide");
      setMode1("hide");
    }
  };
  return (
    <section className="Advertising">
      <Advertise />
      <Qus
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
        icon5={icon5}
        icon6={icon6}
        mode1={mode1}
        Modebtn1={Modebtn1}
        mode2={mode2}
        Modebtn2={Modebtn2}
        mode3={mode3}
        Modebtn3={Modebtn3}
        mode4={mode4}
        Modebtn4={Modebtn4}
        mode5={mode5}
        Modebtn5={Modebtn5}
        mode6={mode6}
        Modebtn6={Modebtn6}
      />
      <Footer />
    </section>
  );
}
