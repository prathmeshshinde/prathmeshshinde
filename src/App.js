import React, { useRef, useState } from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

function App() {
  const [show, setShow] = useState(false);

  const aboutSection = useRef(null);

  const contactSection = useRef(null);

  const gotoabout = () =>
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });

  const gotocontact = () =>
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div className="App">
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
                I build websites that help small businesses to grow and build
                their brands with my development skills and knowledge.
              </p>

              <div className="mobile">
                <div className="btn">
                  <button onClick={gotocontact}>Let's Talk!</button>
                  <button className="about" onClick={gotoabout}>
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
      </div>

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
                digital age. <br></br>
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
                JavaScript and building some small projects with
                JavaScript.Then, I found out about react.js so I learn react.js
                and build some projects with react. That was a good experience
                how things work and how to build projects from scratch. I love
                to learn and build new things.
              </p>
              <Fade top>
                <div onClick={gotocontact} className="lets">
                  <button>Let's Talk!</button>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </section>

      <section id="project" className="project">
        <Fade top>
          <h3>Projects</h3>
        </Fade>
        <Bounce right>
          <div className="power">
            <div className="animeimg">
              <img src="/anify.png" alt="power" />
            </div>
            <div className="animetext">
              <h7>Anify App</h7>
              <p>
                Anify is app that allows anime lover to make spotify playlist
                based on their favourite animes. Anify webapp is built with
                React.js, spotify APIs and Tailwind CSS.
              </p>
              <a
                href="https://anify-anime.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce>
        <Bounce left>
          <div className="power">
            <div className="animeimg">
              <img src="/power.png" alt="power" />
            </div>
            <div className="animetext">
              <h7>POWER INDEX</h7>
              <p>
                It is a system that allows users to check for various countries
                power depend on the countries Army, Navy and Air Force.Power
                Index App is built by using React.js and Firebase.
              </p>
              <a
                href="https://powerindex-cf70b.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce>
        <Bounce right>
          <div className="power">
            <div className="animeimg">
              <img src="/posting.png" alt="posting" />
            </div>
            <div className="animetext">
              <h7>Posting</h7>
              <p>
                This website is called Posting. We can post our thoughts and
                like and bookmark other posts Posting is built by using
                Tailwind.css, React.js and Firebase.
              </p>
              <a
                href="https://posting-ps.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce>
        {/* <Bounce right>
          <div className="power">
            <div className="animeimg">
              <img src="/amazonclone.png" />
            </div>
            <div className="animetext">
              <h7>Amazon Clone</h7>
              <p>
                This website is amazon clone. We can see the products listed on
                the website, add the product to the cart, choose quantity of the
                product, and then we can proceed to checkout.
              </p>
              <a href="https://clone-aug10.netlify.app/" target="_blank">
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce> */}
        <Bounce right>
          <div className="power">
            <div className="animeimg">
              <img src="/covidtracker.png" alt="covidtracker" />
            </div>
            <div className="animetext">
              <h7>CovidTracker</h7>
              <p>
                The shows a total covid cases, recovered and deaths because of
                the coronavirus. CovidTracker is build using React.js, HTML,
                CSS.
              </p>
              <a
                href="https://covidtracker-beta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce>

        <Bounce right>
          <div className="anime">
            <div className="animeimg">
              <img src="/anime.png" alt="anime" />
            </div>
            <div className="animetext">
              <h7>ANIMEDORO</h7>
              <p>
                Animedoro is an anime version of pomodoro to work and watch one
                anime episode as a break. Animedoro is built by using HTML, CSS
                and React.js.
              </p>
              <a
                href="https://animedoro-ps.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce>
        <Bounce left>
          <div className="todo">
            <div className="animeimg">
              <img src="/todoapp.png" alt="img" />
            </div>
            <div className="animetext">
              <h7>TODO-APP</h7>
              <p>
                Todo-App is for organizing your work and differentiate between
                complete and incomplete work. Todo-App is built by using
                React.js and Firebase.
              </p>
              <a
                href="https://todo-5cdc9.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="probtn">Live Website</button>
              </a>
            </div>
          </div>
        </Bounce>
      </section>

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
    </div>
  );
}

export default App;
