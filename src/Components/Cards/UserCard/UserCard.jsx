import React from "react";
import PropTypes from "prop-types";

import { ICONTYPE } from "Helpers/Enums";
import { UserDetails } from "Helpers/DataValidator";
import resume from "Data/vinayak.nandi@gmail.com.doc";
import Button from "Components/Button";
import Icon from "Components/Icon";
import "./UserCard.scss";

const UserCard = ({ cssClass }) => {
  const cssClassName = "user__card ".concat(cssClass);
  const knownAs = UserDetails.KnownAs.length
    ? "(Known as ".concat(UserDetails.KnownAs, ")")
    : "";
  return (
    <div className={cssClassName}>
      <div className="user__details user__name user__friendly-name">
        {UserDetails.FriendlyName}
      </div>
      <div className="user__details user__name user__known-as">{knownAs}</div>
      <div className="user__details user__name user__known-as">
        {UserDetails.JobTitle}
      </div>
      <div className="user__details user__title">{UserDetails.subTitle}</div>
      <div className="user__details user__based-in">
        <Icon type={ICONTYPE.MAP} />
        <span className="iconed-label">{UserDetails.Location}</span>
      </div>
      <div className="user__details download__wrapper">
        <Button {...{
          value: resume,
          btnClass: "download__button resume",
          linkClass: "button-link",
          tooltip: "Download resume",
          type: ICONTYPE.FILEDOWNLOAD
        }}>
          <span className="iconed-label">Download Resume</span>
        </Button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  cssClass: PropTypes.string
};

export default UserCard;
