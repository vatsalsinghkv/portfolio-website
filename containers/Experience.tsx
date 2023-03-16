import { motion } from 'framer-motion';
import { Tablist } from '../components';
import { getSectionAnimation } from '../animations';
import { experienceSection } from '../utils/portfolio';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-32 max-w-2xl mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <Tablist experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
