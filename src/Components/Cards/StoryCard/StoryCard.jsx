import React from "react";
import PropTypes from "prop-types";

import AnimatedVisibility from "Components/AnimatedVisibility";
import useCssClass from 'hooks/useCssClass';

import "./StoryCard.scss";

const StoryCard = ({ when, where, who, whom, count, theme, children }) => {
  const [cssClass, setCssClass] = useCssClass();
  
  return (
    <AnimatedVisibility {...{setCssClass}}>
      <div className={`storycard__caption__wrapper ${cssClass}`} style={{ color: `${theme}` }}>
        <div>
          <span className="storycard__caption__container">
            <time
              className="storycard__caption"
              style={{ background: `${theme}` }}
              title={when}
            >
              {when}
            </time>
          </span>
        </div>
      </div>
      <div className={`storycard__continer ${cssClass}`}>
        <div
          className={`storycard__content ${
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
