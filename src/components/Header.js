import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Web Developer</h1>
        <Typed
          className='typed-text'
          strings={['Web developer', 'something', 'another something']}
          typeSpeeds={40}
          backSpeed={100}
          loop></Typed>
        <button className='button-header'>Contact Me</button>
      </div>
    </div>
  );
};

export default Header;
