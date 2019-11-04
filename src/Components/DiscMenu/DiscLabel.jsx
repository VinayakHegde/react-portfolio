import React from "react";
import PropTypes from "prop-types";

const DiscLabel = ({text, style}) => (
  <span className="disc-label" {...{style}}>
    {text}
  </span>
);

DiscLabel.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
};

export default DiscLabel;
