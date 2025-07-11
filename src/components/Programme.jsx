import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Programme.css';

export default function Programme() {
  return (
    <section style={{
      background: "#f8f7f2",
      padding: "64px 0 36px 0"
    }}>
      <div className="programme-letterist">

        {/* VENDREDI */}
        <Accordion className="prog-accordion" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="programme-date">Vendredi 16 juillet</span>
            <span className="programme-texte">Verre de bienvenue</span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="programme-details">
              <span>Accueil à partir de 18h • Terrasse du château</span>
              {/* Ajoute d'autres détails ici */}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* SAMEDI */}
        <Accordion className="prog-accordion star" defaultExpanded disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <span className="programme-date-star">
              <span className="jour">Samedi</span>
              <span className="date">17 juillet</span>
            </span>
            <span className="programme-texte-star">
              <strong>Cérémonie &amp; réception</strong>
              <span className="accent-festif">— Le grand jour !</span>
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="programme-details">
              <ul>
                <li>15h30 : Accueil des invités &amp; installation</li>
                <li>16h00 : Cérémonie dans les jardins</li>
                <li>17h30 : Cocktail au soleil</li>
                <li>19h30 : Dîner festif &amp; soirée dansante</li>
                {/* ...ajoute d'autres détails */}
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* DIMANCHE */}
        <Accordion className="prog-accordion" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <span className="programme-date">Dimanche 18 juillet</span>
            <span className="programme-texte">Déjeuner au bord de la piscine</span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="programme-details">
              <span>À partir de 11h30 • Piscine du château • Dress code décontracté</span>
            </div>
          </AccordionDetails>
        </Accordion>

      </div>
    </section>
  );
}
