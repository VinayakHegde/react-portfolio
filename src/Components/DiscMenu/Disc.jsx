import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Disc = ({ className, style, onClick, children }) => (
  <div className={classNames('disc', className)} {...{ style, onClick }}>
    {children}
  </div>
);

Disc.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Disc;
