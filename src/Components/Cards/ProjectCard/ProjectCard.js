import React, { Component } from "react";
import PropTypes from "prop-types";

import Description from "../../Display/Description/Description";
import "./ProjectCard.css";
import AnimatedVisibility from "../../AnimatedVisibility/AnimatedVisibility";
import ActionButton from "../../Buttons/ActionButton/ActionButton";
import { ICONTYPE } from "../../../Helpers/Enums";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  onSensorChange(isVisible) {
    isVisible && this.setState({ visible: true });
  }

  render() {
    const { project, theme, children, index } = this.props;
    const { visible } = this.state;
    return (
      <AnimatedVisibility
        notifyChange={isVisible => this.onSensorChange(isVisible)}
      >
        <div
          className={`${
            visible ? "bounce-in project-card" : "is-hidden project-card"
          }`}
          style={{ borderColor: `${theme}` }}
        >
          {this.getProjectTitle(
            project,
            "project-header project-title",
            index,
            theme
          )}
          {children}
          {this.getElementFor("About Project", project.description)}
          {this.getSubProjects(project)}
          <div className="project-links">
            {this.getDemoLink(project.demo)}
            {this.getSourceLink(project.source)}
          </div>
          <Tags
            tags={project.tags ? project.tags.toString() : null}
            theme={theme}
          />
        </div>
      </AnimatedVisibility>
    );
  }
  getProjectTitle(project, className, key, theme) {
    if (project.title.length && project.startDate.length) {
      const duration = project.companyKey
        ? " (".concat(
            project.startDate,
            " - ",
            project.isPresent ? "Present" : project.endDate,
            " )"
          )
        : " (".concat(project.startDate, ")");
      return (
        <div className={className} key={key} style={{ background: `${theme}` }}>
          {project.title}
          <small className="project-duration">{duration}</small>
        </div>
      );
    }

    return null;
  }

  getSubProjects(project) {
    const subProjects = project.subProjects.map((subProjs, index) => {
      const title = this.getProjectTitle(subProjs, "sub-project-title", index);
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
    });

    return <div className="project-content sub-projects">{subProjects}</div>;
  }
  getElementFor(type, text) {
    if (text.length) {
      return (
        <Description
          cssClass={type.concat(" project-content")}
          descriptionFor={`${"<strong>".concat(type, "  : </strong>")} ${text}`}
        />
      );
    }

    return null;
  }
  getSourceLink(link) {
    if (link && link.length) {
      return (
        <ActionButton
          type={ICONTYPE.CODE}
          value={link}
          btnClass="project-link code"
          linkClass="button-link"
          tooltip="View source"
        >
          <span className="action-text">Source</span>
        </ActionButton>
      );
    }
    return null;
  }

  getDemoLink(link) {
    if (link && link.length) {
      return (
        <ActionButton
          type={ICONTYPE.DEMO}
          value={link}
          btnClass="project-link demo"
          linkClass="button-link"
          tooltip="View demo"
        >
          <span className="action-text">Demo</span>
        </ActionButton>
      );
    }

    return null;
  }
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object),
  theme: PropTypes.string,
  index: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const Tags = props => {
  if (!props.tags) return null;

  const tags = props.tags.split(",").map((tag, index) => (
    <span
      className="tag-chips"
      key={index}
      style={{ background: `${props.theme}` }}
    >
      {tag}
    </span>
  ));
  return <div className="project-tags">{tags}</div>;
};

export default ProjectCard;
