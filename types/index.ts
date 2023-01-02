export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: Date | string;
  upto: Date | 'present' | string;
  tasks: string[];
};

// env
export type ProjectType = {
  name: string;
  url: string;
  year: number;
  img: string;
  tags: string[];
  repo: string;
};

export type SkillType = { name: string; icon: string };
