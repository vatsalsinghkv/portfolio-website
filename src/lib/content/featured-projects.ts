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
    {
      id: getId(),
      name: 'Onion Link Shortener',
      description: 'A simple URL shortener service using Python and Flask, designed for operational security with .onion links. Features include custom aliases, redirection, and link history/click counts.',
      tasks: 'Developed a secure URL shortener for .onion links using Python and Flask. Implemented features such as custom alias generation, redirection logic, and tracking of link history and click counts.',
      url: '', // Live URL not provided
      img: '/images/project-placeholder.png', // Placeholder image
      tags: ['Python', 'Flask', 'URL Shortener', 'Security', '.onion', 'Web App'],
    },
    // Add other featured projects here if needed, or remove this comment
  ],
};

export default featuredProjectsSection;
