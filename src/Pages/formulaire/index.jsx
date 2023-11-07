import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./formulaire.scss";

const FormulaireSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    // Configure le service Email.js
    const serviceID = "service_l1v4r9t";
    const templateID = "template_3h3roso";
    const publicKey = "rqtfT6tqPAspV8zBG";

    // Envoye l'email via Email.js
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email envoyé avec succès!", response);
        setFormData({ name: "", email: "", message: "" }); // Réinitialisation du formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error);
      });
  };

  return (
    <div className="section-form">
      <div className="formulaire-section">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="formulaire-item">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="formulaire-item">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="formulaire-item">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="formulaire-item send">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormulaireSection;
