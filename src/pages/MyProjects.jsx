import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const MyProjects = () => {
  return (
    <section id="project" className="project">
      <Fade top>
        <h3>Projects</h3>
      </Fade>
      <Bounce left>
        <div className="power">
          <div className="animeimg">
            <img src="/posting.png" alt="power" />
          </div>
          <div className="animetext">
            <h7>Posting App</h7>
            <p>
              This App connects users. Users can comment on each other's posts
              and like and bookmark their favorite posts. The owner of the post
              can delete unnecessary comments from the comments section.The user
              can edit and update their posts. The user can also update their
              Profile image, Username, and Bio.
            </p>
            <a
              href="https://posting-web.vercel.app/"
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
              power depend on the countries Army, Navy and Air Force.Power Index
              App is built by using React.js and Firebase.
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
            <img src="/covidtracker.png" alt="covidtracker" />
          </div>
          <div className="animetext">
            <h7>CovidTracker</h7>
            <p>
              The shows a total covid cases, recovered and deaths because of the
              coronavirus. CovidTracker is build using React.js, HTML, CSS.
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
      <Bounce left>
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
      <Bounce right>
        <div className="todo">
          <div className="animeimg">
            <img src="/todoapp.png" alt="img" />
          </div>
          <div className="animetext">
            <h7>TODO-APP</h7>
            <p>
              Todo-App is for organizing your work and differentiate between
              complete and incomplete work. Todo-App is built by using React.js
              and Firebase.
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
  );
};

export default MyProjects;
