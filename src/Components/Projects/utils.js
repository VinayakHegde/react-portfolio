import { PROJECTSTYPE } from "Models/Enums";
import { UserExperiences } from "Helpers/DataValidator";

const getItems = ({type, onSwitch}) => ({
  items: [{
    caption: 'Work',
    isActive: type === PROJECTSTYPE.WORK,
    callback: () => onSwitch(PROJECTSTYPE.WORK)
  }, {
    caption: 'Personal',
    isActive: type === PROJECTSTYPE.PERSONAL,
    callback: () => onSwitch(PROJECTSTYPE.PERSONAL)
  }]
});

const getOptions = project => {
  const experience = UserExperiences.find(
    exp => exp.misc.key === project.companyKey
  );
  return {
    company: experience ? experience.company : "Personal",
    theme: experience ? experience.misc.theme : "#000"
  };
}

export default getItems;

export {getOptions};