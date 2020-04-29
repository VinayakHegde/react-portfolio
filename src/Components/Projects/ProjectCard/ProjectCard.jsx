import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Description from 'Components/Description';
import AnimatedVisibility from 'Components/AnimatedVisibility';
import Button from 'Components/Button';
import ProjectTitle from 'Components/Projects/ProjectTitle';
import { ICONTYPE } from 'Models/Enums';
import Tags from 'Components/Tags';
import useCustomState from 'hooks/useCustomState';

import './ProjectCard.scss';

const propTypes = {
  project: PropTypes.object,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  project: {},
  theme: '#000',
  children: null,
};

const ProjectCard = ({ project, theme, children }) => {
  const [cssClass, setCssClass] = useCustomState();
  if (!project) return null;
  return (
    <AnimatedVisibility {...{ setCssClass }}>
      <div className={`project__card ${cssClass}`} style={{ borderColor: `${theme}` }}>
        <ProjectTitle
          {...{
            project,
            className: 'project__header project__title',
            theme,
          }}
        />
        {children}
        {project.description.length && (
          <Description
            {...{
              cssClass: `about-project project__content`,
              descriptionFor: `<strong>About Project : </strong> ${project.description}`,
            }}
          />
        )}
        <div className='project__content sub-projects'>
          {project.subProjects.map((subProjs, index) => (
            <Fragment key={index}>
              {!index && <strong>Sub-projects</strong>}
              <ProjectTitle
                {...{
                  project: subProjs,
                  className: 'sub-project__title',
                }}
              />
            </Fragment>
          ))}
        </div>
        <div className='project__link__wrapper'>
          {project.demo && project.demo.length && (
            <Button
              {...{
                value: project.demo,
                btnClass: 'project__link demo',
                tooltip: 'View demo',
                type: ICONTYPE.DEMO,
              }}>
              <span className='project__link__action__text'>Demo</span>
            </Button>
          )}
          {project.source && project.source.length && (
            <Button
              {...{
                value: project.source,
                btnClass: 'project__link code',
                tooltip: 'View source',
                type: ICONTYPE.CODE,
              }}>
              <span className='project__link__action__text'>Source</span>
            </Button>
          )}
        </div>
        <Tags
          {...{
            tags: project.tags ? project.tags.toString() : null,
            theme,
          }}
        />
      </div>
    </AnimatedVisibility>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
