import React from "react";
import Fade from "react-reveal/Fade";

const WhatIDo = () => {
  return (
    <section id="do" className="do">
      <Fade top>
        <h3>What I Do</h3>
      </Fade>
      <Fade bottom>
        <div className="skill">
          <ul>
            <li>
              <img src="/html.png" alt="social" />
            </li>
            <li>
              <img src="/css.png" alt="social" />
            </li>
            <li>
              <img src="/javascript.png" alt="social" />
            </li>
            <li>
              <img src="/tailwind.png" alt="social" />
            </li>
            <li>
              <img src="/react.png" alt="social" />
            </li>
            <li>
              <img src="/git.png" alt="social" />
            </li>
            <li>
              <img src="/github.png" alt="social" />
            </li>
            <li>
              <img src="/figma.png" alt="social" />
            </li>
          </ul>
        </div>
      </Fade>
      <div className="offer">
        <Fade left>
          <div className="web">
            <h5>Web Development</h5>
            <p className="webtext">
              I build websites with the latest technology, <br></br>
              advanced tools, and the best programming <br></br>
              languages. That helps to grow the <br></br>
              businesses and build brands in this <br></br>
              digital age.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="web">
            <h5>UI/UX Designs</h5>
            <p className="webtext">
              I can build best UI/UX designs to attract<br></br>
              customers to your business. You <br></br>
              can improve your User interface and <br></br>
              experience by hiring me. Responsive designs<br></br>
              and brand identity designs and more.<br></br>
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="web">
            <h5>Logo Designs</h5>
            <p className="webtext">
              I can build logos that define your brand <br></br>
              and your product. Build logos that helps<br></br>
              develop your brand's personality and <br></br>
              determine how you want your audience <br></br>
              to percive your company.<br></br>
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WhatIDo;
