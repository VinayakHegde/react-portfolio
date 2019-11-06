import React from "react";
import PropTypes from "prop-types";

const Download = ({ btnClass, linkClass, value, tooltip, children }) => (
  <button className={btnClass}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
      href={value}
      title={tooltip}
    >
      {children}
    </a>
  </button>
);

Download.propTypes = {
  value: PropTypes.string,
  btnClass: PropTypes.string,
  linkClass: PropTypes.string,
  tooltip: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Download;
