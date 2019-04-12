import React, { Component } from 'react';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
// import { faGlobe} from '@fortawesome/free-solid-svg-icons';
 
import ActionButton from '../Buttons/ActionButton/ActionButton';
import CONSTANTS from '../Helpers/Contants';
import ContactHelper from '../Helpers/Contact';
import data from '../../Data/profile.json';

import './Footer.css';

class Footer extends Component {
    constructor (props){
        super(props);
        this.contact = {
            phone : new ContactHelper(CONSTANTS.ICONTYPE.PHONE, data),
            email : new ContactHelper(CONSTANTS.ICONTYPE.EMAIL, data),
            linkedIn : new ContactHelper(CONSTANTS.ICONTYPE.LINKEDIN, data),
            github : new ContactHelper(CONSTANTS.ICONTYPE.GITHUB, data)
        }
    }
    render() {
        return (
            <footer className="footer">
                <ActionButton type={CONSTANTS.ICONTYPE.PHONE}
                                    value={this.contact.phone.link('tel:')} 
                                    btnClass="button phone" 
                                    linkClass="button-link"
                                    tooltip="Click to ring me">
                    </ActionButton>
                    <ActionButton type={CONSTANTS.ICONTYPE.EMAIL}
                                    value={this.contact.email.link('mailto:')} 
                                    btnClass="button email" 
                                    linkClass="button-link"
                                    tooltip="Click to open email client">
                    </ActionButton>
                    <ActionButton type={CONSTANTS.ICONTYPE.LINKEDIN}
                                    value={this.contact.linkedIn.raw} 
                                    btnClass="button linkedin" 
                                    linkClass="button-link"
                                    tooltip="Visit my linkedIn profile">
                    </ActionButton>
                    <ActionButton type={CONSTANTS.ICONTYPE.GITHUB}
                                    value={this.contact.github.raw} 
                                    btnClass="button github" 
                                    linkClass="button-link"
                                    tooltip="Visit my github">
                    </ActionButton>
            </footer>
        );
    }
}

export default Footer;