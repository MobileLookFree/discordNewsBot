import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = (props) => {
  return (
    <div className='language-switcher'>
      <ul>
        <li className='en' title='En' onClick={props.setEnglish}>
          <svg width='36px' height='24px' viewBox='0 0 36 24' version='1.1'>
            <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
              <rect id='Rectangle' fill='#E95656' x='0' y='0' width='36' height='24' rx='4' />
              <rect id='Rectangle' fill='#F8F8F8' x='0' y='5' width='36' height='4.5' />
              <rect id='Rectangle-Copy-2' fill='#F8F8F8' x='0' y='14.5' width='36' height='4.5' />
              <path
                d='M4,0 L15,0 L15,14.5 L0,14.5 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z'
                id='Rectangle-Copy'
                fill='#5768FB'
              />
            </g>
          </svg>
          English
        </li>
        <li className='ru' title='Ru' onClick={props.setRussian}>
          <svg width='36px' height='24px' viewBox='0 0 36 24' version='1.1'>
            <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
              <rect id='Rectangle' fill='#F8F8F8' x='0' y='0' width='36' height='24' rx='4' />
              <path
                d='M0,16 L36,16 L36,20 C36,22.209139 34.209139,24 32,24 L4,24 C1.790861,24 2.705415e-16,22.209139 0,20 L0,16 Z'
                id='Rectangle'
                fill='#E95656'
              />
              <rect id='Rectangle-Copy' fill='#5768FB' x='0' y='8' width='36' height='8' />
            </g>
          </svg>
          Русский
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
