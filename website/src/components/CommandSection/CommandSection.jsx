import React from 'react';
import './CommandSection.css';

import Command from '../CommandSection/Command/Command';

const CommandSection = (props) => {
  return (
    <div className='command-section'>
      <h1 id='commands'>{props.text.title}</h1>
      {props.text.commands.map((commands) => (
        <Command about={commands} key={commands.commandID}/>
      ))}
    </div>
  );
};

export default CommandSection;
