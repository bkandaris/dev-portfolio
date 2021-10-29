import React from 'react';

const ProjectCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.projectImage} alt={props.projectImageAlt}></img>
      </div>
      <div>
        <h3>{props.projectTitle}</h3>
        <p>{props.projectDescription}</p>
        <div>
          <p>{props.hostedAt}</p>
          <p>{props.githubLink}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
