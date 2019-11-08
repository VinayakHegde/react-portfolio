import React from "react";
import PropTypes from "prop-types";

import { ICONTYPE } from "Helpers/Enums";
import { UserDetails } from "Helpers/DataValidator";
import resume from "Data/vinayak.nandi@gmail.com.doc";
import DownloadButton from "Components/Buttons/DownloadButton";
import Icon from "Components/Icon";
import "./UserCard.scss";

const UserCard = ({ cssClass }) => {
  const cssClassName = "user-card ".concat(cssClass);
  const knownAs = UserDetails.KnownAs.length
    ? "(Known as ".concat(UserDetails.KnownAs, ")")
    : "";
  return (
    <div className={cssClassName}>
      <div className="user-details user-name user-friendly-name">
        {UserDetails.FriendlyName}
      </div>
      <div className="user-details user-name user-known-as">{knownAs}</div>
      <div className="user-details user-name user-known-as">
        {UserDetails.JobTitle}
      </div>
      <div className="user-details user-title">{UserDetails.subTitle}</div>
      <div className="user-details user-based-in">
        <Icon type={ICONTYPE.MAP} />
        <span className="iconed-label">{UserDetails.Location}</span>
      </div>
      <div className="user-details download-wrapper">
        <DownloadButton
          value={resume}
          btnClass="download-button resume"
          linkClass="button-link"
          tooltip="Download resume"
        >
          <Icon type={ICONTYPE.FILEDOWNLOAD} />
          <span className="iconed-label">Download Resume</span>
        </DownloadButton>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  cssClass: PropTypes.string
};

export default UserCard;
