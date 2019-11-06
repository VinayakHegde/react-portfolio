import React, { useState } from "react";
import PropTypes from "prop-types";

import AnimatedVisibility from "Components/AnimatedVisibility";
import "./StoryCard.scss";

const StoryCard = ({ when, where, who, whom, count, theme, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <AnimatedVisibility
      notifyChange={isVisible => isVisible && setVisible(true)}
    >
      <div className="story-caption-wrapper" style={{ color: `${theme}` }}>
        <div className={`${visible ? "bounce-in" : "is-hidden"}`}>
          <span className="story-caption-container">
            <time
              className="story-caption"
              style={{ background: `${theme}` }}
              title={when}
            >
              {when}
            </time>
          </span>
        </div>
      </div>
      <div className="story-continer">
        <div
          className={`story-content ${visible ? "bounce-in" : "is-hidden"} ${
            !children ? "empty" : ""
          }`}
          style={{ borderColor: `${theme}` }}
        >
          <h3 style={{ color: `${theme}` }}>{who}</h3>
          <h4 style={{ color: `${theme}` }}>
            {whom.length ? `@ ${whom}, ${where}` : ""}
          </h4>
          <hr />
          {count > 0 && (
            <div
              className="project-count"
              style={{ background: `${theme}` }}
              title="Number of projects undertaken"
            >
              {count}
            </div>
          )}
          {children}
        </div>
      </div>
    </AnimatedVisibility>
  );
};

StoryCard.propTypes = {
  when: PropTypes.string,
  where: PropTypes.string,
  who: PropTypes.string,
  whom: PropTypes.string,
  count: PropTypes.number,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

StoryCard.defaultProps = {
  when: "",
  where: "",
  who: "",
  whom: "",
  theme: "#ddd",
  children: null
};

export default StoryCard;
