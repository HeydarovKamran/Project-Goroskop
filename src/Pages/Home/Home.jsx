import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Zodiak from "../../Components/Zodiak/Zodiak";
import Horoscope from "../../Components/Horoskope/Horoskope";
import axios from "axios";

const zodiacIcons = {
  aries: "./Img/aries.png",
  taurus: "./Img/taurus.png",
  gemini: "./Img/gemini.png",
  cancer: "./Img/cancer.png",
  leo: "./Img/leo.png",
  virgo: "./Img/virgo.png",
  libra: "./Img/libra.png",
  scorpio: "./Img/scorpio.png",
  sagittarius: "./Img/sagittarius.png",
  capricorn: "./Img/capricorn.png",
  aquarius: "./Img/aquarius.png",
  pisces: "./Img/pisces.png",
};

const Home = () => {
  const { t, i18n } = useTranslation();
  const [selectedSign, setSelectedSign] = useState(null);
  const [horoscopeDescription, setHoroscopeDescription] = useState("");

  const getZodiacSigns = () => [
    { sign: "aries", dateRange: t("period.aries"), icon: zodiacIcons.aries },
    { sign: "taurus", dateRange: t("period.taurus"), icon: zodiacIcons.taurus },
    { sign: "gemini", dateRange: t("period.gemini"), icon: zodiacIcons.gemini },
    { sign: "cancer", dateRange: t("period.cancer"), icon: zodiacIcons.cancer },
    { sign: "leo", dateRange: t("period.leo"), icon: zodiacIcons.leo },
    { sign: "virgo", dateRange: t("period.virgo"), icon: zodiacIcons.virgo },
    { sign: "libra", dateRange: t("period.libra"), icon: zodiacIcons.libra },
    { sign: "scorpio", dateRange: t("period.scorpio"), icon: zodiacIcons.scorpio },
    { sign: "sagittarius", dateRange: t("period.sagittarius"), icon: zodiacIcons.sagittarius },
    { sign: "capricorn", dateRange: t("period.capricorn"), icon: zodiacIcons.capricorn },
    { sign: "aquarius", dateRange: t("period.aquarius"), icon: zodiacIcons.aquarius },
    { sign: "pisces", dateRange: t("period.pisces"), icon: zodiacIcons.pisces },
  ];

  useEffect(() => {
    // Optionally handle language change effects here
  }, [i18n.language]);

  const handleZodiacClick = async (sign) => {
    try {
      const response = await axios.post(
        "https://poker247tech.ru/get_horoscope/",
        {
          sign: sign || undefined,
          language: i18n.language === "en" ? "translated" : "original",
          period: "today",
        }
      );
      setHoroscopeDescription(response.data.description || "");
      setSelectedSign(sign || null);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedSign(null);
  };

  return (
    <div className="zodiac-container">
      {getZodiacSigns().map((zodiac) => (
        <Zodiak
          key={zodiac.sign}
          sign={t(`zodiac.${zodiac.sign}`)}
          dateRange={zodiac.dateRange}
          icon={zodiac.icon}
          onClick={() => handleZodiacClick(zodiac.sign)}
        />
      ))}
      {selectedSign && (
        <Horoscope
          sign={selectedSign}
          description={horoscopeDescription}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
