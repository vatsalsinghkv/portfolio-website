import { TabList } from '@/components';

import { getSectionAnimation } from '../animations';
import { experienceSection } from '../utils/portfolio';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <TabList experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
