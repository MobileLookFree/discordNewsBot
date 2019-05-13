import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className='menu'>
      <ul>
        <li><a title = {props.menu.commands} href="#commands">{props.menu.commands}</a></li>
        <li><a title = {props.menu.about} href="#about">{props.menu.about}</a></li>
      </ul>
    </div>
  );
};

export default Menu;
