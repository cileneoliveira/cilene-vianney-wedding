import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import "./InfosPratiques.css";

export default function InfosPratiques() {
  const { getTranslationKey } = useLanguage();
  const translationKey = getTranslationKey();
  const t = translations[translationKey];

  return (
    <section className="infos-section" id="infos">
      <h2 className="infos-titre">{t.practical.title}</h2>

      <div className="infos-bref">
        {/* ENFANTS */}
        <div className="infos-block">
          <span className="infos-theme">Enfants bienvenus</span>
          <p>
            Les enfants sont les bienvenus toute la semaine et pendant le week-end ! Un espace jeux
            leur sera dédié le samedi.
            <br />
            <span style={{ fontStyle: "italic", color: "#c99722" }}>
              Service baby-sitting possible sur demande.
            </span>
          </p>
        </div>

        {/* LIEU */}
        <div className="infos-block">
          <span className="infos-theme">Lieu</span>
          <p>
            <strong>Château de Vaucouleurs</strong>, Puget-sur-Argens (Var).
            <br />
            Parking sur place.
            <br />
            <strong>Accès :</strong> voiture (A8, sortie 37) ou gare de Fréjus (10 km).
          </p>
          <div className="carte-container">
            <iframe
              title="Carte Château de Vaucouleurs"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.123456789!2d6.665654!3d43.463556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c123456789ab%3A0xabcdef1234567890!2sChâteau%20de%20Vaucouleurs!5e0!3m2!1sfr!2sfr!4v1610000000000!5m2!1sfr!2sfr"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* NAVETTE */}
        <div className="infos-block">
          <span className="infos-theme">Navette</span>
          <p>
            Une navette reliera la gare de Fréjus et le château le samedi (et le dimanche midi).
            <br />
            Merci de nous indiquer lors de votre réponse si vous souhaitez en profiter.
            <br />
            <span style={{ color: "#c99722" }}>
              Les horaires seront précisés un mois avant le mariage.
            </span>
          </p>
        </div>
      </div>

      {/* AUTRES INFOS EN ACCORDÉON */}
      <Accordion className="infos-accordion" disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="infos-theme">{t.practical.accommodation.title}</span>
        </AccordionSummary>
        <AccordionDetails>
          <p>{t.practical.accommodation.description}</p>
          <ul>
            {t.practical.accommodation.hotels.map((hotel, index) => (
              <li key={index}>
                <strong>{hotel}</strong>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="infos-accordion" disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="infos-theme">{t.practical.transport.title}</span>
        </AccordionSummary>
        <AccordionDetails>
          <p>{t.practical.transport.description}</p>
          <ul>
            {t.practical.transport.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="infos-accordion" disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="infos-theme">Avant le week-end</span>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Nous serons sur place toute la semaine précédent le mariage, et plusieurs activités
            (balades, pique-niques, plage…) seront proposées. <br />
            <br />
            <strong>Tous sont les bienvenus !</strong>
            <br />
            Chacun gère ses repas et son hébergement pour ces jours-là (pique-nique, auberge
            espagnole, etc).
            <br />
            Un programme sera diffusé début juillet selon la météo et les envies.
          </p>
        </AccordionDetails>
      </Accordion>

      {/* CONTACT & CADEAU ULTRA-MINIMALISTE */}
      <section className="infos-contact-minimaliste" id="contact">
        <p>
          Une question, besoin de précisions ?<br />
          Écrivez-nous à <a href="mailto:cilene.vianney@email.com">cilene.vianney@email.com</a>
          <br />
          ou contactez-nous au <a href="tel:+33612345678">+33 6 12 34 56 78</a>.
        </p>
        <p>
          {t.practical.gifts.description}{" "}
          <a href="https://www.mavilleliste.com/xxx" target="_blank" rel="noopener noreferrer">
            {t.practical.gifts.link}
          </a>
          .
        </p>
      </section>
    </section>
  );
}
