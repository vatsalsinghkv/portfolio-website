export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

// env
export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: Date | string;
  upto: Date | 'present' | string;
  tasks: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  year: number;
  img: string;
  tags: string[];
  repo: string;
};

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SoftwareSkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
