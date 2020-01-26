import React from "react";
import { DESCRIPTIONFOR } from "Helpers/Enums";
import AnimatedVisibility from "Components/AnimatedVisibility";
import UserCard from "Components/Cards/UserCard/UserCard";
import Description from "Components/Description";
import SkillCard from "Components/Cards/SkillCard/SkillCard";
import useCustomState from 'hooks/useCustomState';

import "./About.scss";

const About = () => {
  const [userClass, setUserClass] = useCustomState();
  const [descClass, setDescClass] = useCustomState();
  const [skillClass, setSkillClass] = useCustomState();
  
  return (
    <>
      <AnimatedVisibility {...{setCssClass: setUserClass}}>
        <UserCard
          {...{
            cssClass: `about__content ${userClass}`
          }}
        />
      </AnimatedVisibility>
      <AnimatedVisibility {...{setCssClass: setDescClass}}>
        <Description
          {...{
            cssClass: `about__content about__description ${descClass}`,
            descriptionFor: DESCRIPTIONFOR.USERDESCRIPTION
          }}
        />
      </AnimatedVisibility>
      <AnimatedVisibility {...{setCssClass: setSkillClass}}>
        <div className={`about__content ${skillClass}`}>
          <SkillCard />
        </div>
      </AnimatedVisibility>
    </>
  );
};

export default About;
