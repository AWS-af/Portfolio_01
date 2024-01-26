import React, { useEffect, useState } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass } from "react-icons/fa";

function Projects() {

  const [click, setClick] = useState(false);
  function clicking(){
    setClick(prev => !prev);
  }
  useEffect(()=>{
    clicking();
  },[])


  return (
    <section className="projects" id="projects">
      <h3 className="projects_title">Some of My Projects</h3>
      <div className="projects_container">
        <div className="warper">
          <div className="project_card first_project">
            <div className="project_info">
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
          <div className="project_card second_project">
            <div className="project_info">
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
          <div className="project_card third_project">
            <div className="project_info">
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
          <div className="project_card fourth_project">
            <div className="project_info">
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
