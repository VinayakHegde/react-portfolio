import React, { Component } from 'react';

import ActionButton from '../Buttons/ActionButton/ActionButton';
import {UserContacts} from '../../Helpers/DataValidator';
import {ICONTYPE} from '../../Helpers/Enums';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ActionButton type={ICONTYPE.PHONE}
                                    value={'tel:'.concat(UserContacts.Phone)} 
                                    btnClass="button phone" 
                                    linkClass="button-link"
                                    tooltip="Click to ring me">
                    </ActionButton>
                    <ActionButton type={ICONTYPE.EMAIL}
                                    value={'mailto:'.concat(UserContacts.Email)} 
                                    btnClass="button email" 
                                    linkClass="button-link"
                                    tooltip="Click to open email client">
                    </ActionButton>
                    <ActionButton type={ICONTYPE.LINKEDIN}
                                    value={UserContacts.LinkedIn} 
                                    btnClass="button linkedin" 
                                    linkClass="button-link"
                                    tooltip="Visit my linkedIn profile">
                    </ActionButton>
                    <ActionButton type={ICONTYPE.GITHUB}
                                    value={UserContacts.Github} 
                                    btnClass="button github" 
                                    linkClass="button-link"
                                    tooltip="Visit my github">
                    </ActionButton>
            </footer>
        );
    }
}

export default Footer;