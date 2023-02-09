import { ExperienceType, ProjectType } from '.';

export type Section = {
  title: string;
};

export type HeroSectionType = {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  cta?: {
    title: string;
    link: string;
    hideInDesktop?: boolean;
    sameTab?: boolean;
  };
} & Section;

export type ExperienceSectionType = {
  experiences: ExperienceType[];
} & Section;

export type ProjectsSectionType = {
  projects: ProjectType[];
} & Section;
