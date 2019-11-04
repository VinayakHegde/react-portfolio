import React, {useState} from "react";

import Work from "./Work";
import Personal from "./Personal";
import { PROJECTSTYPE } from "Helpers/Enums";

import "./Projects.scss";

const Projects = () => {
  const [type, setType] = useState(PROJECTSTYPE.WORK);

  return (<article className="profile-content">
    <div className="toolbar">
      <span onClick={() => setType(PROJECTSTYPE.WORK)}
        className={`toolbar-button ${type === PROJECTSTYPE.WORK ? "active" : ""}`}>
        Work
      </span>
      <span onClick={() => setType(PROJECTSTYPE.PERSONAL)}
        className={`toolbar-button ${type === PROJECTSTYPE.PERSONAL ? "active" : ""}`}>
        Personal
      </span>
    </div>
    <div className="content-wrapper">
      {(type === PROJECTSTYPE.WORK) && <Work />}
      {(type === PROJECTSTYPE.PERSONAL) && <Personal />}
    </div>
  </article>);
};

export default Projects;
