import React from "react";
import { UserProjects, UserExperiences } from "Helpers/DataValidator";
import ProjectCard from "Components/Cards/ProjectCard";

const Work = () => {
  if (UserProjects.length) {
    return UserProjects.map((project, index) => {
      if (!project.companyKey) return null;
      const experience = UserExperiences.find(
        exp => exp.misc.key === project.companyKey
      );
      const options = experience
        ? {
            company: experience.company || "",
            theme: experience.misc.theme || "#000"
          }
        : {
            company: "",
            theme: "#000"
          };
      return (
        <ProjectCard
          key={index}
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
  return <span className="no-projects">No projects found!</span>;
};

export default Work;
