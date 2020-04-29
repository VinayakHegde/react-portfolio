import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import Company from './Company';
import NoWorksFound from './NoWorksFound';
import { getOptions } from './utils';

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      companyKey: PropTypes.string,
    }),
  ),
};

const defaultProps = {
  projects: [],
};

const Work = ({ projects }) => (
  <div className='content__wrapper'>
    {projects.length > 0 &&
      projects.map((project, key) => {
        const options = getOptions(project);
        return (
          <ProjectCard
            key={key}
            {...{
              project,
              theme: options.theme,
            }}>
            <Company {...options} />
          </ProjectCard>
        );
      })}
    {!projects.length && <NoWorksFound />}
  </div>
);

Work.propTypes = propTypes;
Work.defaultProps = defaultProps;

export default Work;
