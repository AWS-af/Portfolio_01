import React from "react";
import { FaAngleDown, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero_container">
        <div className="hero_info">
          <h1 className="hero_info_title">
            Hi, I'm
            <br />
            Abdul Wali Siddiqui
          </h1>
          <p className="hero_info_bio">
            A React.js Developer with some knowledge of Designing. I love
            crafting innovative websites and exploring the endless possibilities
            of the digital realm.
          </p>
          <div className="hero_social">
            <span className="hero_social_git">
              <a href="https://github.com/AWS-af" className="hero_social_git_anchor">
                <FaGithub />
              </a>
            </span>
            <span className="hero_social_linked">
              <a href="https://linkedin.com/in/ab-siddiqui-b90392270" className="hero_social_linked_anchor">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div className="hero_pic" />
      </div>
      <div className="hero_down_arrow">
        <FaAngleDown />
      </div>
    </section>
  );
}

export default Hero;
