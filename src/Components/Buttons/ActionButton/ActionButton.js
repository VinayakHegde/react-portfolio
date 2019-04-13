import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

import {ICONTYPE} from '../../../Helpers/Enums';

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
            case ICONTYPE.PHONE:
                return faPhone;
            case ICONTYPE.EMAIL:
                return faEnvelope;
            case ICONTYPE.GITHUB:
                return faGithub;
            case ICONTYPE.LINKEDIN:
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