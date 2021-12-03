import React from 'react';

const AboutMe = () => {
  return (
    <div className='about-wrapper' id='about-me'>
      <div className='about-info-wrapper'>
        <div className='about-left'>
          <h3 className='about-header-left'>About Me</h3>
          <p className='about-text'>
            Hello, my name is Ben and I have a passion for web development and
            learning. A few years ago I discovered the magic of turning code
            into web applications. There is something exciting about being able
            to bring your ideas to life through technology.
          </p>
          <p className='about-text'>
            After self-teaching for a while, I joined a full stack web
            development bootcamp to improve my skills. I learned not only the
            latest technologies, but how to build applications with a team.
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
