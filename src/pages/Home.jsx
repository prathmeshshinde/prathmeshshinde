import React from "react";
import Fade from "react-reveal/Fade";

const Home = ({ goToAbout, goToContact }) => {
  return (
    <section id="home" className="hero">
      <Fade left>
        <div className="left">
          <p className="hello">Hello, I am</p>
          <h2>
            {" "}
            Prathmesh <span>Shinde</span>
          </h2>
          <h4>Front-end Web Developer</h4>
          <p>
            I build websites that help small businesses to grow and build their
            brands with my development skills and knowledge.
          </p>

          <div className="mobile">
            <div className="btn">
              <button onClick={goToContact}>Let's Talk!</button>
              <button className="about" onClick={goToAbout}>
                About
              </button>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/prathmesh-shinde-56920b1b9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/link.png" alt="social" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/prathmeshshinde"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/github.png" alt="social" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discords.com/bio/p/prathmesh1008"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/discord.png" alt="social" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Prathmesh_1008"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/twitter.png" alt="social" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="right">
          <img src="/gp.png" alt="social" />
        </div>
      </Fade>
    </section>
  );
};

export default Home;
