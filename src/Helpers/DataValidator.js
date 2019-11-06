import data from "Data/profile.json";

const UserDetails = {
  FirstName: data.user ? data.user.firstName || "" : "",
  LastName: data.user ? data.user.lastName || "" : "",
  FriendlyName: data.user
    ? (data.user.firstName || "").concat(" ", data.user.lastName || "")
    : "",
  KnownAs: data.user ? data.user.knownAs || "" : "",
  Location: data.user ? data.user.location || "" : "",
  JobTitle: data.user ? data.user.jobTitle || "" : "",
  SubTitle: data.user ? data.user.subTitle || "" : "",
  Description: data.user ? data.user.description || "" : ""
};

const UserContacts = {
  Mobile: data.user && data.user.contact ? data.user.contact.phone || "" : "",
  Email: data.user && data.user.contact ? data.user.contact.email || "" : "",
  LinkedIn:
    data.user && data.user.contact && data.user.contact.social
      ? data.user.contact.social.linkedIn || ""
      : "",
  Github:
    data.user && data.user.contact && data.user.contact.social
      ? data.user.contact.social.gitHub || ""
      : ""
};

const UserExperiences = data.experiences || [];
const UserProjects = data.projects || [];
const UserSkills = data.skills || [];
const PersonalProjects = data.personalProjects || [];

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

export {
  UserDetails,
  UserContacts,
  UserExperiences,
  UserProjects,
  PersonalProjects,
  UserSkills
};
