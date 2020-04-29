export interface IProject {
  title: string;
  isPresent: boolean;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface IProjectWithSubProjects extends IProject {
  subProjects: IProject[];
  tags: string[];
}

export interface IUserProject extends IProjectWithSubProjects {
  companyKey?: string;
}

export interface IUseProject {
  type: string;
  UserProjects: IUserProject[];
}
