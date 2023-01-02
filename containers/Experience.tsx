import { Tablist } from '../components';
import { experienceSection } from '../utils/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-32 max-w-2xl mx-auto">
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <Tablist experiences={experienceSection.experiences} />
    </section>
  );
};

export default Experience;
