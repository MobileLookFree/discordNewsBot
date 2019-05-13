import React from 'react';
import './Header.css';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import LanguageButton from './LanguageButton/LanguageButton';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

const Header = (props) => {
  return (
    <div className='header'>
        <Logo title={props.header.logoTitle} />
        <Menu menu={props.header.menu} />
        <LanguageButton text={props.header} openLanguageSwitcher={props.openLanguageSwitcher} />
        {props.languageSwitcherOpened === true ? (
          <LanguageSwitcher setEnglish={props.setEnglish} setRussian={props.setRussian} />
        ) : null}
      </div>
  );
};

export default Header;
