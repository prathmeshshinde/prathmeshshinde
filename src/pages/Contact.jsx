import React from "react";
import Fade from "react-reveal/Fade";

const Contact = ({ contactSection }) => {
  return (
    <section id="contact" ref={contactSection} className="contact">
      <div className="foot">
        <Fade top>
          <h3>Get In Touch</h3>
        </Fade>
        <Fade top>
          <div className="us">
            <a href="mailto: prathmeshshinde105@gmail.com.com">
              <div className="mail">
                <h8>Email</h8>
                <p className="email">prathmeshshinde105@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/prathmesh-shinde-56920b1b9/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mail">
                <h8>LinkedIn</h8>
                <p className="email">Prathmesh Shinde</p>
              </div>
            </a>
          </div>
        </Fade>
      </div>
      <div className="footer">
        <h6>Prathmesh Shinde</h6>
        <p className="front-end">Front-end web developer</p>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#do">Services</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="last">
          <div className="foot-social">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/prathmesh-shinde-56920b1b9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/link.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/prathmeshshinde"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/github.png" alt="github" />
                </a>
              </li>
              <li>
                <a
                  href="https://discords.com/bio/p/prathmesh1008"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/discord.png" alt="discord" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Prathmesh_1008"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/twitter.png" alt="twitter" />
                </a>
              </li>
            </ul>
          </div>

          <p className="copy">
            Prathmesh Shinde © Copyright 2021. All Right Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
