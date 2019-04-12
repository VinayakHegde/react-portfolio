import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

import CONSTANTS from '../../Helpers/Contants';

class ActionButton extends Component {
    constructor (props){
        super(props);
        this.stopPropagation = this.stopPropagation.bind(this);
    }
    
    stopPropagation(e){
        e.stopPropagation();
        // show toast msg 
    }

    render() {
        const {btnClass, linkClass, value, children, type, tooltip} = this.props;
        let icon = this.getIcon(type);
        return (
            <button className={btnClass} >
                <a target="_blank" rel="noopener noreferrer" 
                    className={linkClass}
                    href={value}  
                    title={tooltip}
                    onClick={this.stopPropagation}>
                    <FontAwesomeIcon icon={icon}/>
                    {children}
                </a>
            </button>

        );
    }

    getIcon(type){
        switch(type){
            case CONSTANTS.ICONTYPE.PHONE:
                return faPhone;
            case CONSTANTS.ICONTYPE.EMAIL:
                return faEnvelope;
            case CONSTANTS.ICONTYPE.GITHUB:
                return faGithub;
            case CONSTANTS.ICONTYPE.LINKEDIN:
                return faLinkedinIn;
            default: break;
        }
    }
}

ActionButton.propTypes = {
    type : PropTypes.string,
    value : PropTypes.string,
    btnClass : PropTypes.string,
    linkClass : PropTypes.string,
    tooltip : PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default ActionButton;