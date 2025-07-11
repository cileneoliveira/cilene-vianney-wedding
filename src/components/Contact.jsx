import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-titre">Nous contacter</h2>
      <div className="contact-infos">
        <div>
          <strong>Mail :</strong>{" "}
          <a href="mailto:cilene.vianney@email.com">cilene.vianney@email.com</a>
        </div>
        <div>
          <strong>Tél :</strong> <a href="tel:+33612345678">+33 6 12 34 56 78</a>
        </div>
        <div>
          <strong>Tél (Vianney) :</strong> <a href="tel:+33698765432">+33 6 98 76 54 32</a>
        </div>
      </div>
    </section>
  );
}
