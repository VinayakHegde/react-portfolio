import React from "react";
import PropTypes from "prop-types";

const Tags = ({ tags, theme }) => {
  if (!tags) return null;

  return (
    <div className="project-tags">
      {tags.split(",").map((tag, index) => (
        <span
          className="tag-chips"
          key={index}
          style={{ background: `${theme}` }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.string,
  theme: PropTypes.string
};

export default Tags;
