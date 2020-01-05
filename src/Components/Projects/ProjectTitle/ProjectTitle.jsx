import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    isPresent: PropTypes.bool,
    companyKey: PropTypes.string
  }), 
  className: PropTypes.string, 
  theme: PropTypes.string
};

const defaultProps = {
  project: {}, 
  className: '', 
  theme: ''
};

const ProjectTitle = ({project, className, theme}) => {
  if (project.title.length && project.startDate.length) {
    const d1 = ` - ${project.isPresent ? "Present" : project.endDate}`;
    return (
      <div className={className} style={{ background: `${theme}` }}>
        {project.title}
        <small className="project__duration">
          {` (${project.startDate}${project.companyKey ? d1 : ""})`}
        </small>
      </div>
    );
  }

  return null;
};

ProjectTitle.propTypes = propTypes;
ProjectTitle.defaultProps = defaultProps;

export default ProjectTitle;