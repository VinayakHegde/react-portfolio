import React from "react";

import ActionButton from "Components/Buttons/ActionButton";
import { UserContacts } from "Helpers/DataValidator";
import { ICONTYPE } from "Helpers/Enums";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <ActionButton
      type={ICONTYPE.PHONE}
      value={"tel:".concat(UserContacts.Phone)}
      btnClass="disc phone"
      linkClass="button-link"
      tooltip="Click to ring me" />
    <ActionButton
      type={ICONTYPE.EMAIL}
      value={"mailto:".concat(UserContacts.Email)}
      btnClass="disc email"
      linkClass="button-link"
      tooltip="Click to open email client" />
    <ActionButton
      type={ICONTYPE.LINKEDIN}
      value={UserContacts.LinkedIn}
      btnClass="disc linkedin"
      linkClass="button-link"
      tooltip="Visit my linkedIn profile" />
    <ActionButton
      type={ICONTYPE.GITHUB}
      value={UserContacts.Github}
      btnClass="disc github"
      linkClass="button-link"
      tooltip="Visit my github" />
  </footer>
);

export default Footer;
