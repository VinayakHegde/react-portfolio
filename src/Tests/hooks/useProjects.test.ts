import renderHook from 'Tests/utils/renderHook';
import { act } from 'react-dom/test-utils';
import useProjects from 'hooks/useProjects';
import { IUserProject } from 'Models/IProject';
import { PROJECTSTYPE } from 'Models/Enums';

const project = {
  title: '',
  isPresent: false,
  startDate: '',
  endDate: '',
  description: '',
  subProjects: [],
  tags: [],
};
const UserProjects = [
  Object.assign({}, project, {
    companyKey: '01',
  }),
  Object.assign({}, project, {
    companyKey: '01',
  }),
  Object.assign({}, project, {
    companyKey: '01',
  }),
  project,
  project,
  project,
  project,
];

let [projects, setProjects]: [IUserProject[], Function] = [[], () => {}];
let type = PROJECTSTYPE.WORK;

beforeEach(() => {
  renderHook(() => {
    [projects, setProjects] = useProjects({ type, UserProjects });
  });
});

describe('useProjects', () => {
  it('should have project for WORK and length is 3', () => {
    expect(projects.length).toBe(3);
  });
  it('should have project for PERSONAL and length is 4', () => {
    act(() => {
      setProjects(PROJECTSTYPE.PERSONAL);
    });
    expect(projects.length).toBe(4);
  });
  it('should have project for nothing and lenth should be 0', () => {
    act(() => {
      setProjects(null);
    });
    expect(projects.length).toBe(0);
  });
});
