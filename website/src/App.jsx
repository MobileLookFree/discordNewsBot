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
  constructor(props) {
    super(props);

    this.state = {
      language: 0,
      languageSwitcherOpened: false
    };

    this.setRussian = this.setRussian.bind(this);
    this.setEnglish = this.setEnglish.bind(this);
    this.openLanguageSwitcher = this.openLanguageSwitcher.bind(this);
    this.closeLanguageSwitcherOffClick = this.closeLanguageSwitcherOffClick.bind(this);
  }

  openLanguageSwitcher = () => {
    this.setState((state) => ({ languageSwitcherOpened: !state.languageSwitcherOpened }));
  };

  closeLanguageSwitcherOffClick = () => {
    if (this.state.languageSwitcherOpened === true) {
      this.setState((state) => ({
        languageSwitcherOpened: (state.languageSwitcherOpened = false)
      }));
    }
  };

  setEnglish = () => {
    this.setState((state) => ({ language: (state.language = 0) }));
    localStorage.setItem('language', 0);
    this.openLanguageSwitcher();
  };

  setRussian = () => {
    this.setState((state) => ({ language: (state.language = 1) }));
    localStorage.setItem('language', 1);
    this.openLanguageSwitcher();
  };

  setStateFromLocalStorage() {
    if (localStorage.hasOwnProperty('language')) {
      let value = Number(localStorage.getItem('language'));
      this.setState((state) => ({ language: (state.language = value) }));
    }
  }

  componentDidMount() {
    this.setStateFromLocalStorage();
  }

  render() {
    return (
      <div className='app' onClick={this.closeLanguageSwitcherOffClick}>
        <Header
          header={translations[this.state.language].header}
          languageSwitcherOpened={this.state.languageSwitcherOpened}
          setEnglish={this.setEnglish}
          setRussian={this.setRussian}
          openLanguageSwitcher={this.openLanguageSwitcher}
        />
        <ScrollHint text={translations[this.state.language].header.menu} />
        <AddSection text={translations[this.state.language].addSection} />
        <CommandSection text={translations[this.state.language].commandSection} />
        <AboutSection text={translations[this.state.language].aboutSection} />
        <Footer text={translations[this.state.language].footer} />
      </div>
    );
  }
}

export default App;
