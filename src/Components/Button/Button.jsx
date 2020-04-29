import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Components/Icon';
import './Button.scss';

const Button = ({ btnClass, value, children, type, tooltip, fnCallback }) => {
  const props = {
    title: tooltip,
    className: 'button__link',
    onClick: () => {
      fnCallback && fnCallback();
    },
    ...(!fnCallback && { target: '_blank' }),
    ...(!fnCallback && { rel: 'noopener noreferrer' }),
    ...(!fnCallback && { href: value }),
  };
  return (
    <div className={btnClass}>
      <a {...props}>
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
  tooltip: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  fnCallback: PropTypes.func,
};

export default Button;
