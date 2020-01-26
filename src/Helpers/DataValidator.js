import * as bio from "Assets/Data/bio.json";
import experience from "Assets/Data/experience.json";
import project from "Assets/Data/project.json";
import skill from "Assets/Data/skill.json";

const UserDetails = {
  FirstName: bio.firstName || "",
  LastName: bio.lastName || "",
  FriendlyName: `${bio.firstName || ""} ${bio.lastName || ""}`,
  KnownAs: bio.knownAs || "",
  Location: bio.location || "",
  JobTitle: bio.jobTitle || "",
  SubTitle: bio.subTitle || "",
  Description: bio.description || ""
};

const UserContacts = {
  Mobile: bio.contact.phone || "",
  Email: bio.contact.email || "",
  LinkedIn: bio.contact.social.linkedIn || "",
  Github: bio.contact.social.gitHub || ""
};

const UserExperiences = Object.keys(experience).map(key => {
  const exp = experience[key];
  return Object.assign({}, exp, { misc: { ...exp.misc, key } });
});

const UserProjects = [].concat(
  ...Object.keys(project).map(key => {
    const projects = project[key];
    return [].concat(
      ...projects.map(proj => ({
        ...proj,
        companyKey: Number(key) > 0 ? key : null
      }))
    );
  })
);

const UserSkills = Object.keys(skill).map(key =>
  Object.assign({}, skill[key], { header: key })
);

UserDetails.Experience = () => {
  let exp = 0;
  if (UserExperiences.length > 0) {
    const monthDiff = (d1, d2) => {
      let diff = (d2.getFullYear() - d1.getFullYear()) * 12;
      diff -= d1.getMonth();
      diff += d2.getMonth() + 1;
      return diff <= 0 ? 0 : diff;
    };

    UserExperiences.forEach(uexp => {
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ];
      const d1 = new Date(
        uexp.startDate.split(" ")[1],
        months.indexOf(uexp.startDate.split(" ")[0].toUpperCase())
      );
      const d2 = uexp.isPresent
        ? new Date()
        : new Date(
            uexp.endDate.split(" ")[1],
            months.indexOf(uexp.endDate.split(" ")[0].toUpperCase())
          );

      exp += monthDiff(d1, d2);
    });
  }
  return exp ? (exp / 12).toFixed(1) : exp;
};

export { UserDetails, UserContacts, UserExperiences, UserProjects, UserSkills };
