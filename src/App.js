import React, { useRef, useState } from "react";
import "./App.css";
import WhatIDo from "./pages/WhatIDo";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";

function App() {
  const [show, setShow] = useState(false);

  const aboutSection = useRef(null);

  const contactSection = useRef(null);

  const goToAbout = () =>
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToContact = () =>
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div className="App">
      <Navbar
        goToAbout={goToAbout}
        goToContact={goToContact}
        show={show}
        setShow={setShow}
      />
      <WhatIDo />
      <About aboutSection={aboutSection} goToContact={goToContact} />
      <MyProjects />
      <Contact contactSection={contactSection} />
    </div>
  );
}

export default App;
