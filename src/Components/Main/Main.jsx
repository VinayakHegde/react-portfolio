import React from "react";
import PropTypes from "prop-types";
import { MENU } from "Helpers/Enums";
import About from "Components/About/About";
import Experience from "Components/Experience/Experience";
import Projects from "Components/Projects/Projects";
import Skills from "Components/Skills/Skills";
import "./Main.scss";

const Main = ({ route }) => (
  <article className="profile-content">
    {route === MENU.ABOUT && <About />}
    {route === MENU.EXPERIENCE && <Experience />}
    {route === MENU.PROJECTS && <Projects />}
    {route === MENU.SKILLS && <Skills />}
  </article>
);

Main.propTypes = {
  route: PropTypes.string
};

export default Main;
