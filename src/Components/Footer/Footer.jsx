import React from "react";

import Button from "Components/Button";
import { UserContacts } from "Helpers/DataValidator";
import { ICONTYPE } from "Models/Enums";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Button {...{
      type: ICONTYPE.PHONE,
      value: `https://wa.me/${UserContacts.Mobile}?text=Hi%20Vinnie,%20I%20am%20impressed%20with%20your%20experience%20and%20skillset.%20Can%20we%20talk?`,
      btnClass: "footer__disc phone",
      tooltip: "Whatsapp me"
    }}/>
    <Button {...{
      type: ICONTYPE.EMAIL,
      value: `mailto:${UserContacts.Email}`,
      btnClass: "footer__disc email",
      tooltip: "Email me"
    }}/>
    <Button {...{
      type: ICONTYPE.LINKEDIN,
      value: UserContacts.LinkedIn,
      btnClass: "footer__disc linkedin",
      tooltip: "Visit my linkedIn profile"
    }}/>
    <Button {...{
      type: ICONTYPE.GITHUB,
      value: UserContacts.Github,
      btnClass: "footer__disc github",
      tooltip: "Visit my github"
    }}/>
  </footer>
);

export default Footer;
