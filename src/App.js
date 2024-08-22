import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './Pages/Home/Home';
import './App.css';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t('Horoscope')}</h1> 
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </header>
      <Home />
    </div>
  );
};

export default App;
