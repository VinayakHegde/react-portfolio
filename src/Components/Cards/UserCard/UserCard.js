import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserSecret, faMapMarked} from '@fortawesome/free-solid-svg-icons';

import resume from '../../../Data/profile.pdf';
import {ICONTYPE} from '../../../Helpers/Enums';
import {UserDetails} from '../../../Helpers/DataValidator';
import DownloadButton from '../../Buttons/DownloadButton/DownloadButton';
import './UserCard.css';

class UserCard extends Component {
    render() {
        const cssClass = "user-card ".concat(this.props.cssClass);
        const knownAs = UserDetails.KnownAs.length ? "(Known as ".concat(UserDetails.KnownAs, ')') : '';
        return (
            <div className={cssClass}>
                <div className="user-icon" title={UserDetails.KnownAs}>
                    <FontAwesomeIcon icon={faUserSecret}/>
                </div>
                <div className="user-details user-name user-friendly-name">
                    {UserDetails.FriendlyName} 
                </div>
                <div className="user-details user-name user-known-as">
                    {knownAs}
                </div>
                <div className="user-details user-name user-known-as">
                    {UserDetails.JobTitle}
                </div>
                <div className="user-details user-title">
                    {UserDetails.subTitle}
                </div>
                <div className="user-details user-based-in">
                    <FontAwesomeIcon icon={faMapMarked}/>
                    <span className="iconed-label">{UserDetails.Location}</span>
                </div>
                <div className="user-details download-wrapper">
                    <DownloadButton type={ICONTYPE.FILEDOWNLOAD}
                        value={resume}
                        btnClass="download-button resume"
                        linkClass="button-link"
                        tooltip="Download resume">
                        <span className="iconed-label">Download Resume</span>                        
                    </DownloadButton>
                </div>
            </div>
        );
    }
}

export default UserCard;