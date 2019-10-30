import React, { Component } from "react";

import { UserProjects, UserExperiences } from "../../Helpers/DataValidator";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

class Work extends Component {
  render() {
    return <div>{this.getProjectCards()}</div>;
  }
  getProjectCards() {
    if (!UserProjects.length)
      return <span className="no-projects">No projects found!</span>;
    return UserProjects.map((project, index) => {
      if (!project.companyKey) return null;
      const options = this.getOptions(project.companyKey);
      return (
        <ProjectCard
          key={index + 1}
          index={(index + 1).toString()}
          project={project}
          theme={options.theme}
        >
          <div
            className="project-header project-company"
            style={{ background: `${options.theme}` }}
          >
            {options.company}
          </div>
        </ProjectCard>
      );
    });
  }

  getOptions(companyKey) {
    const experience = UserExperiences.find(function(exp) {
      return exp.misc.key === companyKey;
    });

    return {
      company: experience ? experience.company : "",
      theme: experience ? experience.misc.theme : "#000"
    };
  }
}

export default Work;
