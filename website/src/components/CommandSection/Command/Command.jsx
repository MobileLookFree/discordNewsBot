import React from 'react';
import './Command.css';

const Command = (props) => {
  return (
    <div className='command'>
      <div className='command-name'>
        <h2 className='commandID'>
          <span className='prefix'>!</span>
          {props.about.commandID}
        </h2>
      </div>
      <div className='discription'>
        <p>{props.about.discription}</p>
        <p className="message-sample">{props.about.message}</p>
      </div>
    </div>
  );
};

export default Command;
