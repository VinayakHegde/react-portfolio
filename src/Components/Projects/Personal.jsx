import React from "react";

import { UserProjects } from "Helpers/DataValidator";
import ProjectCard from "Components/Cards/ProjectCard";

const Personal = () => {
  if (UserProjects.length) {
    return UserProjects.map((project, index) => {
      if (project.companyKey) return null;
    return (<ProjectCard
        key={index}
        index={(index + 1).toString()}
        project={project}
        theme="#000">
        <div className="project-header project-company"
          style={{ background: "#000" }}>
          Personal
        </div>
      </ProjectCard>);
    });
  }
  return <span className="no-projects">No projects found!</span>;
}

export default Personal;
