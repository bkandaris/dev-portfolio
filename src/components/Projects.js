import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import listedProjects from './listedprojects';

const Projects = ({
  projectImage,
  projectImageAlt,
  projectTitle,
  projectDescription,
  hostedAt,
  githubLink,
  technologiesUsed,
}) => {
  const [myProjects, setMyProjects] = useState(listedProjects);

  console.log('listedProjects', listedProjects);
  console.log('myProjects', myProjects);
  return (
    <div id='projects'>
      <h3 className='projects-header'>Projects</h3>
      {myProjects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            projectImage={project.projectImage}
            projectImageAlt={project.projectImageAlt}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            hostedAt={project.hostedAt}
            githubLink={project.githubLink}
            technologiesUsed={project.technologiesUsed}
          />
        );
      })}
    </div>
  );
};

export default Projects;
