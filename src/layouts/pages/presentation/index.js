import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../data/translations";
import HeaderNavBar from "components/HeaderNavBar";
import HeaderLetterist from "components/HeaderLetterist";
import ProgrammeTimeline from "components/ProgrammeTimeline";
import InfosPratiques from "components/InfosPratiques";

function Presentation() {
  const { getTranslationKey } = useLanguage();
  const translationKey = getTranslationKey();
  const t = translations[translationKey];

  return (
    <div>
      <HeaderNavBar />
      <HeaderLetterist />
      <section className="rsvp-section" id="rsvp">
        <h2 className="rsvp-titre">{t.rsvp.title}</h2>
        <p>
          {t.rsvp.description}
          <br />
          <a
            className="rsvp-lien"
            href="https://cilene-vianney.com/rsvp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.rsvp.link}
          </a>
          <br />
          <small>{t.rsvp.deadline}</small>
        </p>
      </section>
      <ProgrammeTimeline />
      <InfosPratiques />
      {/* Ajoute ici le reste de ta page */}
    </div>
  );
}

export default Presentation;
