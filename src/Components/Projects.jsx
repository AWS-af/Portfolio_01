import React, { useEffect, useState } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass, FaTimes } from "react-icons/fa";

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

  return (
    <section className="projects" id="projects">
      <h3 className="projects_title">Some of My Projects</h3>
      <div className="projects_container">
        <div className="warper">
          <div
            className="project_card first_project"
            onClick={() => (decesion ? setPro_1((prev) => !prev) : null)}
          >
            <div
              className={
                pro_1 ? "project_info_click project_info" : "project_info"
              }
            >
              <h3 className="project_title">Title</h3>
              <p className="project_bio">
                Some information about the project i did.
              </p>
              <div className="project_languages">
                <span>
                  <RiJavascriptFill />
                </span>
                <span>
                  <FaSass />
                </span>
                <span>
                  <FaReact />
                </span>
              </div>
            </div>
          </div>
          <div
            className="project_card second_project"
            onClick={() => (decesion ? setPro_2((prev) => !prev) : null)}
          >
            <div
              className={
                pro_2 ? "project_info_click project_info" : "project_info"
              }
            >
              <h3 className="project_title">Title</h3>
              <p className="project_bio">
                Some information about the project i did.
              </p>
              <div className="project_languages">
                <span>
                  <RiJavascriptFill />
                </span>
                <span>
                  <FaSass />
                </span>
                <span>
                  <FaReact />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="warper">
          <div
            className="project_card third_project"
            onClick={() => (decesion ? setPro_3((prev) => !prev) : null)}
          >
            <div
              className={
                pro_3 ? "project_info_click project_info" : "project_info"
              }
            >
              <h3 className="project_title">Title</h3>
              <p className="project_bio">
                Some information about the project i did.
              </p>
              <div className="project_languages">
                <span>
                  <RiJavascriptFill />
                </span>
                <span>
                  <FaSass />
                </span>
                <span>
                  <FaReact />
                </span>
              </div>
            </div>
          </div>
          <div
            className="project_card fourth_project"
            onClick={() => (decesion ? setPro_4((prev) => !prev) : null)}
          >
            <div
              className={
                pro_4 ? "project_info_click project_info" : "project_info"
              }
            >
              <h3 className="project_title">Title</h3>
              <p className="project_bio">
                Some information about the project i did.
              </p>
              <div className="project_languages">
                <span>
                  <RiJavascriptFill />
                </span>
                <span>
                  <FaSass />
                </span>
                <span>
                  <FaReact />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
