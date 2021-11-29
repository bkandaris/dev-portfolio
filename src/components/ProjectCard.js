import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
{
  /* <FontAwesomeIcon icon={faGithub} /> */
}

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
        {props.technologiesUsed.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
