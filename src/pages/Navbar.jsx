import React from "react";
import Fade from "react-reveal/Fade";
import Home from "./Home";

const Navbar = ({ show, setShow, goToAbout, goToContact }) => {
  return (
    <div className="notion">
      <Fade top>
        <section className="navigation">
          <h1>
            <a href="#home">Prathmesh Shinde</a>
          </h1>
          <button onClick={() => setShow(!show)} className="ham">
            {show ? (
              <img src="/close.png" alt="social" />
            ) : (
              <img src="/ham.png" alt="social" />
            )}
          </button>
          <ul className="nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#do">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {show ? (
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#do">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          ) : null}
        </section>
      </Fade>
      <Home goToAbout={goToAbout} goToContact={goToContact} />
    </div>
  );
};

export default Navbar;
