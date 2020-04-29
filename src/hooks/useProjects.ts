import { useState } from 'react';
import { PROJECTSTYPE } from 'Models/Enums';
import { IUseProject, IUserProject } from 'Models/IProject';

export default (props: IUseProject): [[IUserProject], Function] => {
  const { type, UserProjects } = props;
  const getProjects = (newType: string) =>
    UserProjects.filter((proj) => {
      const { companyKey } = proj;
      if (newType === PROJECTSTYPE.WORK) {
        return companyKey;
      }
      if (newType === PROJECTSTYPE.PERSONAL) {
        return !companyKey;
      }
      return false;
    }) as [IUserProject];
  const [projects, setProjects] = useState((): [IUserProject] => getProjects(type));

  return [projects, (newType: string) => setProjects(getProjects(newType))];
};
