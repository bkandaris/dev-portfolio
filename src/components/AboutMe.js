import React from 'react';

const AboutMe = () => {
  return (
    <div className='about-wrapper' id='about-me'>
      <div className='about-info-wrapper'>
        <div className='about-left'>
          <h3 className='about-header-left'>About Me</h3>
          <p className='about-text'>
            Hello! My name is Ben and I enjoy web development. Starting in 2018
            I discovered the magic of turning code into web applications.
          </p>
          <p className='about-text'>
            After self-teaching for a few months, I decided to join a web
            development and computer science bootcamp to improve my skills. Now
            that I have finished I look forward to starting a career in web
            development!
          </p>
        </div>
        <div className='about-right'>
          <ul className='skills'>
            <h3 className='about-header-right'>Skills</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>LESS / SCSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
            <li>Redux / Context API</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className='circle'></div>
      </div>
    </div>
  );
};

export default AboutMe;
