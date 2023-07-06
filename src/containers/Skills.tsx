import { getSectionAnimation } from '../animations';
import { Skill, Wrapper } from '../components';
import themeContext from '../context/theme-context';
import { skillsSection } from '../utils/portfolio';
import { useContext } from 'react';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDark } = useContext(themeContext);

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-32">
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDark ? 'dark' : 'light']}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
