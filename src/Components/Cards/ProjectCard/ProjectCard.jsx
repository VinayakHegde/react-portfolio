import React from "react";
import PropTypes from "prop-types";

import Description from "Components/Description";
import AnimatedVisibility from "Components/AnimatedVisibility";
import Button from "Components/Button";
import { ICONTYPE } from "Helpers/Enums";
import Tags from "Components/Tags";
import useCssClass from 'hooks/useCssClass';

import "./ProjectCard.scss";

const getProjectTitle = (project, className, key, theme) => {
  if (project.title.length && project.startDate.length) {
    const d1 = ` - ${project.isPresent ? "Present" : project.endDate}`;
    return (
      <div className={className} key={key} style={{ background: `${theme}` }}>
        {project.title}
        <small className="project__duration">
          {` (${project.startDate}${project.companyKey ? d1 : ""})`}
        </small>
      </div>
    );
  }

  return null;
};

const ProjectCard = ({ project, theme, children, index }) => {
  const [cssClass, setCssClass] = useCssClass();

  return (
    <AnimatedVisibility {...{setCssClass}}>
      <div
        className={`project__card ${cssClass}`}
        style={{ borderColor: `${theme}` }}
      >
        {getProjectTitle(project, "project__header project__title", index, theme)}
        {children}
        {project.description.length && (
          <Description
            {...{
              cssClass: `about-project project__content`,
              descriptionFor: `<strong>About Project : </strong> ${project.description}`
            }}
          />
        )}
        <div className="project__content sub-projects">
          {project.subProjects.map((subProjs, index) => {
            const title = getProjectTitle(subProjs, "sub-project__title", index);
            if (title) {
              if (index === 0) {
                return [
                  <div key="-1" className="sub-project__header">
                    <strong>Sub-projects</strong>
                  </div>,
                  title
                ];
              }
              return title;
            }
            return null;
          })}
        </div>
        <div className="project__links">
          {project.demo && project.demo.length && (
            <Button {...{
              value: project.demo,
              btnClass: "project__link demo",
              linkClass: "button-link",
              tooltip: "View demo",
              type: ICONTYPE.DEMO
            }}>
              <span className="action-text">Demo</span>
            </Button>
          )}
          {project.source && project.source.length && (
            <Button {...{
              value: project.source,
              btnClass: "project__link code",
              linkClass: "button-link",
              tooltip: "View source",
              type: ICONTYPE.CODE 
            }}>
              <span className="action-text">Source</span>
            </Button>
          )}
        </div>
        <Tags
          {...{ tags: project.tags ? project.tags.toString() : null, theme }}
        />
      </div>
    </AnimatedVisibility>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object),
  theme: PropTypes.string,
  index: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProjectCard;
