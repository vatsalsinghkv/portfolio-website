import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'MindNt',
      companyUrl: '', // No URL provided
      role: 'Dev',
      started: 'sep 2024',
      upto: 'nov 2024',
      tasks: [
        'Led design of an AI SaaS platform, integrating OpenAI & LangChain into a Flask micro-service architecture.',
        'Containerised services with Docker and automated deployment on AWS.',
        'Collaborated with front-end team (React, Figma) to deliver customer-facing features.',
      ],
    },
    {
      company: 'RolPlay-Audioweb',
      companyUrl: '', // No URL provided
      role: 'Production Support Engineer/Tester & Power BI Dev',
      started: 'mar 2024',
      upto: 'sep 2024',
      tasks: [
        'Automated SQL data pipelines and created dashboards, reducing manual reporting time by 60%.',
        'Resolved ASAP Tier 2/3 support tickets, diagnosing PHP / MySQL issues.',
      ],
    },
    {
      company: 'LINX - UNAM',
      companyUrl: '', // No URL provided
      role: 'School Internship',
      started: 'mar 2022',
      upto: 'mar 2023',
      tasks: [
        'Managed multiple freelance software projects, sharpening client communication and time-management skills.',
      ],
    },
  ],
};
