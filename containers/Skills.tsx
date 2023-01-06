import { Skill, Wrapper } from '../components';
import { skillsSection } from '../utils/portfolio';
import { getId } from '../utils/helper';
import { useContext } from 'react';
import themeContext from '../context/theme-context';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDark } = useContext(themeContext);

  return (
    <Wrapper tag="section" id="skills">
      <h2 className="heading-secondary text-center">{title}</h2>

      <div className="space-y-32">
        {skills.map(({ lottie, softwareSkills, points, title }, i) => (
          <Skill
            key={getId()}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDark ? 'dark' : 'light']}
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
