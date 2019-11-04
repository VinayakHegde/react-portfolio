import React, {Fragment} from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

import "./AnimatedVisibility.scss";

const AnimatedVisibility = ({children, notifyChange}) => (
  <div className="animated-visibility-container">
    <VisibilitySensor {...{
      partialVisibility: true,
      offset: {
        bottom: 50
      },
      onChange: notifyChange
    }}>
      <Fragment>
        {children}
      </Fragment>
    </VisibilitySensor>
  </div>
);

AnimatedVisibility.propTypes = {
  notifyChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AnimatedVisibility;
