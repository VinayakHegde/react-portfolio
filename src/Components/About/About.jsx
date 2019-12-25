import React from "react";
import { DESCRIPTIONFOR } from "Helpers/Enums";
import AnimatedVisibility from "Components/AnimatedVisibility";
import UserCard from "Components/Cards/UserCard/UserCard";
import Description from "Components/Description";
import SkillCard from "Components/Cards/SkillCard/SkillCard";
import useCustomState from 'hooks/useCustomState';

import "./About.scss";

const About = () => {
  const [cssClass, setCssClass] = useCustomState();
  
  return (
    <div className="content-wrapper">
      <AnimatedVisibility {...{setCssClass}}>
        <UserCard
          {...{
            cssClass: `about-content ${cssClass}`
          }}
        />
        <Description
          {...{
            cssClass: `about-content about-description ${cssClass}`,
            descriptionFor: DESCRIPTIONFOR.USERDESCRIPTION
          }}
        />

        <div className={`about-content ${cssClass}`}>
          <SkillCard />
        </div>
      </AnimatedVisibility>
    </div>
  );
};

export default About;
