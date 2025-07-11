import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import "./LocationCard.css";

export default function LocationCard() {
  const { getTranslationKey } = useLanguage();
  const translationKey = getTranslationKey();
  const t = translations[translationKey];

  return (
    <section className="location-card-section">
      <div className="location-card">
        <div className="location-header">
          <h2 className="location-title">{t.location.title}</h2>
        </div>
        <div className="location-content">
          <div className="venue-info">
            <h3 className="venue-name">{t.location.venue.name}</h3>
            <p className="venue-date">{t.location.venue.date}</p>
            <p className="venue-address">{t.location.venue.address}</p>
            <p className="venue-description">{t.location.venue.description}</p>
          </div>
          <div className="location-map">
            <iframe
              title={t.location.venue.name}
              src={t.location.venue.mapUrl}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 