import React, { Component } from "react";

import { UserProjects } from "../../Helpers/DataValidator";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

class Personal extends Component {
  render() {
    return <div>{this.getProjectCards()}</div>;
  }
  getProjectCards() {
    if (!UserProjects.length) {
      return <span className="no-projects">No projects found!</span>;
    }

    return UserProjects.map((project, index) => {
      if (project.companyKey) return null;
      return (
        <ProjectCard
          key={index + 1}
          index={(index + 1).toString()}
          project={project}
          theme="#000"
        >
          <div
            className="project-header project-company"
            style={{ background: "#000" }}
          >
            Personal
          </div>
        </ProjectCard>
      );
    });
  }
}

export default Personal;
