import { months, monthDiff } from 'Helpers/month';
import { IWorkExperiencePart } from 'Models/IWorkExperience';

export default (UserExperience: (IWorkExperiencePart | never)[] = []) => {
  let exp = 0;
  UserExperience.forEach((uexp) => {
    const d1 = new Date(
      Number((uexp as IWorkExperiencePart).startDate?.split(' ')[1]),
      months.indexOf((uexp as IWorkExperiencePart).startDate?.split(' ')[0].toUpperCase()),
    );
    const d2 = (uexp as IWorkExperiencePart).isPresent
      ? new Date()
      : new Date(
          Number((uexp as IWorkExperiencePart).endDate?.split(' ')[1]),
          months.indexOf(((uexp as IWorkExperiencePart).endDate?.split(' ')[0] as string).toUpperCase()),
        );

    exp += monthDiff(d1, d2);
  });
  if (exp) {
    const year = Math.floor(exp / 12);
    const mnth = exp % 12;
    const yearDisplay = year ? `${year}year${year > 1 ? 's' : ''}` : '';
    const mnthDisplay = mnth ? `${yearDisplay.length ? ' and ' : ''}${mnth}month${mnth > 1 ? 's' : ''}` : '';
    return `${yearDisplay}${mnthDisplay}`;
  }
  return 'none';
};
