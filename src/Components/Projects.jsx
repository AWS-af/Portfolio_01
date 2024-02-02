import React, { useEffect, useState } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Projects() {
  const [width, setWidth] = useState(0);
  const [pro_1, setPro_1] = useState(false);
  const [pro_2, setPro_2] = useState(false);
  const [pro_3, setPro_3] = useState(false);
  const [pro_4, setPro_4] = useState(false);

  function w() {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", w);
  useEffect(() => {
    w();
    return window.removeEventListener("resize", w);
  }, []);
  const decesion = width < 768 ? true : false;
  console.log(pro_1);

  return (
    <section className="projects" id="projects">
      <h2 className="projects_title">Some of My Projects</h2>
      <div className="projects_container">
        <div className="warper">
            <div className="project_card first_project">
              <h3 className="project_header">ToDo App</h3>
              <a href="https://github.com/AWS-af/To-Do-List" className="project_link" target="_blank">a</a>
            </div>
          <div className="project_card second_project">
            <h3 className="project_header">Weather App</h3>
            <a href="https://github.com/AWS-af/Weather-app" className="project_link" target="_blank">a</a>
          </div>
        </div>
        <div className="warper">
          <div className="project_card third_project">
            <h3 className="project_header">Personal Portfolio</h3>
            <a href="https://github.com/AWS-af/Portfolio_01" className="project_link" target="_blank">a</a>
          </div>
          <div className="project_card fourth_project">
            <h3 className="project_header">Discord clone coming soon</h3>
            <a href="https://github.com/AWS-af/Discord-Clone" className="project_link" target="_blank">a</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
