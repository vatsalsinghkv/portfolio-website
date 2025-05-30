'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define a simple PlayIcon SVG component
const PlayIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 text-white drop-shadow-lg md:w-16 md:h-16" // Added drop-shadow for better visibility
  >
    <path
      d="M25.6001 44.7999V19.1999L44.8001 31.9999L25.6001 44.7999Z"
      fill="currentColor" // Use currentColor to inherit text color (white in this case)
    />
  </svg>
);

// Assuming ProjectType will be updated or a new VideoType will be used.
// For now, destructuring props based on the 'video' object structure from 'featured-videos.ts'.
const ProjectCard = ({
  name, // title of the video
  url,  // link to the video (e.g., player page)
  img,  // thumbnail image
  genre,
  duration,
  // Removed: repo, year, tags
  ...rest
}: Omit<ProjectType, 'repo' | 'year' | 'tags'> & { genre?: string; duration?: string } & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      {/* The whole card is a button/link to the video URL */}
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element (e.g. if we add other links inside the card later)
          if ((e.target as HTMLElement).closest('a')) return;
          if (url) window.open(url, '_blank'); // Open URL in new tab
        }}
        className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-background-secondary focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background-primary" // Changed bg color, added focus rings
      >
        {/* Image container with hover effect for play icon */}
        <div className="relative overflow-hidden h-[200px]">
          <Image
            src={img || '/placeholder-image.jpg'} // Fallback image
            alt={name || 'Video thumbnail'} // Fallback alt
            width={300}
            height={200} // Adjusted height to match container
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
          />
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100 group-focus-within:opacity-100">
            <PlayIcon />
          </div>
        </div>

        {/* Text content area */}
        <div className="p-4 py-3 space-y-1">
          {/* Top line: Genre and External Link (optional, if URL is for an external page) */}
          <div className="flex items-center justify-between text-xs">
            <p className="font-mono capitalize text-text-secondary">{genre}</p>
            {/* Keeping external link icon if url is meant to take user away from the current site */}
            {url && (
              <a
                href={url}
                className="block duration-200 text-text-secondary hover:text-accent"
                target="_blank"
                rel="noopener noreferrer" // Good practice for target="_blank"
                onClick={(e) => e.stopPropagation()} // Prevent card click handler if icon is clicked
              >
                <Icon icon="ci:external-link" width={18} height={18} />
              </a>
            )}
          </div>

          {/* Main Title */}
          <h4 className="font-medium capitalize duration-200 text-text-primary group-hover:text-accent">
            {name}
          </h4>

          {/* Bottom line: Duration */}
          {duration && (
            <p className="text-xs text-text-secondary">{duration}</p>
          )}
        </div>
      </button>
    </motion.div>
  ) : (
    <></> // Placeholder for non-domLoaded state
  );
};

export default ProjectCard;
