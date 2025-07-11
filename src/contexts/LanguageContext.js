import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  // Detect wedding type from URL
  const getWeddingType = () => {
    if (location.pathname.includes('/brasil')) {
      return 'brazilian';
    } else if (location.pathname.includes('/france')) {
      return 'french';
    }
    return 'french'; // default
  };

  const currentWedding = getWeddingType();

  // Get the correct translation key based on wedding and language
  const getTranslationKey = () => {
    if (currentWedding === 'french') {
      return currentLanguage; // 'fr' or 'pt'
    } else if (currentWedding === 'brazilian') {
      return currentLanguage === 'fr' ? 'br_fr' : 'br_pt';
    }
    return 'fr'; // fallback
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const value = {
    currentLanguage,
    currentWedding,
    changeLanguage,
    getTranslationKey,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 