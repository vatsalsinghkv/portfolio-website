import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Back-end Development',
      lottie: { // Reusing existing lottie, can be changed by user
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing robust server-side applications and APIs.',
        'Working with databases and server logic.',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-light' },
        { name: 'Golang', icon: 'logos:go' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Mongoose', icon: 'arcticons:letter-m' }, // Generic icon for Mongoose
        { name: 'REST APIs', icon: 'mdi:api' },
        { name: 'GraphQL APIs', icon: 'logos:graphql' },
      ],
    },
    {
      id: getId(),
      title: 'Front-end Development',
      lottie: { // Reusing existing lottie, can be changed by user
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Building client-side applications.',
        'Learning React for dynamic user interfaces.',
      ],
      softwareSkills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'React (learning)', icon: 'logos:react' },
      ],
    },
    {
      id: getId(),
      title: 'Tools & Platforms',
      lottie: { // Generic lottie, can be changed/removed by user
        light: '/lotties/coding.json', // Assuming a generic coding lottie exists or can be added
        dark: '/lotties/coding-dark.json',
      },
      points: [
        'Utilizing various tools for development, collaboration, and deployment.',
        'Version control, project management, and API testing.',
      ],
      softwareSkills: [
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'GitHub', icon: 'mdi:github' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Postman', icon: 'logos:postman-icon' },
        { name: 'CI/CD (GitHub Actions)', icon: 'logos:github-actions' },
        { name: 'Jira', icon: 'logos:jira' },
        { name: 'Clickup', icon: 'logos:clickup-icon' },
        { name: 'Trello', icon: 'logos:trello' },
      ],
    },
    {
      id: getId(),
      title: 'Data & Cloud',
      lottie: { // Generic lottie, can be changed/removed by user
        light: '/lotties/data-analysis.json', // Assuming a generic data lottie exists or can be added
        dark: '/lotties/data-analysis-dark.json',
      },
      points: [
        'Working with data analysis tools and cloud APIs.',
        'Extracting insights and integrating external services.',
      ],
      softwareSkills: [
        { name: 'Power BI', icon: 'mdi:microsoft-power-bi' },
        { name: 'Pandas', icon: 'simple-icons:pandas' },
        { name: 'OpenAI API', icon: 'simple-icons:openai' },
        { name: 'Trello API', icon: 'logos:trello' }, // Reusing Trello icon
      ],
    },
    {
      id: getId(),
      title: 'Courses & Certifications',
      lottie: { // Generic lottie, can be changed/removed by user
        light: '/lotties/education.json', // Assuming a generic education/certificate lottie
        dark: '/lotties/education-dark.json',
      },
      points: [
        'Machine Learning (ZtM, 2023)',
        'SQL (Maven, 2022)',
        'Bash Scripting (ZtM, 2024)',
        'React (ZtM, 2024)',
        '(Comptia Net soon)',
      ],
      softwareSkills: [], // No specific software tools with icons for this category
    },
  ],
};
