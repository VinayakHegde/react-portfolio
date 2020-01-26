import React, { useState } from "react";
import { Motion, StaggeredMotion, spring } from "react-motion";
import PropTypes from "prop-types";

import { MENU } from "Helpers/Enums";
import Icon from "Components/Icon";
import Disc from "./Disc";
import DiscGroup from "./DiscGroup";
import DiscLabel from "./DiscLabel";
import "./DiscMenu.scss";

const DiscMenu = ({ onItemClick }) => {
  const [active, setActive] = useState(false);
  const menus = Object.keys(MENU).map(key => MENU[key]);
  const springOption = { stiffness: 330, damping: 20 };
  const staggeredMetric = { bottom: -45, opacity: 0 };
  const defaultStaggeredMotion = menus.map(() => staggeredMetric);
  const motionMatric = { scale: 0.675 };
  const styleMotion = {
    scale: spring(active ? 1 : motionMatric.scale, springOption)
  };
  const menuClicked = item => {
    setActive(!active);
    if (item && onItemClick) onItemClick(item);
  };
  const nextStaggeredMotion = prevMotions =>
    prevMotions.map((_, i) =>
      i === prevMotions.length - 1
        ? {
            bottom: spring(active ? 0 : staggeredMetric.bottom, springOption),
            opacity: spring(active ? 1 : staggeredMetric.opacity, springOption)
          }
        : {
            bottom: spring(prevMotions[i + 1].bottom, springOption),
            opacity: spring(prevMotions[i + 1].opacity, springOption)
          }
    );
  return (
    <menu className="disc-menu-container">
      <StaggeredMotion
        defaultStyles={defaultStaggeredMotion}
        styles={nextStaggeredMotion}
      >
        {interpolatingStyles => (
          <DiscGroup active={active ? "active" : "inactive"}>
            {interpolatingStyles.map((style, i) => (
              <Disc
                key={menus[i]}
                onClick={() => menuClicked(menus[i])}
                style={{
                  ...{ style, pointerEvents: active ? "auto" : "none" }
                }}
              >
                <DiscLabel {...{ text: menus[i] }} />
                <Icon {...{ type: menus[i] }} />
              </Disc>
            ))}
          </DiscGroup>
        )}
      </StaggeredMotion>

      <Motion defaultStyle={motionMatric} style={styleMotion}>
        {interpolatingStyles => (
          <Disc
            className="large"
            onClick={() => menuClicked()}
            style={{ transform: "scale(" + interpolatingStyles.scale + ")" }}
          >
            <span
              className={active ? "main-disc-icon active" : "main-disc-icon"}
            ></span>
          </Disc>
        )}
      </Motion>
    </menu>
  );
};

DiscMenu.propTypes = {
  onItemClick: PropTypes.func
};

export default DiscMenu;
