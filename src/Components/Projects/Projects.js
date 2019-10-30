import React, { Component } from "react";

import Work from "./Work";
import Personal from "./Personal";
import { PROJECTSTYPE } from "../../Helpers/Enums";

import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: PROJECTSTYPE.WORK
    };
  }
  setProjectType(type) {
    this.setState({
      type: type
    });
  }
  render() {
    return (
      <article className="profile-content">
        <div className="toolbar">
          <span
            onClick={() => this.setProjectType(PROJECTSTYPE.WORK)}
            className={
              this.state.type === PROJECTSTYPE.WORK
                ? "toolbar-button active"
                : "toolbar-button"
            }
          >
            Work
          </span>
          <span
            onClick={() => this.setProjectType(PROJECTSTYPE.PERSONAL)}
            className={
              this.state.type === PROJECTSTYPE.PERSONAL
                ? "toolbar-button active"
                : "toolbar-button"
            }
          >
            Personal
          </span>
        </div>
        <div className="content-wrapper">{this.getProjectCards()}</div>
      </article>
    );
  }
  getProjectCards() {
    switch (this.state.type) {
      case PROJECTSTYPE.WORK:
        return <Work />;
      case PROJECTSTYPE.PERSONAL:
        return <Personal />;
      default:
        return null;
    }
  }
}

export default Projects;
