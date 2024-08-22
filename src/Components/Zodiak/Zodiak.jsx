import React from 'react';
import './Zodiak.css';
import { useTranslation } from 'react-i18next';

const Zodiak = ({ sign, dateRange, icon, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="zodiac-block" onClick={() => onClick(sign)}>
      <img src={icon} alt={`${sign} icon`} className="zodiac-icon" />
      <div className="zodiac-info">
        <h3>{t(sign)}</h3>
        <p>{dateRange}</p>
      </div>
    </div>
  );
};

export default Zodiak;
