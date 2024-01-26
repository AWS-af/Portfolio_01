import React from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

function AboutMe() {
  return (
    <section className="about">
      <div className="about_container">
        <div className="about_info">
          <h2 className="about_header">About Me</h2>
          <p className="about_bio">
            Hello again!, I am a self-taught front-end developer and BCS student
            from Afghanistan, passionate about coding to enhance the
            professionalism and aesthetics of my projects.
          </p>
          <p className="about_bio">
            Outside of the coding realm, i enjoy a diverse range of hobbies,
            including watching anime, playing games, and reading books.
          </p>
        </div>
        <div className="about_skills">
          <h2 className="skills_header">My Skills</h2>
          <div className="skills_container">
            <span className="my_skill">
              <FaHtml5 />
              <span>HTML5</span>
            </span>
            <span className="my_skill">
              <FaCss3Alt />
              <span>CSS3</span>
            </span>
            <span className="my_skill">
              <DiJavascript />
              <span>Javascript</span>
            </span>
            <span className="my_skill">
              <SiTailwindcss />
              <span>Tailwind</span>
            </span>
            <span className="my_skill">
              <FaSass />
              <span>SASS</span>
            </span>
            <span className="my_skill">
              <FaReact />
              <span>Reac.js</span>
            </span>
            <span className="my_skill">
              <FaGitAlt />
              <span>Git</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
