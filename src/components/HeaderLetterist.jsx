import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import "./HeaderLetterist.css";

export default function HeaderLetterist() {
  const { getTranslationKey } = useLanguage();
  const translationKey = getTranslationKey();
  const t = translations[translationKey];

  return (
    <div
      className="header-letterist"
      style={{
        backgroundImage: "url('/branches-olivier.png')",
        backgroundPosition: "center",
        backgroundSize: "cover", // Changed back to "cover" for full coverage
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5f4ee",
      }}
    >
      <div className="header-content">
        <div className="vertical-names">
          <div className="vertical-prenom vianney">
            <span>{t.header.vianney}</span>
          </div>
          <div className="vertical-prenom cilene">
            <div style={{ height: "110px" }}></div>
          </div>
          <div className="vertical-prenom cilene">
            <span>{t.header.cilene}</span>
          </div>
        </div>
        <div className="header-main">
          <h1 className="header-accroche">{t.header.title}</h1>
        </div>
      </div>
    </div>
  );
}
