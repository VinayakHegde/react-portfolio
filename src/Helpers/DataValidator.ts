import * as bio from "Assets/Data/bio.json";
import experience from "Assets/Data/experience.json";
import project from "Assets/Data/project.json";
import skill from "Assets/Data/skill.json";

import {IUserDetails, IUserContacts} from 'Models/IUser';
import { IWorkExperience } from "Models/IWorkExperience";
import { IProjectWithSubProjects} from 'Models/IProject';
import { Objectkeys } from 'Helpers/generic';
import calculateExp from 'Helpers/totalExperience';

const UserExperiences = Objectkeys(experience).map((key) => {
  const exp: IWorkExperience = experience[key] as IWorkExperience;
  return Object.assign({}, exp, { misc: { ...exp.misc, key } });
});

const UserProjects = Objectkeys(project).map(key => {
  const projects = project[key] as IProjectWithSubProjects[];
  return projects.map(proj => ({
    ...proj,
    companyKey: Number(key) > 0 ? key : null
  }));
}).flat();

const UserSkills = Objectkeys(skill).map(key =>
  Object.assign({}, skill[key], { header: key })
);


const UserDetails: IUserDetails = {
  FirstName: bio.firstName || "",
  LastName: bio.lastName || "",
  FriendlyName: `${bio.firstName || ""} ${bio.lastName || ""}`,
  KnownAs: bio.knownAs || "",
  Location: bio.location || "",
  JobTitle: bio.jobTitle || "",
  SubTitle: bio.subTitle || "",
  Description: bio.description || "",
  Experience: calculateExp(UserExperiences)
};

const UserContacts: IUserContacts = {
  Mobile: bio.contact.phone || "",
  Email: bio.contact.email || "",
  LinkedIn: bio.contact.social.linkedIn || "",
  Github: bio.contact.social.gitHub || ""
};
export { UserDetails, UserContacts, UserExperiences, UserProjects, UserSkills };
