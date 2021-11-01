import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Hi, I'm Ben</h1>
        <Typed
          className='typed-text'
          strings={['I am a web developer and programmer', 'I enjoy learning and improving my skills every day', 'I create full stack applications']}
          typeSpeeds={40}
          backSpeed={100}
          loop></Typed>
        <button className='button-header'>Contact Me</button>
      </div>
    </div>
  );
};

export default Header;
