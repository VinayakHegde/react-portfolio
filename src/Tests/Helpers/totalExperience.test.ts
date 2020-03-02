import totalExperience from 'Helpers/totalExperience';
import { IWorkExperiencePart } from 'Models/IWorkExperience';

const data: IWorkExperiencePart[] = [{
  startDate: 'Dec 2019',
  endDate: 'Feb 2020',
  isPresent: false
},{
  startDate: 'Jun 2018',
  endDate: 'Dec 2019',
  isPresent: false
},{
  startDate: 'Jan 2018',
  endDate: 'Jun 2018',
  isPresent: false
}];
const data2: IWorkExperiencePart[] = [{
  startDate: 'Dec 2019',
  endDate: 'Feb 2020',
  isPresent: false
}];
describe('totalExperience', () => {
  it('should return total as 2years and 1month', () => {
    const tot = totalExperience(data);

    expect(tot).toBe("2years and 1month")
  });
  it('should return total as 2months', () => {
    const tot = totalExperience(data2);

    expect(tot).toBe("2months")
  })
});