import React from "react";
import HeaderNavBar from "components/HeaderNavBar";
import HeaderLetterist from "components/HeaderLetterist";
import LocationCard from "components/LocationCard";

function FrenchWedding() {
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
