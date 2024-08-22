import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Horoscope: "Horoscope",
      zodiac: {
        aries: "Aries",
        taurus: "Taurus",
        gemini: "Gemini",
        cancer: "Cancer",
        leo: "Leo",
        virgo: "Virgo",
        libra: "Libra",
        scorpio: "Scorpio",
        sagittarius: "Sagittarius",
        capricorn: "Capricorn",
        aquarius: "Aquarius",
        pisces: "Pisces",
      },
      period: {
        aries: "Mar 21 - Apr 19",
        taurus: "Apr 20 - May 20",
        gemini: "May 21 - Jun 20",
        cancer: "Jun 21 - Jul 22",
        leo: "Jul 23 - Aug 22",
        virgo: "Aug 23 - Sep 22",
        libra: "Sep 23 - Oct 22",
        scorpio: "Oct 23 - Nov 21",
        sagittarius: "Nov 22 - Dec 21",
        capricorn: "Dec 22 - Jan 19",
        aquarius: "Jan 20 - Feb 18",
        pisces: "Feb 19 - Mar 20",
      },
    },
  },
  ru: {
    translation: {
      Horoscope: "Гороскоп",
      zodiac: {
        aries: "Овен",
        taurus: "Телец",
        gemini: "Близнецы",
        cancer: "Рак",
        leo: "Лев",
        virgo: "Дева",
        libra: "Весы",
        scorpio: "Скорпион",
        sagittarius: "Стрелец",
        capricorn: "Козерог",
        aquarius: "Водолей",
        pisces: "Рыбы",
      },
      period: {
        aries: "21 Мар - 19 Апр",
        taurus: "20 Апр - 20 Май",
        gemini: "21 Май - 20 Июн",
        cancer: "21 Июн - 22 Июл",
        leo: "23 Июл - 22 Авг",
        virgo: "23 Авг - 22 Сен",
        libra: "23 Сен - 22 Окт",
        scorpio: "23 Окт - 21 Ноя",
        sagittarius: "22 Ноя - 21 Дек",
        capricorn: "22 Дек - 19 Янв",
        aquarius: "20 Янв - 18 Фев",
        pisces: "19 Фев - 20 Мар",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
