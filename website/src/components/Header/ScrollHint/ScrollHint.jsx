import React from 'react';
import './ScrollHint.css';

const ScrollHint = (props) => {
  return (
  <div className='sroll-down'>{props.text.scrollDown}
    <a className="commands-button" href="#commands">{props.text.commands}</a>
  </div>
  );
};

export default ScrollHint;
