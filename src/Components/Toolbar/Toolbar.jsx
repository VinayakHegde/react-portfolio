import React from 'react';
import PropTypes from "prop-types";

import './Toolbar.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired
  }))
};

const defaultProps = {
  items: null
};

const Toolbar = ({items}) => (
  <div className="toolbar">
    { items.map((item, key) => (
      <span className={`${item.isActive ? 'toolbar__button--active ' : ''}toolbar__button`}
        key={key}
        onClick={item.callback}>
        {item.caption}
      </span>
    ))}
  </div>
);

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
