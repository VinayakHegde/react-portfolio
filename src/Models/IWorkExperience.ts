interface IAchievement {
  details: string;
}

interface IMisc {
  theme: string;
}
export interface IWorkExperiencePart {
  isPresent: boolean;
  startDate: string;
  endDate?: string;
}

export interface IWorkExperience extends IWorkExperiencePart {
  company: string;
  office: string;
  jobTitle: string;
  description: string;
  achievements: IAchievement[];
  other: string;
  misc: IMisc;
}
