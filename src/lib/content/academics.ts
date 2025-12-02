import { Section } from '@/lib/types/sections';

export interface AcademicItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string[];
}

export const academicsSection: Section & { items: AcademicItem[] } = {
  title: "academics",
  items: [
    {
      id: 'XYZ College',
      degree: "B.Tech in Computer Science",
      institution: 'Delhi University',
      location: 'Delhi, India',
      period: '2019 - 2023',
      details: ['CGPA - 9.05', 'Relevant Modules - DSA, Databases, Web Dev'],
    },
    {
      id: 'ABC Model School',
      degree: "Higher Secondary (Science)",
      institution: 'ABC Model School',
      location: 'Delhi, India',
      period: '2017 - 2019',
      details: ['Subjects - Physics, Chemistry, Mathematics, English, Computer Science'],
    },
  ],
};

export default academicsSection;
