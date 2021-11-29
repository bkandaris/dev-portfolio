import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
  return (
    <div className='card-wrapper'>
      <div className='image-wrapper'>
        <img
          className='project-pic'
          src={props.projectImage}
          alt={props.projectImageAlt}></img>
      </div>
      <div className='project-desc-wrapper'>
        <h3>{props.projectTitle}</h3>
        <p>{props.projectDescription}</p>
        <h3>Technologies Used</h3>
        <div className='tech-used'>
          {props.technologiesUsed.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className='icon-wrapper'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
          <FontAwesomeIcon icon={faLink} size='2x' />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
