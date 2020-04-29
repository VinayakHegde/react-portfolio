import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DiscGroup = ({ active, style, children }) => (
  <div className={classNames('disc-group', active)} {...{ style }}>
    {children}
  </div>
);

DiscGroup.propTypes = {
  active: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default DiscGroup;
