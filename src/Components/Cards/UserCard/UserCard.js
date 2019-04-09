import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faMapMarked} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

import data from '../../../Data/profile.json';
import resume from '../../../Data/profile.pdf';

import './UserCard.css';
import ActionButton from '../../Buttons/ActionButton/ActionButton';
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
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="user-details user-name user-friendly-name">
                    {this.getUserFriendlyName()} 
                </div>
                <div className="user-details user-name user-known-as">
                    (known as {data.user.knownAs})
                </div>
                <div className="user-details user-title">
                    {data.user.title}
                </div>
                <div className="user-details user-based-in">
                    <FontAwesomeIcon icon={faMapMarked}/>
                    <span className="iconed-label">{data.user.based}</span>
                </div>
                
                <div className="user-details user-contact-social">
                    <a className="user-contact-link social" target="_blank" rel="noopener noreferrer" 
                        href={data.user.contact.social.linkedIn}>
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>  
                    <a className="user-contact-link social" target="_blank" rel="noopener noreferrer" 
                        href={data.user.contact.social.gitHub}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a> 
                </div>

                

                <div className="user-details user-contact-wrapper">
                    <DownloadButton type={CONSTANTS.ICONTYPE.FILEDOWNLOAD}
                        value={resume}
                        btnClass="user-contact-button resume"
                        linkClass="user-contact-link"
                        tooltip="Download resume">
                        <span className="iconed-label">Download Resume</span>                        
                    </DownloadButton>
                    <ActionButton type={CONSTANTS.ICONTYPE.PHONE}
                                    value={this.contact.phone.link('tel:')} 
                                    btnClass="user-contact-button phone" 
                                    linkClass="user-contact-link"
                                    tooltip="Click to ring me">
                        <span className="iconed-label">{this.contact.phone.display}</span>
                    </ActionButton>
                    <ActionButton type={CONSTANTS.ICONTYPE.EMAIL}
                                    value={this.contact.email.link('mailto:')} 
                                    btnClass="user-contact-button email" 
                                    linkClass="user-contact-link"
                                    tooltip="Click to open email client">
                        <span className="iconed-label">{this.contact.email.display}</span>
                    </ActionButton>
                </div>
            </div>
        );
    }

    getUserFriendlyName(){
        return ''.concat(data.user.firstName, ' ', data.user.lastName);
    }

    getUserPhoneNumber(isRaw){
        if(isRaw){
            return '+'.concat(data.user.contact.phone.countryCode, data.user.contact.phone.number.replace(/'-'/g, ''));
        }
        return '+'.concat(data.user.contact.phone.countryCode, ' (0) ', data.user.contact.phone.number);
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