import React from 'react';
import './DownloadButton.css';

const DownloadButton = (props) => {
  return (
    <a 
      href='https://discordapp.com/download'
      className='download-button'
    >
      {props.title}
    </a>
  );
};

export default DownloadButton;