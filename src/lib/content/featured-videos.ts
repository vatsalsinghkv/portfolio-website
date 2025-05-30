// Assuming FeaturedProjectsSectionType can be adapted or a new FeaturedVideosSectionType would be defined.
// For now, we'll keep the import if the structure is similar, otherwise it might need adjustment.
import { FeaturedProjectsSectionType as FeaturedVideosSectionType } from '@/lib/types/sections'; // Renaming type for clarity
import { getId } from '@/lib/utils/helper';

// Define a more specific type for video items if needed, or ensure ProjectType in FeaturedVideosSectionType is compatible.
// For example:
// interface VideoType {
//   id: string;
//   name: string; // or title
//   description: string;
//   thumbnailUrl: string; // formerly img
//   genre: string;
//   duration: string;
//   url: string;
// }

// interface FeaturedVideosSectionType {
//   title: string;
//   videos: VideoType[];
// }


const featuredVideosSection: FeaturedVideosSectionType = {
  title: 'Trending Now',
  videos: [ // Renamed from 'projects' to 'videos'
    {
      id: 'video1', // Using static IDs for now, getId() can also be used.
      name: 'Cyber City Nights', // Keep 'name' if ProjectCard.tsx uses it, or change to 'title'
      description: 'A detective uncovers a conspiracy in a neon-lit metropolis of the future.',
      img: 'https://life-kit.vercel.app/images/og.png', // Placeholder, ideally a video thumbnail
      genre: 'Sci-Fi, Thriller',
      duration: '1h 55m',
      url: '#video1-link', // Placeholder link
      // Removed: tasks, tags (replaced by genre)
    },
    {
      id: 'video2',
      name: 'Lost Kingdom of Eldoria',
      description: 'An intrepid explorer searches for a mythical lost kingdom said to hold ancient powers.',
      img: 'https://www.valuemetrix.io/images/og.png', // Placeholder
      genre: 'Adventure, Fantasy',
      duration: '2h 10m',
      url: '#video2-link',
    },
    {
      id: 'video3',
      name: 'The Last Recipe',
      description: 'A young chef inherits a mysterious cookbook that leads to a culinary adventure with a touch of magic.',
      img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png', // Placeholder
      genre: 'Comedy, Family, Fantasy',
      duration: '1h 45m',
      url: '#video3-link',
    },
    {
      id: 'video4',
      name: 'Space Drift',
      description: 'The sole survivor of a spaceship disaster must navigate the perils of deep space to find a way home.',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png', // Placeholder
      genre: 'Sci-Fi, Drama',
      duration: '2h 05m',
      url: '#video4-link',
    },
  ],
};

export default featuredVideosSection;
