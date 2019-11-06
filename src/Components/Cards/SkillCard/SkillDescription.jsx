import React from "react";
import { UserSkills } from "Helpers/DataValidator";
import Description from "Components/Description";

const SkillDescription = () => {
  if (UserSkills.length) {
    let skillsText = "<strong>Core Competencies : </strong>";
    UserSkills.forEach(skill => {
      skillsText = skillsText.concat("<br/><em><u>", skill.header, "</u></em>");

      if (skill.topics && skill.topics.length) {
        let topics = skill.topics.map(tpcs => tpcs.name);

        if (topics.length) {
          skillsText = skillsText.concat(
            "<em> : </em>",
            topics.toString().replace(/,/g, ", ")
          );
        }
      }
    });

    return (
      <Description
        {...{
          cssClass: "skills-text",
          descriptionFor: skillsText
        }}
      />
    );
  }
  return null;
};

export default SkillDescription;
