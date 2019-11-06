import React, { useState } from "react";
import { DESCRIPTIONFOR } from "Helpers/Enums";
import AnimatedVisibility from "Components/AnimatedVisibility";
import UserCard from "Components/Cards/UserCard/UserCard";
import Description from "Components/Description";
import SkillCard from "Components/Cards/SkillCard/SkillCard";

import "./About.scss";

const About = () => {
  const [visible, setVisible] = useState(false);
  const animationClass = visible ? "bounce-in" : "is-hidden";
  return (
    <div className="content-wrapper">
      <AnimatedVisibility
        {...{
          notifyChange: isVisible => setVisible({ visible: isVisible })
        }}
      >
        <UserCard
          {...{
            cssClass: `about-content ${animationClass}`
          }}
        />
        <Description
          {...{
            cssClass: `about-content about-description ${animationClass}`,
            descriptionFor: DESCRIPTIONFOR.USERDESCRIPTION
          }}
        />

        <div className={`about-content ${animationClass}`}>
          <SkillCard />
        </div>
      </AnimatedVisibility>
    </div>
  );
};

export default About;
