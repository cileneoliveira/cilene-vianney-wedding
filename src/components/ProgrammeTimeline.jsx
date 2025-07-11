import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import "./ProgrammeTimeline.css";

export default function ProgrammeTimeline() {
  const { getTranslationKey } = useLanguage();
  const translationKey = getTranslationKey();
  const t = translations[translationKey];

  return (
    <section className="programme-timeline-section" id="programme">
      <h2 className="programme-titre">{t.programme.title}</h2>
      <div className="timeline-vertical timeline-flex">
        {/* Step 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-icon">
            <div className="icon-placeholder">🥂</div>
          </div>
          <div className="timeline-content">
            <Accordion className="timeline-accordion" disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <span className="timeline-date">{t.programme.friday.title}</span>
                <span className="timeline-texte">{t.programme.friday.event}</span>
              </AccordionSummary>
              <AccordionDetails>
                <div className="timeline-details">
                  <span>{t.programme.friday.time} · Mairie de Saint-Raphaël</span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* Step 2 */}
        <div className="timeline-item">
          <div className="timeline-dot principale"></div>
          <div className="timeline-icon">
            <div className="icon-placeholder">🌞</div>
          </div>
          <div className="timeline-content">
            <Accordion className="timeline-accordion star" disableGutters defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <span className="timeline-date principale">{t.programme.saturday.title}</span>
                <span className="timeline-texte principale">{t.programme.saturday.event}</span>
              </AccordionSummary>
              <AccordionDetails>
                <div className="timeline-details">
                  <ul>
                    <li>{t.programme.saturday.time} · Église Notre-Dame de la Victoire</li>
                    <li>17h30 : Cocktail au soleil</li>
                    <li>19h30 : Dîner festif & soirée dansante</li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* Step 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-icon">
            <div className="icon-placeholder">🏊‍♂️</div>
          </div>
          <div className="timeline-content">
            <Accordion className="timeline-accordion" disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <span className="timeline-date">{t.programme.sunday.title}</span>
                <span className="timeline-texte">{t.programme.sunday.event}</span>
              </AccordionSummary>
              <AccordionDetails>
                <div className="timeline-details">
                  <span>{t.programme.sunday.time} · Brunch de clôture</span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
