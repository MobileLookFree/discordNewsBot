import React from 'react';
import './AddSection.css';

import NewserLogo from './NewserLogo/NewserLogo';
import AddButton from './AddButton/AddButton';
import DownloadButton from './DownloadButton/DownloadButton';

const AddSection = (props) => {
  return (
    <div className='add-section'>
      <div className='container'>
        <NewserLogo />
        <div className='info'>
          <h1>
            Newser<code className='tag'>#7273</code>
          </h1>
          <h2>{props.text.title}</h2>
          <p>{props.text.info}</p>
          <img src="https://discordbots.org/api/widget/status/527857521520803841.svg" alt=""></img>
          <img src="https://discordbots.org/api/widget/servers/527857521520803841.svg" alt=""></img>
          {/* <img src="https://discordbots.org/api/widget/servers/272937604339466240.svg" alt=""></img> */}
        </div>
        <div className='button-wrapper'>
          <AddButton title={props.text.addButton} />
          <DownloadButton title={props.text.downloadButton} />
        </div>
      </div>
    </div>
  );
};

export default AddSection;
