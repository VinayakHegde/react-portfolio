import React from "react";
import useCustomState from 'hooks/useCustomState';
import useProjects from 'hooks/useProjects';
import { UserProjects } from "Helpers/DataValidator";
import { PROJECTSTYPE } from "Models/Enums";
import Toolbar from 'Components/Toolbar';
import Work from "./Work";
import getItems from "./utils";

const Projects = () => {
  const [type, setType] = useCustomState(PROJECTSTYPE.WORK);
  const [projects, setProjects] = useProjects({type, UserProjects});
  const onSwitch = newType => {
    if(type !== newType) {
      setType(newType);
      setProjects(newType);
    }
  };
  return (
    <>
      <Toolbar {...getItems({type, onSwitch})} />
      <Work {...{projects}} />
    </>
  );
};

export default Projects;
