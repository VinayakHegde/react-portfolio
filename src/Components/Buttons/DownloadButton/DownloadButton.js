import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import {ICONTYPE} from '../../../Helpers/Enums';

class Download extends Component {
    render() {
        const {btnClass, linkClass, value, type, tooltip, children} = this.props;
        let icon = type === ICONTYPE.FILEDOWNLOAD ? faFileDownload : null;
        return (
            <button className={btnClass} >
                <a target="_blank" rel="noopener noreferrer" 
                    className={linkClass}
                    href={value}  
                    title={tooltip}>
                    <FontAwesomeIcon icon={icon}/>
                    {children}
                </a>
            </button>
        );
    }
}

Download.propTypes = {
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
export default Download;