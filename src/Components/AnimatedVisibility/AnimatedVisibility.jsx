import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import './AnimatedVisibility.scss';

const AnimatedVisibility = ({ children, setCssClass }) => (
  <div className='animation__container'>
    <VisibilitySensor
      {...{
        partialVisibility: true,
        offset: {
          bottom: 50,
        },
        onChange: (isSet) => isSet && setCssClass('animation--bounceIn'),
      }}>
      <Fragment>{children}</Fragment>
    </VisibilitySensor>
  </div>
);

AnimatedVisibility.propTypes = {
  setCssClass: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AnimatedVisibility;
