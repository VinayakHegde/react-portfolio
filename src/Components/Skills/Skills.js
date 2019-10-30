import "./Skills.css";

import React, { Component } from "react";
import SkillCard from "../Cards/SkillCard/SkillCard";

class Skills extends Component {
  render() {
    return (
      <article className="profile-content">
        <div className="content-wrapper">
          <SkillCard bar={true} />
        </div>
      </article>
    );
  }
}
export default Skills;
