import React from "react";
import { FaAngleDown } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
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
