import { Skill, Wrapper } from '../components';
import { skillsSection } from '../utils/portfolio';
import { getId } from '../utils/helper';

const Skills = () => {
  const { title, skills } = skillsSection;
  return (
    <Wrapper tag="section" id="skills">
      <h2 className="heading-secondary text-center">{title}</h2>

      <div className="space-y-32">
        {skills.map(({ lottie, softwareSkills, points, title }, i) => (
          <Skill
            key={getId()}
            className={!(i % 2) ? 'lg:flex-row-reverse' : ''}
            lottie={lottie}
            skills={softwareSkills}
            points={points}
            title={title}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
