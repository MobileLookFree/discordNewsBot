import React from 'react';
import './AboutSection.css';

const AboutSection = (props) => {
  return (
    <div className='about-section'>
      <div className='about-content'>
        <h1 id='about'>{props.text.title}</h1>
        <p>Newser<code className='tag'>#7273</code>{props.text.discription}</p>
      </div>
    </div>
  );
};

export default AboutSection;
