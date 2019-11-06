import React from "react";

import ActionButton from "Components/Buttons/ActionButton";
import { UserContacts } from "Helpers/DataValidator";
import { ICONTYPE } from "Helpers/Enums";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <ActionButton
      type={ICONTYPE.PHONE}
      value={`https://wa.me/${UserContacts.Mobile}?text=Hi%20Vinnie,%20I%20am%20impressed%20with%20your%20experience%20and%20skillset.%20Can%20we%20talk?`}
      btnClass="disc phone"
      linkClass="button-link"
      tooltip="Whatsapp me"
    />
    <ActionButton
      type={ICONTYPE.EMAIL}
      value={`mailto:${UserContacts.Email}`}
      btnClass="disc email"
      linkClass="button-link"
      tooltip="Email me"
    />
    <ActionButton
      type={ICONTYPE.LINKEDIN}
      value={UserContacts.LinkedIn}
      btnClass="disc linkedin"
      linkClass="button-link"
      tooltip="Visit my linkedIn profile"
    />
    <ActionButton
      type={ICONTYPE.GITHUB}
      value={UserContacts.Github}
      btnClass="disc github"
      linkClass="button-link"
      tooltip="Visit my github"
    />
  </footer>
);

export default Footer;
