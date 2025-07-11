import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import "./HeaderNavBar.css";

export default function HeaderNavBar() {
  const { currentLanguage, changeLanguage, getTranslationKey } = useLanguage();
  const location = useLocation();
  const translationKey = getTranslationKey();
  const t = translations[translationKey];

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  const isFrenchWedding = location.pathname.includes('/france');
  const isBrazilianWedding = location.pathname.includes('/brasil');

  // Wedding button labels based on language
  const getWeddingLabels = () => {
    if (currentLanguage === 'pt') {
      return {
        france: "FRANÇA",
        brazil: "BRASIL"
      };
    } else {
      return {
        france: "FRANCE",
        brazil: "BRÉSIL"
      };
    }
  };

  const weddingLabels = getWeddingLabels();

  return (
    <header className="header-navbar">
      <div className="header-navbar-inner">
        <div className="navbar-names">
          <span className="navbar-prenom">{t.header.cilene}</span>
          <span className="navbar-sep">|</span>
          <span className="navbar-prenom">{t.header.vianney}</span>
        </div>
        <nav>
          <ul className="menu-list">
            {/* <li><a href="#rsvp">{t.nav.rsvp}</a></li> */}
            {/* <li><a href="#programme">{t.nav.programme}</a></li> */}
            {/* <li><a href="#infos">{t.nav.infos}</a></li> */}
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </nav>
        <div className="header-wedding-switch">
          <Link 
            to="/france"
            className={`wedding-btn ${isFrenchWedding ? 'active' : ''}`}
          >
            {weddingLabels.france}
          </Link>
          <Link 
            to="/brasil"
            className={`wedding-btn ${isBrazilianWedding ? 'active' : ''}`}
          >
            {weddingLabels.brazil}
          </Link>
        </div>
        <div className="header-lang-switch">
          <button 
            className={`lang-btn ${currentLanguage === 'fr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('fr')}
          >
            FR
          </button>
          <button 
            className={`lang-btn ${currentLanguage === 'pt' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('pt')}
          >
            PT
          </button>
        </div>
      </div>
    </header>
  );
}
