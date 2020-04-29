import React from 'react';
import PropTypes from 'prop-types';

import './Tags.scss';

const Tags = ({ tags, theme }) => {
  if (!tags) return null;

  return (
    <div className='tag__container'>
      {tags.split(',').map((tag, index) => (
        <span className='tag__chips' key={index} style={{ background: `${theme}` }}>
          {tag}
        </span>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.string,
  theme: PropTypes.string,
};

export default Tags;
