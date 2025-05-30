'use client';

// Updated import path and variable name
import featuredVideosSection from '@/lib/content/featured-videos';

import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';

import { getSectionAnimation } from '@/styles/animations';

const FeaturedProjects = () => {
  return (
    <Wrapper id="projects" {...getSectionAnimation}>
      <div className="mb-20 space-y-3 text-center lg:text-left">
        <h2 className="heading-secondary !mb-0 capitalize">
          {featuredVideosSection.title}
        </h2>

        <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">
          featured videos {/* Changed text from "featured projects" */}
        </p>
      </div>

      <div className="space-y-10 md:space-y-16 lg:space-y-36">
        {/* Updated to iterate over .videos instead of .projects */}
        {/* Props passed to FeaturedProject might need adjustment if its definition changed based on video structure */}
        {featuredVideosSection.videos.map((video, i) => (
          <FeaturedProject
            key={video.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...video}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
