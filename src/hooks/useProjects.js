import {useState} from 'react';
import { PROJECTSTYPE } from "Helpers/Enums";

const useProjects = (type, userProjects) => {
  const getProjects = newType => userProjects.filter(proj => {
    if(newType === PROJECTSTYPE.WORK){
      return proj.companyKey;
    } else {
      return !proj.companyKey;
    }
  });
  const [projects, setProjects] = useState(() => getProjects(type));
  
  return [
    projects, 
    newType => setProjects(getProjects(newType))
  ];
};

export default useProjects;
