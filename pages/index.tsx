import type { NextPage } from 'next';
import { SEO } from '../components';
import {
  About,
  Email,
  Experience,
  Hero,
  Navbar,
  Skills,
  Social,
  Contact,
  Footer,
  Projects,
} from '../containers';
import { seoData } from '../utils/portfolio';

/**
 * TODO: Add focus style
 * TODO: Add animations with framer motion
 * TODO: Find lottie files for dark mode
 * TODO: Create Dark Mode feature
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <SEO {...seoData} />
      <Navbar />
      <main className="mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <Social />
      <Email />
    </>
  );
};

export default Home;
