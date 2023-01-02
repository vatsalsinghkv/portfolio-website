import { useState } from 'react';
import { Button, ProjectCard, Wrapper } from '../components';
import { noOfProjectsInitially } from '../utils/config';
import { getId, sortByYear } from '../utils/helper';
import { projectsSection } from '../utils/portfolio';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [topProjects, setTopProjects] = useState(
    projects.slice(0, noOfProjectsInitially)
  );

  return (
    <Wrapper id="projects">
      <h2 className="heading-secondary text-center !mb-12">{title}</h2>
      <div className="grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center">
        {sortByYear(topProjects).map((project) => (
          <ProjectCard {...project} key={getId()} />
        ))}
      </div>
      {projects.length > noOfProjectsInitially && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => {
            if (projects.length === topProjects.length) {
              setTopProjects(projects.slice(0, 6));
            } else {
              setTopProjects(projects);
            }
          }}
        >
          {projects.length === topProjects.length ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
