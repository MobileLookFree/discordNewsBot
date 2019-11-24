import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import ScrollHint from './components/Header/ScrollHint/ScrollHint';
import AddSection from './components/AddSection/AddSection';
import CommandSection from './components/CommandSection/CommandSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import translations from './translations';

class App extends Component {
    state = {
      language: 0,
      languageSwitcherOpened: false
    };

  openLanguageSwitcher = () => {
    this.setState(prevState => ({ 
      ...prevState, 
      languageSwitcherOpened: !prevState.anguageSwitcherOpened 
    }));
  };

  closeLanguageSwitcherOffClick = () => {
    const { languageSwitcherOpened } = this.state;
    if (languageSwitcherOpened) {
      this.setState(prevState => ({
        ...prevState,
        languageSwitcherOpened: false
      }));
    }
  };

  setEnglish = () => {
    this.setState(prevState => ({ ...prevState, language: 0 }));
    localStorage.setItem('language', 0);
    this.openLanguageSwitcher();
  };

  setRussian = () => {
    this.setState(prevState => ({ ...prevState, language: 1 }));
    localStorage.setItem('language', 1);
    this.openLanguageSwitcher();
  };

  setStateFromLocalStorage() {
    if (localStorage.hasOwnProperty('language')) {
      const value = Number(localStorage.getItem('language'));
      this.setState(prevState => ({ ...prevState, language: value }));
    }
  }

  componentDidMount() {
    this.setStateFromLocalStorage();
  }

  render() {
    const { language, languageSwitcherOpened } = this.state;
    return (
      <div className='app' onClick={this.closeLanguageSwitcherOffClick}>
        <Header
          header={translations[language].header}
          languageSwitcherOpened={languageSwitcherOpened}
          setEnglish={this.setEnglish}
          setRussian={this.setRussian}
          openLanguageSwitcher={this.openLanguageSwitcher}
        />
        <ScrollHint text={translations[language].header.menu} />
        <AddSection text={translations[language].addSection} />
        <CommandSection text={translations[language].commandSection} />
        <AboutSection text={translations[language].aboutSection} />
        <Footer text={translations[language].footer} />
      </div>
    );
  }
}

export default App;
