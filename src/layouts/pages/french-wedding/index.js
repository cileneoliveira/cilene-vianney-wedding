import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../data/translations";
import HeaderNavBar from "components/HeaderNavBar";
import HeaderLetterist from "components/HeaderLetterist";
import ProgrammeTimeline from "components/ProgrammeTimeline";
import InfosPratiques from "components/InfosPratiques";
import LocationCard from "components/LocationCard";

function FrenchWedding() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage]; // Use 'fr' or 'pt' for French wedding

  return (
    <div>
      <HeaderNavBar />
      <HeaderLetterist />
      {/* <section className="rsvp-section" id="rsvp">
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
      </section> */}
      {/* <ProgrammeTimeline /> */}
      {/* <InfosPratiques /> */}
      <LocationCard />
      {/* Ajoute ici le reste de ta page */}
    </div>
  );
}

export default FrenchWedding; 