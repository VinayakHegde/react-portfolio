import React, {useState} from "react";
import PropTypes from "prop-types";

import Description from "Components/Description";
import AnimatedVisibility from "Components/AnimatedVisibility";
import ActionButton from "Components/Buttons/ActionButton";
import Icon from 'Components/Icon';
import { ICONTYPE } from "Helpers/Enums";
import Tags from './Tags';
import "./ProjectCard.scss";

const getProjectTitle = (project, className, key, theme) => {
  if (project.title.length && project.startDate.length) {
    const d1 = ` - ${project.isPresent ? "Present" : project.endDate}`
    return (
      <div className={className} key={key} style={{ background: `${theme}` }}>
        {project.title}
        <small className="project-duration">
          {` (${project.startDate}${project.companyKey ? d1 : ''})`}
        </small>
      </div>
    );
  }

  return null;
};

const ProjectCard = ({project, theme, children, index}) => {
  const [visible, setVisible] = useState(false);
  
  return (<AnimatedVisibility
    notifyChange={isVisible => isVisible && setVisible(true)}>
    <div className={`project-card ${visible ? "bounce-in " : "is-hidden"}`}
      style={{ borderColor: `${theme}` }}>
      {getProjectTitle(project, "project-header project-title", index,theme)}
      {children}
      {project.description.length && <Description {...{
        cssClass: `about-project project-content`,
        descriptionFor: `<strong>About Project : </strong> ${project.description}`
      }} />}
      <div className="project-content sub-projects">
        {project.subProjects.map((subProjs, index) => {
          const title = getProjectTitle(subProjs, "sub-project-title", index);
          if (title) {
            if (index === 0) {
              return [
                <div key="-1" className="sub-project-header">
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
      <div className="project-links">
        {(project.demo && project.demo.length) && 
          <ActionButton value={project.demo}
            btnClass="project-link demo"
            linkClass="button-link"
            tooltip="View demo">
            <Icon type={ICONTYPE.DEMO} />
            <span className="action-text">Demo</span>
          </ActionButton>
        }
        {(project.source && project.source.length) && 
          <ActionButton value={project.source}
            btnClass="project-link code"
            linkClass="button-link"
            tooltip="View source">
            <Icon type={ICONTYPE.CODE} />
            <span className="action-text">Source</span>
          </ActionButton>
        }
      </div>
      <Tags {...{tags:project.tags ? project.tags.toString() : null, theme}} />
    </div>
  </AnimatedVisibility>);
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
