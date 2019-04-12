import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserSecret, faMapMarked} from '@fortawesome/free-solid-svg-icons';

import data from '../../../Data/profile.json';
import resume from '../../../Data/profile.pdf';

import './UserCard.css';
import DownloadButton from '../../Buttons/DownloadButton/DownloadButton';

import CONSTANTS from '../../Helpers/Contants';

class UserCard extends Component {
    constructor (props){
        super(props);
        this.contact = {
            phone : new this.defineValueFor(CONSTANTS.ICONTYPE.PHONE),
            email : new this.defineValueFor(CONSTANTS.ICONTYPE.EMAIL)
        }
    }

    render() {
        const cssClass = "user-card ".concat(this.props.cssClass);
        return (
            <div className={cssClass}>
                <div className="user-icon" title={data.user.knownAs}>
                    <FontAwesomeIcon icon={faUserSecret}/>
                </div>
                <div className="user-details user-name user-friendly-name">
                    {this.getUserFriendlyName()} 
                </div>
                <div className="user-details user-name user-known-as">
                    (known as {data.user.knownAs})
                </div>
                <div className="user-details user-name user-known-as">
                    {data.user.jobTitle}
                </div>
                <div className="user-details user-title">
                    {data.user.subTitle}
                </div>
                <div className="user-details user-based-in">
                    <FontAwesomeIcon icon={faMapMarked}/>
                    <span className="iconed-label">{data.user.based}</span>
                </div>
                <div className="user-details download-wrapper">
                    <DownloadButton type={CONSTANTS.ICONTYPE.FILEDOWNLOAD}
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

    getUserFriendlyName(){
        return ''.concat(data.user.firstName, ' ', data.user.lastName);
    }    

    defineValueFor(type){
        switch(type){
            case CONSTANTS.ICONTYPE.EMAIL:
                this.display = data.user.contact.email;
                this.raw = data.user.contact.email;
                break;
            default: 
                this.display = '+'.concat(data.user.contact.phone.countryCode, ' (0) ', data.user.contact.phone.number);;
                this.raw = '+'.concat(data.user.contact.phone.countryCode, data.user.contact.phone.number.replace(/'-'/g, ''));
                break;
        }
        
        this.link = prefix => {
            if(prefix && prefix.length){
                return prefix.concat(this.raw);
            }
            return this.raw;
        }
    }


}

export default UserCard;