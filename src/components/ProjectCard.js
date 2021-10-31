import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = (props) => {
  return (
    <div className='card-wrapper'>
      <div>
        <img src={props.projectImage} alt={props.projectImageAlt}></img>
      </div>
      <div>
        <h3>{props.projectTitle}</h3>
        <p>{props.projectDescription}</p>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <p>{props.hostedAt}</p>
          <p>{props.githubLink}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
