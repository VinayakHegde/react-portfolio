import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Timeline.scss';

const Timeline = ({ children, className, lineColor }) => (
  <div className={classNames(className, 'timeline')} style={{ color: `${lineColor}` }}>
    {children}
  </div>
);

Timeline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  lineColor: PropTypes.string,
};

Timeline.defaultProps = {
  className: '',
  lineColor: '#000',
};

export default Timeline;
