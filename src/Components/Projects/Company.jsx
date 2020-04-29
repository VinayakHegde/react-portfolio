import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  company: PropTypes.string,
  theme: PropTypes.string,
};
const defaultProps = {
  company: 'Personal',
  theme: '#000',
};

const Company = ({ theme, company }) => (
  <div className='project__header project__company' style={{ background: theme, fontSize: '0.9em' }}>
    {company}
  </div>
);

Company.propTypes = propTypes;
Company.defaultProps = defaultProps;

export default Company;
