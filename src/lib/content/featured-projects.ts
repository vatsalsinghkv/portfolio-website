import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on", // This title can be updated by the user if needed
  projects: [
    {
      id: getId(),
      name: 'AI-Powered Recipe Assistant (RAG)',
      description: 'Parses PDF cookbooks and answers complex culinary queries in natural language.',
      tasks: 'Developed an AI-driven assistant that processes PDF cookbooks to provide users with natural language answers to complex culinary questions, leveraging RAG technology.',
      url: '', // URL not provided
      img: '', // Image URL not provided
      tags: ['AI', 'RAG', 'NLP', 'PDF Processing', 'Python'],
    },
    {
      id: getId(),
      name: 'Heart Disease Predictor',
      description: 'End-to-end ML pipeline (sklearn) achieving 92% recall on UCI dataset.',
      tasks: 'Built and evaluated an end-to-end Machine Learning pipeline using sklearn to predict heart disease, achieving a high recall rate of 92% on the UCI dataset.',
      url: '', // URL not provided
      img: '', // Image URL not provided
      tags: ['Machine Learning', 'sklearn', 'Prediction', 'Healthcare', 'Python'],
    },
    // Add other featured projects here if needed, or remove this comment
  ],
};

export default featuredProjectsSection;
