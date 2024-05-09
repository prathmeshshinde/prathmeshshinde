import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = ({ aboutSection, goToContact }) => {
  return (
    <section id="about" ref={aboutSection} className="about-container">
      <Fade top>
        <h3>About Me</h3>
      </Fade>
      <div className="aboutme">
        <Zoom>
          <div className="ab-img">
            <img src="/dp.png" alt="dp" />
          </div>
        </Zoom>
        <Fade top cascade>
          <div className="abt-container">
            <p>
              I am beginner front-end developer. I like to code and design
              websites. My journey was started when I was introduced to web
              development for the first time. After that, I started learning
              about the basics of web development(HTML, CSS) and then started
              JavaScript and logic building. After some online courses in
              JavaScript and building some small projects with JavaScript.Then,
              I found out about react.js so I learn react.js and build some
              projects with react. That was a good experience how things work
              and how to build projects from scratch. I love to learn and build
              new things.
            </p>
            <Fade top>
              <div onClick={goToContact} className="lets">
                <button>Let's Talk!</button>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
