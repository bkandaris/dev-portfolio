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
}) => {
  const [myProjects, setMyProjects] = useState(listedProjects);

  console.log('listedProjects', listedProjects);
  console.log('myProjects', myProjects);
  return (
    <div>
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
          />
        );
      })}
    </div>
  );
};

export default Projects;
