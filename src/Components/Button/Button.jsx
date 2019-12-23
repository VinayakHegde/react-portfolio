import React from "react";
import PropTypes from "prop-types";
import Icon from "Components/Icon";

const Button = ({
  btnClass,
  linkClass,
  value,
  children,
  type,
  tooltip
}) => {
  return (
    <div className={btnClass}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        href={value}
        title={tooltip}
        onClick={e => e.stopPropagation()}
      >
        {type && <Icon {...{ type }} />}
        {children}
      </a>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  btnClass: PropTypes.string,
  linkClass: PropTypes.string,
  tooltip: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Button;
