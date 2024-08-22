import React from "react";
import "./Horockope.css";
import { useTranslation } from "react-i18next";

const Horoscope = ({ sign, description, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{t(`zodiac.${sign}`)}</h2> {/* Переводим знак зодиака */}
        <p>{description}</p>
        <button onClick={onClose}>{t("back")}</button>
      </div>
    </div>
  );
};

export default Horoscope;
