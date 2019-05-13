import React from 'react';
import './AddButton.css';

const AddButton = (props) => {
  return (
    <a 
      href='https://discordapp.com/api/oauth2/authorize?client_id=527857521520803841&permissions=0&scope=bot'
      className='add-button'
    >
      {props.title}
    </a>
  );
};

export default AddButton;
