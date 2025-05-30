import {
  FeaturedProjects,
  Hero,
  Layout,
} from '@/containers'; // Removed About, Contact, Experience, Projects, Skills

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedProjects />
        {/*
          Other sections like About, Skills, Experience, Projects, Contact
          have been removed as they are not suitable for a streaming platform's main page.
          New streaming-specific sections could be added here later.
        */}
      </Layout>
    </>
  );
};

export default Home;
