import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedVisibility from "../../AnimatedVisibility/AnimatedVisibility";
import "./StoryCard.css";

class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  onSensorChange(isVisible) {
    isVisible && this.setState({ visible: true });
  }

  render() {
    let { when, where, who, whom, count, theme, children } = this.props,
      { visible } = this.state;

    if (whom.length > 0) {
      whom = "@ ".concat(whom, ", ", where);
    }

    return (
      <AnimatedVisibility
        notifyChange={isVisible => this.onSensorChange(isVisible)}
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
              children === "" ? "empty" : ""
            }`}
            style={{ borderColor: `${theme}` }}
          >
            <h3 style={{ color: `${theme}` }}>{who}</h3>
            <h4 style={{ color: `${theme}` }}>{whom}</h4>
            <hr />
            {this.getProjectCount(count, theme)}
            {children}
          </div>
        </div>
      </AnimatedVisibility>
    );
  }

  getProjectCount(count, theme) {
    if (count > 0) {
      return (
        <div
          className="project-count"
          style={{ background: `${theme}` }}
          title="Number of projects undertaken"
        >
          {count}
        </div>
      );
    }

    return null;
  }
}

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
  children: ""
};

export default StoryCard;
