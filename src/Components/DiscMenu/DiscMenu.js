import React, { Component } from "react";
import { Motion, StaggeredMotion, spring } from "react-motion";
import classNames from "classnames";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faProjectDiagram,
  faTools
} from "@fortawesome/free-solid-svg-icons";

import { MENU } from "../../Helpers/Enums";
import "./DiscMenu.css";

class DiscMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }
  menuClicked(item) {
    this.setState({
      active: !this.state.active
    });
    if (item) this.props.onItemClick(item);
  }
  render() {
    const menus = Object.keys(MENU).map(key => MENU[key]);
    const springOption = { stiffness: 330, damping: 20 };
    const staggeredMetric = { bottom: -45, opacity: 0 };

    const defaultStaggeredMotion = menus.map(() => staggeredMetric);

    const nextStaggeredMotion = prevMotions =>
      prevMotions.map((_, i) => {
        return i === prevMotions.length - 1
          ? {
              bottom: spring(
                this.state.active ? 0 : staggeredMetric.bottom,
                springOption
              ),
              opacity: spring(
                this.state.active ? 1 : staggeredMetric.opacity,
                springOption
              )
            }
          : {
              bottom: spring(prevMotions[i + 1].bottom, springOption),
              opacity: spring(prevMotions[i + 1].opacity, springOption)
            };
      });
    const motionMatric = { scale: 0.675 };
    const styleMotion = {
      scale: spring(this.state.active ? 1 : motionMatric.scale, springOption)
    };
    return (
      <div className="disc-menu-container">
        <StaggeredMotion
          defaultStyles={defaultStaggeredMotion}
          styles={nextStaggeredMotion}
        >
          {this.getDiscGroup(menus)}
        </StaggeredMotion>

        <Motion defaultStyle={motionMatric} style={styleMotion}>
          {this.getMainDisc()}
        </Motion>
      </div>
    );
  }
  getMainDisc() {
    return interpolatingStyles => (
      <Disc
        className="large"
        onClick={() => this.menuClicked()}
        style={{ transform: "scale(" + interpolatingStyles.scale + ")" }}
      >
        <span
          className={
            this.state.active ? "main-disc-icon active" : "main-disc-icon"
          }
        />
      </Disc>
    );
  }
  getDiscGroup(menus) {
    const getStyle = style => {
      return {
        bottom: style.bottom,
        opacity: style.opacity,
        pointerEvents: this.state.active ? "auto" : "none"
      };
    };
    return interpolatingStyles => (
      <DiscGroup active={this.state.active ? "active" : "inactive"}>
        {interpolatingStyles.map((style, i) => (
          <Disc
            key={menus[i]}
            onClick={() => this.menuClicked(menus[i])}
            style={getStyle(style)}
          >
            <DiscLabel text={menus[i]} />
            {this.iconFor(menus[i])}
          </Disc>
        ))}
      </DiscGroup>
    );
  }

  iconFor(menu) {
    switch (menu) {
      case MENU.PROJECTS:
        return <FontAwesomeIcon icon={faProjectDiagram} />;
      case MENU.EXPERIENCE:
        return <FontAwesomeIcon icon={faBriefcase} />;
      case MENU.SKILLS:
        return <FontAwesomeIcon icon={faTools} />;
      default:
        return <FontAwesomeIcon icon={faHome} />;
    }
  }
}

const DiscLabel = props => (
  <span className="disc-label" style={props.style}>
    {props.text}
  </span>
);

const DiscGroup = props => (
  <div className={classNames("disc-group", props.active)} style={props.style}>
    {props.children}
  </div>
);

const Disc = props => (
  <div
    className={classNames("disc", props.className)}
    style={props.style}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

DiscMenu.propTypes = {
  onItemClick: PropTypes.func
};

export default DiscMenu;
