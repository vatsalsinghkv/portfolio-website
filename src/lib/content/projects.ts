import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const currentYear = new Date().getFullYear();

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'AI-Powered Recipe Assistant (RAG)',
      url: '', // URL not provided
      repo: '', // GitHub URL not provided
      img: '', // Image URL not provided
      year: currentYear, // Placeholder year
      tags: ['AI', 'RAG', 'NLP', 'PDF Processing', 'Python'],
    },
    {
      id: getId(),
      name: 'Node.js Rocket Launch Sim',
      url: '', // URL not provided
      repo: '', // GitHub URL not provided
      img: '', // Image URL not provided
      year: currentYear, // Placeholder year
      tags: ['Node.js', 'Fullstack', 'API', 'Simulation'],
    },
    {
      id: getId(),
      name: 'Heart Disease Predictor',
      url: '', // URL not provided
      repo: '', // GitHub URL not provided
      img: '', // Image URL not provided
      year: currentYear, // Placeholder year
      tags: ['Machine Learning', 'sklearn', 'Prediction', 'Healthcare', 'Python'],
    },
  ],
};
